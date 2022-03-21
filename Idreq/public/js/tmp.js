

Moralis.initialize("mCSwkSAJpil0vP4GWCQskslXRRXJRRzD3nWh8FV9");
Moralis.serverURL = "https://k95vzhhakuri.moralisweb3.com:2053/server";
let ABIstring = '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "address", "name": "ReqBy", "type": "address" }, { "internalType": "string", "name": "Reqname", "type": "string" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" } ], "name": "AddDocRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "string", "name": "FullName", "type": "string" }, { "internalType": "string", "name": "DocNum", "type": "string" }, { "internalType": "string", "name": "IpfsHash", "type": "string" }, { "internalType": "address", "name": "authority", "type": "address" } ], "name": "AddUser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ContractOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "RequestIndex", "type": "uint256" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" }, { "internalType": "uint256", "name": "Overall_Status", "type": "uint256" } ], "name": "UpdateRequestStatus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authorityAdd", "type": "address" }, { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "verifyStatus", "type": "uint256" }, { "internalType": "string", "name": "remarks", "type": "string" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "UpdateVerifMap", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "RequestIndex", "type": "uint256" } ], "name": "ViewDocRequestHeader", "outputs": [ { "internalType": "address", "name": "Reqby", "type": "address" }, { "internalType": "string", "name": "ReqName", "type": "string" }, { "internalType": "uint256", "name": "Overall_Status", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "ViewDocRequestLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" }, { "internalType": "uint256", "name": "ReqIndex", "type": "uint256" } ], "name": "ViewDocsOrg", "outputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "Index", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" } ], "name": "ViewOrgRequestLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" }, { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "ViewReqExists", "outputs": [ { "internalType": "bool", "name": "exists", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authority_address", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "getVerifMap", "outputs": [ { "internalType": "address", "name": "usradd", "type": "address" }, { "internalType": "uint256", "name": "verifStatus", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "getVerifStatus", "outputs": [ { "internalType": "uint256", "name": "verifStatus", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "last_completed_migration", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "completed", "type": "uint256" } ], "name": "setCompleted", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authority_address", "type": "address" } ], "name": "verifMapLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "ReqIndex", "type": "uint256" } ], "name": "viewDocRequest", "outputs": [ { "internalType": "address", "name": "ReqBy", "type": "address" }, { "internalType": "string", "name": "Reqname", "type": "string" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" }, { "internalType": "uint256", "name": "Overall_status", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "viewUser", "outputs": [ { "internalType": "string", "name": "FullName", "type": "string" }, { "internalType": "string", "name": "DocNum", "type": "string" }, { "internalType": "string", "name": "IpfsHash", "type": "string" } ], "stateMutability": "view", "type": "function" } ]';
ABIstring = ABIstring.replace(/'/g , "\"");
const ABIJSON = JSON.parse(ABIstring);

useraddr = "0x7dea60fca08d117afbe219614b316482bec3b826";
const contractAddress = "0xEF1cCa8040a066e7BFA7444Dc23FCA99732677bc";
async function sendReq(){
  const web3 = await Moralis.enableWeb3();
  //const addr = await Moralis.account;
  const addr ="0x41D56AD51365d04ae58BDB8E1E6dB072fd28d089";
  console.log(addr);
  let nameFlag = 0,numFlag=0,ipfsHashFlag=0;

  let usrAd = document.getElementById("usrAddr").value;

  const options = {
    contractAddress: contractAddress,
    functionName: "getVerifStatus",
    abi: ABIJSON,
    params: {
      UserAddress: usrAd,
    },
  };
  
  let verifStatus = await Moralis.executeFunction(options);
 
  if(parseInt(verifStatus) == 2){
    //Approved by Verifying Authority
    if(document.getElementById("docNameFlag").checked){
      nameFlag = 1;
    }
    if(document.getElementById("docNumFlag").checked){
      numFlag = 1;
  }
  if(document.getElementById("docHashFlag").checked){
  ipfsHashFlag = 1;
}


  console.log(ipfsHashFlag,numFlag,nameFlag,usrAd);


  $.post("/sendReq",
  {
    reqFrom : usrAd,
    addr : addr,
    reqName:"St. Francis Bank",
    nameFlag:nameFlag,
    numFlag:numFlag,
    ipfsHashFlag:ipfsHashFlag

  },function(data,success){
    if(data === true){
      alert("Block Success");
      window.location.href="/";
    }
    else{
      alert(data);
    }

  })

  }
  else{
    alert("The User either has not uploaded documents or the uploaded documents were rejected the verifying authority");
  }
 

}

