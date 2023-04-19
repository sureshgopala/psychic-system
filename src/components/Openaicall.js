import React, { useState } from "react";
import { OpenAIApi } from "openai";
import copy from "copy-to-clipboard";
import { Heading, Input1, Input2, Container, Button } from './Styles'
import 'bootstrap/dist/css/bootstrap.min.css';



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
        prompt: prompt,
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
            prompt: responseText,
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
        <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="my-input" style={{color: "black",marginTop: "20px", marginLeft: "300px", marginBottom:"10px", clear: "left",display: "flex", flexDirection: "row", width :"400px", paddingBottom: "20px", paddingRight: "10px", fontSize: "20px", fontSize:"15px" }}>
          Ask Anything:
          </label>
        <input className="form-control" style={{top:"-50px", right: "-120px", position:"relative", marginTop:"-10px", marginLeft: "300px", marginBottom:"10px", width:"400px"}} value={prompt} id="prompting" onChange={(e) => setPrompt(e.target.value)} /> 
        <button className="btn btn-primary" onClick={makeOpenAIAPIRequest} style={{position:"relative", top:"-90px", right:"-200px",marginLeft: "-20px", alignItems: "center", marginBottom: "10px", width:"100px", alignSelf:"center"}}>Generate Code</button>
        <textarea className="form-control" value={responseText} onChange={(e) => setResponseText(e.target.value)}  style={{position:"relative",top:"-80px",height:"200px", width:"600px",left:"300px" ,marginBottom: "1rem",backgroundColor:"black",color:"white" }} />
        <input placeholder="Enter your file name" className="form-control" style={{ position:"relative", top:"-80px",height: "30px", width: "300px", marginLeft:"300px", marginTop:"10px"}} type="text" value={filename} onChange={handleFilenameChange} />
        <button className="btn btn-primary" style={{ position: "relative", top:"-120px",left:"-80px",marginLeft: "900px", width: "100px", marginTop:"10px", marginBottom:"10px"}}onClick={copyToClipboard}>Copy to Clipboard</button>
        <button  className="btn btn-primary" style={{ position:"relative",top:"-110px",marginLeft: "300px", width: "100px", marginTop:"5px"}} onClick={handleSave} >Save</button>
        {savedFile && 
        <div>
          <button className="btn btn-primary" style={{ marginLeft: "300px", position:"relative", top:"-133px", width: "100px",marginBottom:"20pxpx", marginLeft:"-500px"}} onClick={handleClear}>Clear</button>
          <p style={{ color:"white", marginLeft: "-680px", fontSize:"15px", marginTop:"20px"}}>Saved file: {savedFile.name}</p>
          <a class="btn btn-primary" style={{marginLeft: "-740px", right:"-250px" , position:"relative",top:"-210px",}} href={URL.createObjectURL(savedFile)} download={savedFile.name}>
            Download
          </a>
        </div>
      };
          <label htmlFor="my-input" style={{color: "black",marginTop: "20px", marginLeft: "300px",position:"relative",top:"-130px", marginBottom:"10px",display: "flex", flexDirection: "row", width :"550px", paddingBottom: "20px", paddingRight: "10px", fontSize: "20px", fontSize:"15px" }}>
          Do you want to create unit test cases for this contract?:
          <button className="btn btn-primary" style={{color:"white", position:"relative", top:"0px",marginTop: "0px", marginLeft: "5px", width:"50px",}} onClick={makeOpenAIAPIRequestTests}>Yes</button>
          <button className="btn btn-primary" style={{color:"white",position:"relative", top:"0px",marginTop: "0px", marginLeft: "5px", width:"50px",}} onClick={noTests}>No</button>
          </label>
          <textarea className="form-control" value={copyTestCases} onChange={(e) => makeOpenAIAPIRequestTests(e.target.value)}  style={{position:"relative",top:"-150px", height:"200px", width:"600px",left:"300px" ,marginBottom: "1rem",backgroundColor:"black", color:"white" }} />
    </div>
    );
  };
export default AxiosCallComponent;
