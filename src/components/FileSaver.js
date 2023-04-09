import React, { useState } from 'react';

const FileSaver = () => {
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('');
  const [savedFile, setSavedFile] = useState(null);

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
      <label style={{color: "black", marginLeft: "10px", marginBottom:"10px", clear: "left",display: "flex", flexDirection: "row", width :"80px", paddingRight: "10px", fontSize: "20px" }}>
          Prompt:
      <input style={{display: "flex", height: "20px", width:"600px", marginTop:"5px", marginLeft:"10px"}} type="text" value={filename} onChange={handleFilenameChange} />
      </label>
      <textarea style={{ marginLeft: "1rem" , marginTop:"10px", height:"200px", width:"500px"}} value={content} onChange={handleContentChange} />
      <button  style={{ marginLeft: "30px", marginTop:"10px"}} onClick={handleSave} >Save</button>
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
