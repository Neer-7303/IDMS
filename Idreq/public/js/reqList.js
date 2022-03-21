let ABIstring = '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "address", "name": "ReqBy", "type": "address" }, { "internalType": "string", "name": "Reqname", "type": "string" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" } ], "name": "AddDocRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "string", "name": "FullName", "type": "string" }, { "internalType": "string", "name": "DocNum", "type": "string" }, { "internalType": "string", "name": "IpfsHash", "type": "string" }, { "internalType": "address", "name": "authority", "type": "address" } ], "name": "AddUser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ContractOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "RequestIndex", "type": "uint256" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" }, { "internalType": "uint256", "name": "Overall_Status", "type": "uint256" } ], "name": "UpdateRequestStatus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authorityAdd", "type": "address" }, { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "verifyStatus", "type": "uint256" }, { "internalType": "string", "name": "remarks", "type": "string" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "UpdateVerifMap", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "RequestIndex", "type": "uint256" } ], "name": "ViewDocRequestHeader", "outputs": [ { "internalType": "address", "name": "Reqby", "type": "address" }, { "internalType": "string", "name": "ReqName", "type": "string" }, { "internalType": "uint256", "name": "Overall_Status", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "ViewDocRequestLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" }, { "internalType": "uint256", "name": "ReqIndex", "type": "uint256" } ], "name": "ViewDocsOrg", "outputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "Index", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" } ], "name": "ViewOrgRequestLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" }, { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "ViewReqExists", "outputs": [ { "internalType": "bool", "name": "exists", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authority_address", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "getVerifMap", "outputs": [ { "internalType": "address", "name": "usradd", "type": "address" }, { "internalType": "uint256", "name": "verifStatus", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "getVerifStatus", "outputs": [ { "internalType": "uint256", "name": "verifStatus", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "last_completed_migration", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "completed", "type": "uint256" } ], "name": "setCompleted", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authority_address", "type": "address" } ], "name": "verifMapLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "ReqIndex", "type": "uint256" } ], "name": "viewDocRequest", "outputs": [ { "internalType": "address", "name": "ReqBy", "type": "address" }, { "internalType": "string", "name": "Reqname", "type": "string" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" }, { "internalType": "uint256", "name": "Overall_status", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "viewUser", "outputs": [ { "internalType": "string", "name": "FullName", "type": "string" }, { "internalType": "string", "name": "DocNum", "type": "string" }, { "internalType": "string", "name": "IpfsHash", "type": "string" } ], "stateMutability": "view", "type": "function" } ]';
ABIstring = ABIstring.replace(/'/g , "\"");
const ABIJSON = JSON.parse(ABIstring);
const contractAddress = document.getElementById("contractAddr").value;
const orgAddress = document.getElementById("orgAddress").value;

function getDetails(index , UserAddress){
  // const options = {
  //   contractAddress: contractAddress,
  //   functionName: "viewDocRequest",
  //   abi: ABIJSON,
  //   params: {
  //     UserAddress: UserAddress,
  //     ReqIndex: index
  //   },
  // };
  // let value = await Moralis.executeFunction(options);
  // console.log(value);


  window.location.href = "/getDets?addr="+ UserAddress +"&ind="+index;
  // $.post("/getDets",
  // {
  //   UserAddress:UserAddress,
  //   ReqIndex : index,
  // }
  // );
}



async function getReqs(){

await Moralis.enableWeb3();



const options = {
    contractAddress: contractAddress,
    functionName: "ViewOrgRequestLength",
    abi: ABIJSON,
    params: {
        OrgAddress: orgAddress,
    },
  };
  let length = await Moralis.executeFunction(options);
  if(parseInt(length) == 0){
    console.log("No requests");
  }
  else{
    let reqTable = document.getElementById("requestTable");
    let options = {
        contractAddress: contractAddress,
        functionName: "ViewDocsOrg",
        abi: ABIJSON,
        params: {
            OrgAddress: orgAddress,
        },
      };
      let ind=0;
  
      for( let i = 0 ;i<length ; i++){
        options.params['ReqIndex'] = i;
        ind=i;
        let value = await Moralis.executeFunction(options);
        console.log(value);
        var listHTML = '<tr><td class="column1 c ">'+(ind+1)+'</td><td class="column2 c ">'+value.UserAddress+'</td> <td class="c"> <button class="button button1" onClick="getDetails(\'' + value.Index + '\',\'' + value.UserAddress + '\')" > More Info </button> </td></tr>';
        reqTable.insertAdjacentHTML('beforeend',listHTML);
    }
  }

}
getReqs();