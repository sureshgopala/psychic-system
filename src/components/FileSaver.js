import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { solidityCompiler, getCompilerVersions } from "@agnostico/browser-solidity-compiler";
import Web3 from 'web3';
import { useRef } from 'react';


const FileSaver = (props) => {
  const [selectedVersion, setSelectedVersion] = useState(''); 
  const [result, setResult] = useState({})
  const [options, setOptions] = useState([]);



  const readVersions =async () => {

    let versionList = []
   const res = await getCompilerVersions()
   setResult(res)
   if(Object.keys(res.releases).length >0) {
    let versionList = Object.keys(res.releases)
    setSelectedVersion(() => res.releases[versionList[0]])
    let sel = document.getElementById('versions')
    sel.innerHTML = ''

  for (let i = 0; i < versionList.length; i++) {
    let opt = document.createElement('option')
    opt.appendChild(document.createTextNode(versionList[i]))
    opt.value = res.releases[versionList[i]]
    sel.appendChild(opt)
  }
   }
  }


  
  useEffect(() => {
    if(Object.keys(result).length === 0) {
      readVersions()
    }
  },[])

  useEffect(() => {
    return () => {}
  },[])

  const getVersion = (e) => {
    setSelectedVersion(() =>  e.target.value)
  }

  function findNestedValue(obj, key){
    for(let prop in obj){
      if(prop === key){
        return obj[prop];
      } else if (typeof obj[prop] == 'object'){
        const result = findNestedValue(obj[prop], key);
        if(result){
          return result;
        }
      }
    }
    return null;
  }

  const generateCompileCode =async () => {
   const compiledString = await solidityCompiler({
      version: `https://binaries.soliditylang.org/bin/${selectedVersion}`,
      contractBody: document.getElementById("source").value,
    })
    console.log("response", compiledString)
    let contractName = document.getElementById("source").value;
    let caName = contractName.search("contract");
    let conName = contractName.substr(caName+9, 6);
    const abi = findNestedValue(compiledString, 'abi');
    const bytecode = findNestedValue(compiledString, 'object');
    document.getElementById("destination").value = JSON.stringify(abi);
    document.getElementById("byteCode").value = JSON.stringify(bytecode);

    }
    const inputRef1  = useRef(null);

    function TextArea({ onCopy }) {
      const handlecopy = () => {
        inputRef1.current = document.getElementById("destination").value;
        const text = inputRef1.current.value;
        onCopy(text);
      }
    }
  //document.getElementById("destination").value = JSON.stringify(compiledString.contracts.Compiled_Contracts.newCon.abi)
      //document.getElementById("byteCode").value = JSON.stringify(compiledString.contracts.Compiled_Contracts.conName.evm.bytecode.object)
  //}
 


  return (
    <div className="form-group" >
    <label style={{fontSize:"15px",position:"relative", top:"20px",  left:"-430px",marginLeft:"180px"}} > Solc Versions 
    <select id="versions" className="form-control" style={{height:"-8px",position:"relative", top:"-30px", width:"120px", left:"30px",marginLeft:"180px"}}
    onChange={(e) => getVersion(e)}>
      Versions
      {/* <option value="">-- Select an option --</option>
      <option value="option1">0.4.0 </option>
      <option value="option2">0.5.0</option>
      <option value="option3">0.6.0</option>
      <option value="option3">0.7.0</option>
      <option value="option3">0.8.0</option> */}
    </select> 
    </label>
      <textarea id="source" className="form-control" placeholder="Input smart contract for compilation" style={{position:"relative",top:"30px", marginLeft: "1rem" , left:"300px",marginTop:"10px", height:"200px", width:"500px"}}/>
      <textarea  ref={inputRef1} id="destination" className="form-control" placeholder="ABI" style={{ position:"relative", top:"-180px", left:"900px", marginLeft: "1rem" , marginTop:"10px", height:"200px", width:"500px"}} />
      <textarea id="byteCode" className="form-control" placeholder="Bytecode" style={{ position:"relative", top:"-100px", left:"900px", marginLeft: "1rem", marginTop:"10px", height:"200px", width:"500px"}}/>
      <button  className="btn btn-primary" style={{ marginLeft: "30px", marginTop:"10px", width:"80px", position:"relative", top:"-380px"}} onClick={() => generateCompileCode()}>Compile</button>
     
    </div>
  );
};

export default FileSaver;
