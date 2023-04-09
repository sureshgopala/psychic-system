import React, { useState } from 'react';

const FileSaver = () => {
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('');
  const [savedFile, setSavedFile] = useState(null);
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFilenameChange = (event) => {
    setFilename(event.target.value);
  };

  const handleSave = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const file = new File([blob], filename);
    setSavedFile(file);
  };

  const handleClear = () => {
    setSavedFile(null);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width:"400px", marginLeft:"300px" }}>
      <label style={{color: "black", marginLeft: "0px", marginBottom:"10px",position:"relative", width :"200px", fontSize: "15px" }}>
          SOLC Version:
      <select value={selectedValue} onChange={handleSelectChange} style={{position:"relative", top:"-20px", marginLeft:"150px"}}>
      <option value="">-- Select an option --</option>
      <option value="option1">0.5.0</option>
      <option value="option2">0.6.0</option>
      <option value="option3">0.7.0</option>
      <option value="option3">0.8.0</option>
    </select>
      </label>
      <textarea placeholder="Input smart contract for compilation" style={{ marginLeft: "1rem" , marginTop:"10px", height:"200px", width:"500px"}}/>
      <textarea placeholder="ABI" style={{ position:"relative", top:"-210px", left:"600px", marginLeft: "1rem", marginLeft: "1rem" , marginTop:"10px", height:"200px", width:"500px"}} value={content} onChange={handleContentChange} />
      <textarea placeholder="Bytecode" style={{ position:"relative", top:"-200px", left:"600px", marginLeft: "1rem", marginTop:"10px", height:"200px", width:"500px"}}/>
      <button  style={{ marginLeft: "30px", marginTop:"10px", width:"80px", position:"relative", top:"-400px"}} onClick={handleSave} >Compile</button>
      {savedFile && (
        <div>
          <p> Saved file: {savedFile.name}</p>
          <button onClick={handleClear}>Clear</button>
          <a href={URL.createObjectURL(savedFile)} download={savedFile.name}>
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default FileSaver;
