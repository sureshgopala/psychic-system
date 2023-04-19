import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <label style={{color: "black", marginLeft: "3px", marginBottom:"10px",position:"relative", width :"200px", fontSize: "15px", top:"30px"}}>
          Deploy to Chain:  </label>
      <select class="form-control" value={selectedValue} onChange={handleSelectChange} style={{height:"-8px",position:"relative", top:"-10px", width:"120px",marginLeft:"180px"}}>
      <option value="">-- Select an option --</option>
      <option value="option1">ganache</option>
      <option value="option2">Goerli</option>
      <option value="option3">pleiades_dev</option>
      <option value="option3">pleiades_sandbox</option>
    </select>

      <label style={{color: "black", marginLeft: "-20px", marginBottom:"10px",position:"relative", width :"200px", fontSize: "15px", top:"10px" }}>
          Accounts:     </label>
      <select class="form-control"  value={selectedValue} onChange={handleInputChange} style={{position:"relative", top:"-30px", marginLeft:"200px", left:"-20px", width:"100px"}}>
      <option value="">-- Select an option --</option>
      <option value="option1">add a new account</option>
      <option value="option2">input exisiting account</option>
    </select>
 
      {showAdditionalInput && (
          <input  className="form-control" style={{position:"relative", right:"-300px",top:"-65px",marginBottom:"20px"}}type="text" />
      )}
      <button className="btn btn-primary" style={{color:"white",position:"relative", top:"-20px",marginTop: "0px", marginLeft: "5px", width:"50px",left:"180px"}}>Add</button>
      <label style={{color: "black", marginLeft: "-16px", marginBottom:"10px",position:"relative", width :"200px", fontSize: "15px", top:"-10px", left:"5px" }}>
          Gas Values:   </label>
      <select class="form-control" value={selectedValue} onChange={handleSelectChange} style={{position:"relative", top:"-40px", marginLeft:"200px", left:"-20px"}}>
      <option value="">-- Select an option --</option>
      <option value="option1">1000000 wei</option>
      <option value="option2">2000000 wei</option>
      <option value="option1">3000000 wei</option>
      <option value="option2">4000000 wei</option>
      <option value="option1">5000000 wei</option>
      <option value="option2">6000000 wei</option>
    </select>
   
      <button   className="btn btn-primary" style={{ left:"-15px",position:"relative", marginLeft: "200px", width: "50px", top:"-30px",marginTop:"5px"}}>Deploy</button>
      <textarea className="form-control" placeholder="Transaction Details" style={{ position:"relative", top:"-20px",marginLeft: "1rem" , left:"50px",marginTop:"10px", height:"200px", width:"500px"}}/>
    </div>
  );
};

export default DeployToChain;
