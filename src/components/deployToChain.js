import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Web3 from 'web3';
import FileSaver from './FileSaver';
import TextArea from './FileSaver';


const DeployToChain = () => {
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('');
  const [savedFile, setSavedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState([]);
  const [handleDeploy, setHandleDeploy] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [copyAbi, setcopyAbi] = useState('');


  function onDeployClick(){
    const deployPromise = new Promise((resolve, reject) =>{
      setTimeout(async () => {
        let url;
        if(document.getElementById('chains').value == 'option1'){
          url = 'http://127.0.0.1:7545';
        }
        const web3 = new Web3(url);
        //const contractABI = 
        const contractABI = JSON.parse('[{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        console.log(contractABI);
        const contractByteCode =  "608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100a1565b60405180910390f35b610073600480360381019061006e91906100ed565b61007e565b005b60008054905090565b8060008190555050565b6000819050919050565b61009b81610088565b82525050565b60006020820190506100b66000830184610092565b92915050565b600080fd5b6100ca81610088565b81146100d557600080fd5b50565b6000813590506100e7816100c1565b92915050565b600060208284031215610103576101026100bc565b5b6000610111848285016100d8565b9150509291505056fea2646970667358221220fecb19c3d78b8289b90a098c007beb11042e92f24f0ee1c9d6d793f44b6ad3ca64736f6c63430008130033"
        console.log(contractByteCode);
        const contractInstance = new web3.eth.Contract(contractABI);

        contractInstance.deploy({
          data: contractByteCode,
          arguments:[5],
        }).send({
          from: document.getElementById('accounts').value,
          gas:1500000, 
          gasPrice:web3.utils.toWei('0.00003', 'ether')})
          .then((newContractInstance) => {contractInstance.options.address=newContractInstance.options.address});
        console.log('Contract Deployed')
        console.log(contractInstance.methods);

        });

  }, 55000);
  };

  const handleFirstDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };


  let accounts = []
  const mypromise = new Promise((resolve, reject) =>{
    setTimeout(async () => {
      const web3 = new Web3('http://127.0.0.1:7545');
      const accounts = await web3.eth.getAccounts();
      if(accounts.length>0){
        resolve(accounts)
      }else{
        reject('Accounts Not Found')
      }
    }, 5000);
  });

  useEffect(() => {
    mypromise
      .then(response => setSelectedAccount(response))
      .catch(error => console.log(error));
  }, []);
 


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
  function Modal({ isOpen, onClose, children }) {
    const [modalStyle, setModalStyle] = useState({ display: 'none' });
    const [options, setOptions] = useState({});
   
    
    // Update modal display style when isOpen prop changes
    useEffect(() => {
      setModalStyle({ display: isOpen ? 'block' : 'none' });
    }, [isOpen]);
  
    useEffect(()=>{

    })
    return (
      <div className="modal" style={modalStyle} >
        <div className="modal-content" style={{position:"relative", width:"500px", height:"300px", top:"200px", right:"-500px"}}>
          <span className="close" style={{position:"relative", right:"-230px"}} onClick={onClose}>&times;</span>
          {children}
        </div>
      </div>
    );
  }

    const handleModalOpen = () => {
      setIsModalOpen(true);
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
  

  return (
    <div style={{ display: "flex", flexDirection: "column", width:"400px", marginLeft:"300px" }}>
      <label style={{color: "black", marginLeft: "3px", marginBottom:"10px",position:"relative", width :"200px", fontSize: "15px", top:"30px"}}>
          Deploy to Chain:  </label>
      <select className="form-control" value={selectedValue} onChange={handleSelectChange} style={{height:"-8px",position:"relative", top:"-10px", width:"120px",marginLeft:"180px"}}>
      <option value="">-- Select an option --</option>
      <option value="option1">ganache</option>
      <option value="option2">Goerli</option>
      <option value="option3">pleiades_dev</option>
      <option value="option3">pleiades_sandbox</option>
    </select>

      <label style={{color: "black", marginLeft: "-20px", marginBottom:"10px",position:"relative", width :"200px", fontSize: "15px", top:"10px" }}>
          Accounts:     </label>
      <select className="form-control"  value={selectedValue} onChange={handleInputChange} style={{position:"relative", top:"-30px", marginLeft:"200px", left:"-20px", width:"100px"}}>
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
   
    <button  className="btn btn-primary" style={{ marginLeft: "30px", marginTop:"10px", width:"80px", left:"150px", position:"relative", top:"-30px"}} onClick={handleModalOpen}>Deploy</button>
      <Modal  isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>Deploy to Chain</h2>
        <button  className="btn btn-primary" style={{ marginLeft: "30px", marginTop:"10px", width:"80px", left:"180px", position:"relative", top:"150px"}} onClick={onDeployClick}>Deploy</button>
        <label style={{fontSize:"12px",position:"relative", top:"-5px",  left:"-265px",marginLeft:"180px"}} > Chain: </label>
        <select id="chains" onChange={handleFirstDropdownChange} className="form-control" style={{height:"25px",position:"relative", top:"-30px", width:"120px", left:"-80px",marginLeft:"180px"}}>
        <option value="">-- Select an option --</option>
        <option value="option1">Development(Ganache) </option>
        <option value="option2">Pleiades-dev</option>
        <option value="option3">Pleiades-prod</option>
        <option value="option3">Pleiades-sbx</option>
        <option value="option3">Test</option> 
        </select>
        <label  style={{fontSize:"12px",position:"relative", top:"-5px",  left:"-255px",marginLeft:"180px"}} htmlFor="dropdown">Accounts:</label>
        <select id="accounts" className="form-control" style={{height:"30px",position:"relative", top:"-35px", width:"120px", left:"-50px",marginLeft:"180px"}}>
        {selectedOption === 'option1' && (
        <>
        {selectedAccount.map((account) => (
        <option key={account} value={account}>
        {account}
      </option> 
        ))}
        </>
        )}
  </select>
      </Modal>
      <textarea className="form-control" placeholder="Transaction Details" style={{ position:"relative", top:"-20px",marginLeft: "1rem" , left:"50px",marginTop:"10px", height:"200px", width:"500px"}}/>
    </div>
  );
};

export default DeployToChain;
