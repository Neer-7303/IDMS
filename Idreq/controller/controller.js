let Web3 = require("web3");

let ABIstring = '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "address", "name": "ReqBy", "type": "address" }, { "internalType": "string", "name": "Reqname", "type": "string" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" } ], "name": "AddDocRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "string", "name": "FullName", "type": "string" }, { "internalType": "string", "name": "DocNum", "type": "string" }, { "internalType": "string", "name": "IpfsHash", "type": "string" }, { "internalType": "address", "name": "authority", "type": "address" } ], "name": "AddUser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ContractOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "RequestIndex", "type": "uint256" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" }, { "internalType": "uint256", "name": "Overall_Status", "type": "uint256" } ], "name": "UpdateRequestStatus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authorityAdd", "type": "address" }, { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "verifyStatus", "type": "uint256" }, { "internalType": "string", "name": "remarks", "type": "string" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "UpdateVerifMap", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "RequestIndex", "type": "uint256" } ], "name": "ViewDocRequestHeader", "outputs": [ { "internalType": "address", "name": "Reqby", "type": "address" }, { "internalType": "string", "name": "ReqName", "type": "string" }, { "internalType": "uint256", "name": "Overall_Status", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "ViewDocRequestLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" }, { "internalType": "uint256", "name": "ReqIndex", "type": "uint256" } ], "name": "ViewDocsOrg", "outputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "Index", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" } ], "name": "ViewOrgRequestLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "OrgAddress", "type": "address" }, { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "ViewReqExists", "outputs": [ { "internalType": "bool", "name": "exists", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authority_address", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "getVerifMap", "outputs": [ { "internalType": "address", "name": "usradd", "type": "address" }, { "internalType": "uint256", "name": "verifStatus", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "getVerifStatus", "outputs": [ { "internalType": "uint256", "name": "verifStatus", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "last_completed_migration", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "completed", "type": "uint256" } ], "name": "setCompleted", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "authority_address", "type": "address" } ], "name": "verifMapLength", "outputs": [ { "internalType": "uint256", "name": "length", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" }, { "internalType": "uint256", "name": "ReqIndex", "type": "uint256" } ], "name": "viewDocRequest", "outputs": [ { "internalType": "address", "name": "ReqBy", "type": "address" }, { "internalType": "string", "name": "Reqname", "type": "string" }, { "internalType": "uint256", "name": "nameFlag", "type": "uint256" }, { "internalType": "uint256", "name": "numFlag", "type": "uint256" }, { "internalType": "uint256", "name": "ipfsHashFlag", "type": "uint256" }, { "internalType": "uint256", "name": "Overall_status", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "UserAddress", "type": "address" } ], "name": "viewUser", "outputs": [ { "internalType": "string", "name": "FullName", "type": "string" }, { "internalType": "string", "name": "DocNum", "type": "string" }, { "internalType": "string", "name": "IpfsHash", "type": "string" } ], "stateMutability": "view", "type": "function" } ]';
ABIstring = ABIstring.replace(/'/g , "\"");
const ABIJSON = JSON.parse(ABIstring);
const contractAddress = "0xEF1cCa8040a066e7BFA7444Dc23FCA99732677bc";

const web3 = new Web3("http://127.0.0.1:7545");
var url = require('url');
const ipfsPathComponent = "https://ipfs.moralis.io:2053/ipfs/";
let reqFromglobal = "0x41D56AD51365d04ae58BDB8E1E6dB072fd28d089";
exports.getIndex = (req,res,next)=>{
    res.render("ind");
}

exports.sendReq = (req,res,next)=>{
    let reqFrom = req.body.reqFrom;
    //reqFromglobal = reqFrom;
    let instAddr = req.body.addr;
    let reqName = req.body.reqName;
    let nameFlag = req.body.nameFlag;
    let numFlag = req.body.numFlag;
    let ipfsHashFlag = req.body.ipfsHashFlag;
    console.log("Clicked");
    const contract = new web3.eth.Contract(ABIJSON, contractAddress);
    //Code for whether the user has uploaded the data and the data is verified or not
    contract.methods.ViewReqExists(instAddr,reqFrom).call().then((reqExists)=>{
        // if(reqExists){
        //     console.log("Request already exists");
        //     console.log(instAddr);
        // }
        // else{
            
            contract.methods.AddDocRequest(reqFrom,instAddr,reqName,nameFlag,numFlag,ipfsHashFlag).send({from:instAddr,gas: 250000}).then(
                (value)=>{
                    console.log(value);
                    res.send(true);
                }
            ).catch((err)=>{
                console.log(err);
                res.send("Some Error Occured please try again later");
        
            })

        }
    //}
    ).catch((err)=>{
        console.log(err);
        res.send("Error Occurred Please try again later");
    })
    


    

}
exports.getReqList= (req,res,next)=>{
    console.log(reqFromglobal);
    return res.render("reqList" , {contractAddr : contractAddress, reqFrom : reqFromglobal});

}
exports.getReqDetail =  (req,res,next)=>{
    var q = url.parse(req.url, true);
    let UserAddress = q.query.addr;
    let ReqIndex = q.query.ind;
    
    const contract = new web3.eth.Contract(ABIJSON, contractAddress);
  
    contract.methods.viewDocRequest(UserAddress,ReqIndex).call().then(
    (val)=>{
        if(val.Overall_status == 0){
        res.redirect("/addn?opCode=" + 0);
    } 
    else if(val.Overall_status == 1){
        res.redirect("/addn?opCode=" + 1);
    }
    else{
         contract.methods.viewUser(UserAddress).call().then(
                (value)=>{
                    console.log(value);
                    let dets = {usrname:"",usrdocNum:"",usrIPFShash:""}
                    if(val.nameFlag == 3){
                        dets.usrname = value.FullName;
                    }
                    if(val.numFlag == 3){
                        dets.usrdocNum = value.DocNum;
                    }
                    if(val.ipfsHashFlag == 3){
                        dets.usrIPFShash = ipfsPathComponent+value.IpfsHash;
                    }
                    
                   
                   return res.redirect('/getReqDetails?usrname=' + dets.usrname + "&usrdocNum=" + dets.usrdocNum +"&usrIPFShash="+ dets.usrIPFShash);
                }
           
         )

    }
}   

    ).catch((err)=>{
        console.log(err);
        res.send("An Error Occurred please try again later");
    })
   
        
}
exports.getReqsDets = (req,res,next)=>{

    var q = url.parse(req.url, true);
    
    let dets = {usrname:q.query.usrname,usrdocNum:q.query.usrdocNum,usrIPFShash:q.query.usrIPFShash}
    
    return res.render("reqDetail",{detail:dets});

}
exports.getAddn = (req,res,next)=>{
    var q = url.parse(req.url, true);
    if(q.query.opCode == 0){
        res.render("addn",{reason:"Waiting for User's Approval"});
    }
    if(q.query.opCode == 1){
        res.render("addn",{reason:"The User has Rejected Your Request"});
    }

    
}