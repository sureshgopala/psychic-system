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
    const [copyTestCases, setTestCases] = useState('');

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
        const response =  await openai.createCompletion({
        model: "text-davinci-003",
        prompt: 'Generate Smart Contract Code for' + prompt,
        max_tokens: 2048,
        temperature: 0,
        });
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
      const makeOpenAIAPIRequestTests = async () => {
          try {
            const { Configuration, OpenAIApi } = require("openai");
            const configuration = new Configuration({
            apiKey: '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',
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: 'Generate Smart Contract Unit Tests in python for' + responseText,
            max_tokens: 2048,
            temperature: 0,
            });
           setTestCases(response.data.choices[0].text);
      } catch (error) {
        console.error(error);
      }
    };

    const noTests = ()=>{
      alert("No Test Cases Created");
    }
      
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{color: "black",marginTop: "20px", marginLeft: "300px", marginBottom:"10px", clear: "left",display: "flex", flexDirection: "row", width :"400px", paddingBottom: "20px", paddingRight: "10px", fontSize: "20px", fontSize:"15px" }}>
          Generate Smart Contract For:
          </label>
        <input style={{marginTop:"-10px", marginLeft: "300px", marginBottom:"10px"}} value={prompt} className="prompt" id="prompting" onChange={(e) => setPrompt(e.target.value)} /> 
        <button onClick={makeOpenAIAPIRequest} style={{marginLeft: "-20px", alignItems: "center", marginBottom: "10px", width:"100px", alignSelf:"center"}}>Generate Code</button>
        <textarea className="code-space" value={responseText} onChange={(e) => setResponseText(e.target.value)}  style={{ marginBottom: "1rem" }} />
        <input placeholder="Enter your file name" className="shadow" style={{ height: "30px", width: "300px", marginLeft:"300px", marginTop:"10px"}} type="text" value={filename} onChange={handleFilenameChange} />
        <button style={{ marginLeft: "900px", width: "200px", marginTop:"10px", marginBottom:"10px"}}onClick={copyToClipboard}>Copy to Clipboard</button>
        <button  style={{ marginLeft: "300px", width: "100px", marginTop:"5px"}} onClick={handleSave} >Save</button>
        {savedFile && 
        <div>
          <button style={{ marginLeft: "300px", position:"relative", top:"-20px", width: "100px",marginBottom:"20pxpx", marginLeft:"-500px"}} onClick={handleClear}>Clear</button>
          <p style={{ color:"white", marginLeft: "-680px", fontSize:"15px", marginTop:"20px"}}>Saved file: {savedFile.name}</p>
          <a style={{marginLeft: "-740px", fontSize:"15px", position:"relative",top:"-20px", textDecoration:"underline", color:"blue"}} href={URL.createObjectURL(savedFile)} download={savedFile.name}>
            Download The File
          </a>
        </div>
      };
          <label style={{color: "black",marginTop: "20px", marginLeft: "300px",position:"relative",top:"-20px", marginBottom:"10px",display: "flex", flexDirection: "row", width :"500px", paddingBottom: "20px", paddingRight: "10px", fontSize: "20px", fontSize:"15px" }}>
          Do you want to create unit test cases for this contract?:
          <button style={{color: "black",marginTop: "0px", marginLeft: "5px", width:"30px"}} onClick={makeOpenAIAPIRequestTests}>Yes</button>
          <button style={{color: "black",marginTop: "0px", marginLeft: "5px", width:"30px"}} onClick={noTests}>No</button>
          </label>
          <textarea className="code-space" value={copyTestCases} onChange={(e) => makeOpenAIAPIRequestTests(e.target.value)}  style={{ marginBottom: "1rem" }} />
    </div>
    );
  };
export default AxiosCallComponent;
