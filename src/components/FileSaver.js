import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FileSaver = () => {
 

  return (
    <div className="form-group" >
    <p style={{fontSize:"12px",position:"relative", top:"80px",  left:"-300px",marginLeft:"180px"}} id="status">status here... </p>
    <label style={{fontSize:"15px",position:"relative", top:"20px",  left:"-430px",marginLeft:"180px"}} > Solc Versions 
    <select id="versions" className="form-control"  style={{height:"-8px",position:"relative", top:"-30px", width:"120px", left:"30px",marginLeft:"180px"}}>Versions
      <option value="">-- Select an option --</option>
      <option value="option1">0.4.0 </option>
      <option value="option2">0.5.0</option>
      <option value="option3">0.6.0</option>
      <option value="option3">0.7.0</option>
      <option value="option3">0.8.0</option>
    </select> 
    </label>
      <textarea  className="form-control" placeholder="Input smart contract for compilation" style={{position:"relative",top:"30px", marginLeft: "1rem" , left:"300px",marginTop:"10px", height:"200px", width:"500px"}}/>
      <textarea  className="form-control" placeholder="ABI" style={{ position:"relative", top:"-180px", left:"900px", marginLeft: "1rem", marginLeft: "1rem" , marginTop:"10px", height:"200px", width:"500px"}} />
      <textarea  className="form-control" placeholder="Bytecode" style={{ position:"relative", top:"-100px", left:"900px", marginLeft: "1rem", marginTop:"10px", height:"200px", width:"500px"}}/>
      <button  className="btn btn-primary" style={{ marginLeft: "30px", marginTop:"10px", width:"80px", position:"relative", top:"-380px"}} >Compile</button>
    </div>
  );
};

export default FileSaver;
