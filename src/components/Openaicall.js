import React, { useState } from "react";
import { OpenAIApi } from "openai";
import copy from "copy-to-clipboard";
import { Heading, Input1, Input2, Container, Button } from './Styles'



function AxiosCallComponent() {
    const [prompt, setPrompt] = useState("");
    const [responseText, setResponseText] = useState("");
    const [content, setContent] = useState('');
    const [filename, setFilename] = useState('');
    const [savedFile, setSavedFile] = useState(null);
    const [copyText, setCopyText] = useState('');
  
    const handleContentChange = (event) => {
        setContent(event.target.value);
      };
    
      const handleFilenameChange = (event) => {
        setFilename(event.target.value);
      };


    const handleClear = () => {
        setSavedFile(null);
      };

    const makeOpenAIAPIRequest = async () => {
      try {
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
        apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 0,
        });
     
       /* const response = await axios.post(
          "https://api.openai.com/v1/engines/text-davinci-003/completions",
          {
            prompt: prompt,
            max_tokens: 50,
            n: 1,
            stop: "\n",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer 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`,
            },
          }
        );
        const fs = require('fs');
        fs.writeFile('./response.txt', response.data.choices[0].text, err => {
          if (err) throw err;
          console.log('Response saved to file');
        });*/
        setResponseText(response.data.choices[0].text);
        
      // setResponseText(JSON.stringify(response.data, null, 2));
      } catch (error) {
        console.error(error);
      }
    };
    const handleSave = async () => {
        const blob = new Blob([responseText], { type: 'text/plain' });
        const file = new File([blob], filename);
        setSavedFile(file);
      };

    	const copyToClipboard = () => {
        copy(responseText);
        alert(`You have copied "${copyText}"`);
        }
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{color: "black", marginLeft: "300px", marginBottom:"10px", clear: "left",display: "flex", flexDirection: "row", width :"80px", paddingBottom: "20px", paddingRight: "10px", fontSize: "20px" }}>
          Prompt:
        <input className="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        </label>
        <button onClick={makeOpenAIAPIRequest} style={{marginLeft: "400px", alignItems: "center", marginBottom: "10px", width:"100px", alignSelf:"center"}}>Generate Code</button>
        <textarea className="code-space" value={responseText} onChange={(e) => setResponseText(e.target.value)}  style={{ marginBottom: "1rem" }} />
        <button style={{ marginLeft: "300px", width: "300px", marginTop:"10px", marginBottom:"10px"}}onClick={copyToClipboard}>Copy to Clipboard</button>
        <input placeholder="Enter your file name" className="shadow" style={{ height: "30px", width: "300px", marginLeft:"300px"}} type="text" value={filename} onChange={handleFilenameChange} />
        <button  style={{ marginLeft: "300px", width: "300px", marginTop:"10px"}} onClick={handleSave} >Save</button>
        {savedFile && (
        <div>
          <button style={{ marginLeft: "300px", width: "300px",marginTop:"10px", marginLeft:"-563px"}} onClick={handleClear}>Clear</button>
          <p style={{ color:"white", marginLeft: "-680px", fontSize:"15px", marginTop:"20px"}}>Saved file: {savedFile.name}</p>
          <a style={{ marginLeft: "-740px", fontSize:"15px", marginTop:"30px"}} href={URL.createObjectURL(savedFile)} download={savedFile.name}>
            Download The File
          </a>
        </div>
      )};
    </div>
    );
  };
export default AxiosCallComponent;
