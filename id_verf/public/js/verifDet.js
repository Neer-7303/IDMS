let ABIstring = '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "address", "name": "ReqBy", "type": "address" }, { "internalType": "string", "name": "Reqname", "type": "string" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" } ], "name": "AddDocRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "string", "name": "FullName", "type": "string" }, { "internalType": "string", "name": "DocNum", "type": "string" }, { "internalType": "string", "name": "IpfsHash", "type": "string" }, { "internalType": "address", "name": "authority", "type": "address" } ], "name": "AddUser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ContractOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "RequestIndex", "type": "uint256" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" }, { "internalType": "uint256", "name": "Overall_Status", "type": "uint256" } ], "name": "UpdateRequestStatus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authorityAdd", "type": "address" }, { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "verifyStatus", "type": "uint256" }, { "internalType": "string", "name": "remarks", "type": "string" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "UpdateVerifMap", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "RequestIndex", "type": "uint256" } ], "name": "ViewDocRequestHeader", "outputs": [ { "internalType": "address", "name": "Reqby", "type": "address" }, { "internalType": "string", "name": "ReqName", "type": "string" }, { "internalType": "uint256", "name": "Overall_Status", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "ViewDocRequestLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" }, { "internalType": "uint256", "name": "ReqIndex", "type": "uint256" } ], "name": "ViewDocsOrg", "outputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "Index", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" } ], "name": "ViewOrgRequestLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" }, { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "ViewReqExists", "outputs": [ { "internalType": "bool", "name": "exists", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authority_address", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "getVerifMap", "outputs": [ { "internalType": "address", "name": "usradd", "type": "address" }, { "internalType": "uint256", "name": "verifStatus", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "getVerifStatus", "outputs": [ { "internalType": "uint256", "name": "verifStatus", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "last_completed_migration", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "completed", "type": "uint256" } ], "name": "setCompleted", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authority_address", "type": "address" } ], "name": "verifMapLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "ReqIndex", "type": "uint256" } ], "name": "viewDocRequest", "outputs": [ { "internalType": "address", "name": "ReqBy", "type": "address" }, { "internalType": "string", "name": "Reqname", "type": "string" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" }, { "internalType": "uint256", "name": "Overall_status", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "viewUser", "outputs": [ { "internalType": "string", "name": "FullName", "type": "string" }, { "internalType": "string", "name": "DocNum", "type": "string" }, { "internalType": "string", "name": "IpfsHash", "type": "string" } ], "stateMutability": "view", "type": "function" } ]';
ABIstring = ABIstring.replace(/'/g , "\"");
const ABIJSON = JSON.parse(ABIstring);
const contractAddress = document.getElementById("contractAddr").value;
const orgAddress = document.getElementById("authorityAddress").value;
let UserAddress = document.getElementById("userAddress").value;
let ind = document.getElementById("ind").value;

const ipfsPathComponent = "https://ipfs.moralis.io:2053/ipfs/";  

async function postVerify(verif){
  console.log(verif);
    let verifStatus = 1;
    if(verif == "true"){
        verifStatus = 2;
    }

    const options = {
        contractAddress: contractAddress,
        functionName: "UpdateVerifMap",
        abi: ABIJSON,
        params: {
            UserAddress: UserAddress,
            authorityAdd:orgAddress,
            remarks:"Remarks goes here",
            verifyStatus:verifStatus,
            index : ind,
        },
      };
      try {
        let value = await Moralis.executeFunction(options);
        console.log(value);
      } catch (error) {
          console.log(error);
          alert("an Error Occurred");
      } 
      window.location.href = "/";
    
      

}



async function getDetails(){
   await Moralis.enableWeb3();
   console.log("Hello Worlds");
    let value = "";
    const options = {
        contractAddress: contractAddress,
        functionName: "viewUser",
        abi: ABIJSON,
        params: {
            UserAddress: UserAddress,
        },
      };
    
      try {
        value = await Moralis.executeFunction(options);
        console.log(value);
      } catch (error) {
          console.log(error);
          alert("an Error Occurred");
      } 
    

      if(value !=""){
        let reqTable = document.getElementById("requestTable");
        var listHTML  = '<tr><td class="column1 c ">'+ 1 +'</td><td class="column2 c ">Document Number</td> <td class="column3 c">' + value.DocNum+ '</td></tr>';
        listHTML+='<tr><td class="column1 c ">'+ 2 +'</td><td class="column2 c ">Name of Doc. Holder</td> <td class="column3 c">' + value.FullName+ '</td></tr>';
        listHTML+='<tr><td class="column1 c ">'+ 3 +'</td><td class="column2 c ">Image of Document</td> <td class="column3 c"><a href='+ ipfsPathComponent + value.IpfsHash +' target = "blank">Image</a></td></tr>';
        listHTML+= '<tr><td class=" r "><button class="button Accept" onclick = postVerify(\'' + true + '\')>Accept</button></td><td class=" l " colspan = "2" ><button class="button Reject" onclick=postVerify(\'' + false + '\')>Reject</button></td></tr>';
        reqTable.insertAdjacentHTML('beforeend',listHTML);
      }

  }
  getDetails();