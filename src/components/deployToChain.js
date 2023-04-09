import React, { useState } from 'react';

const DeployToChain = () => {
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('');
  const [savedFile, setSavedFile] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedValue, setSelectedValue] = useState('option1');
  const [showAdditionalInput, setShowAdditionalInput] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
    setShowAdditionalInput(event.target.value !== '');
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
      <label style={{color: "black", marginLeft: "3px", marginBottom:"10px",position:"relative", width :"200px", fontSize: "15px" }}>
          Deploy to Chain:
      <select value={selectedValue} onChange={handleSelectChange} style={{position:"relative", top:"-20px", marginLeft:"180px"}}>
      <option value="">-- Select an option --</option>
      <option value="option1">ganache</option>
      <option value="option2">Goerli</option>
      <option value="option3">pleiades_dev</option>
      <option value="option3">pleiades_sandbox</option>
    </select>
      </label>
      <label style={{color: "black", marginLeft: "-20px", marginBottom:"10px",position:"relative", width :"200px", fontSize: "15px" }}>
          Accounts:
      <select value={selectedValue} onChange={handleInputChange} style={{position:"relative", top:"-20px", marginLeft:"200px"}}>
      <option value="">-- Select an option --</option>
      <option value="option1">add a new account</option>
      <option value="option2">input exisiting account</option>
    </select>
      </label>
      {showAdditionalInput && (
        <label style={{fontSize:"15px", position:"relative", left:"-22px"}}>
          Account From:
          <input style={{position:"relative", right:"-35px", marginBottom:"20px"}}type="text" />
        </label> 
      )}
      <label style={{color: "black", marginLeft: "-16px", marginBottom:"10px",position:"relative", width :"200px", fontSize: "15px" }}>
          Gas Values:
      <select value={selectedValue} onChange={handleSelectChange} style={{position:"relative", top:"-20px", marginLeft:"200px"}}>
      <option value="">-- Select an option --</option>
      <option value="option1">1000000 wei</option>
      <option value="option2">2000000 wei</option>
      <option value="option1">3000000 wei</option>
      <option value="option2">4000000 wei</option>
      <option value="option1">5000000 wei</option>
      <option value="option2">6000000 wei</option>
    </select>
      </label>
      <button  style={{ marginLeft: "200px", width: "100px", marginTop:"5px"}}>Deploy</button>
      <textarea placeholder="Transaction Details" style={{ marginLeft: "1rem" , marginTop:"10px", height:"200px", width:"500px"}}/>
    </div>
  );
};

export default DeployToChain;
