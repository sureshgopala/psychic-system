import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
var Web3 = require('web3');

const NetworkTests = () => {
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('');
  const [showMenu, steShowMenu] = useState(false);
  const [savedFile, setSavedFile] = useState('');
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

  const handleSave = async () => {
    if(selectedValue == 'option1'){
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    let block = await web3.eth.getBlockNumber();
    setSavedFile(block);
    } else if(selectedValue == 'option2'){
      var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
      let peers = await web3.eth.net.getPeerCount();
      setSavedFile(peers);
    } else if(selectedValue == 'option6'){
      var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
      let accs = await web3.eth.getAccounts();
      let vals = Object.values(accs);
      setSavedFile(vals);
      }
  };

  const handleClear = () => {
    setSavedFile(null);
  };
  
  const toggleMenu = () =>{
    steShowMenu(!showMenu);
  }

  return (
    <div className="form-group" >
    <label style={{position:"relative", fontSize:"15px", top:"50px"}}> Select Test Type:</label>
    <select className="form-control" style={{height:"-8px",position:"relative", left:"150px",top:"20px", width:"120px",marginLeft:"180px"}}onChange={handleSelectChange}>
      <option value="">-- Select an option --</option>
      <option value="option1">getBlockNumber</option>
      <option value="option2">getPeerCount</option>
      <option value="option2">getValidatorsList</option>
      <option value="option4">getRpcModules</option>
      <option value="option5">getNodeAllowedList</option>
      <option value="option6">getAccounts</option>
      

    </select>

    <label style={{color: "black", marginLeft: "3px", marginBottom:"10px",position:"relative", width :"200px", fontSize: "15px", top:"30px"}} >
          Connect to Chain:  </label>
      <select class="form-control" style={{height:"-8px",position:"relative", left:"150px",top:"-10px", width:"120px",marginLeft:"180px"}}>
      <option value="">-- Select an option --</option>
      <option value="option1">ganache</option>
      <option value="option2">Goerli</option>
      <option value="option3">pleiades_dev</option>
      <option value="option3">pleiades_sandbox</option>
    </select>

      <textarea  className="form-control" placeholder="Test Output" value={savedFile} style={{position:"relative",top:"100px", marginLeft: "1rem" , left:"300px",marginTop:"10px", height:"200px", width:"500px"}} />
      <button  className="btn btn-primary" style={{ marginLeft: "30px", marginTop:"10px", width:"80px", left:"110px",position:"relative", top:"-180px"}} onClick={handleSave} >Run</button>
    </div>
  );
};

export default NetworkTests;
