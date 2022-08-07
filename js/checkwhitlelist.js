import OGwhitelistAddresses from './OGmagiclist.json' assert {type: 'json'};
import MLAddresses from './Magiclist.json' assert {type: 'json'};


let walletaddress;

document.getElementById("checkbtn").onclick = function(){

    walletaddress = document.getElementById("walletAdd").value;
    
    //convert all addresses to lowercase
    
    const OGwallets_lower = OGwhitelistAddresses.map(element => {
        return element.toLowerCase();
    });
    const MLwallets_lower = MLAddresses.map(element => {
        return element.toLowerCase();
    });  
    
    //check if wallet present in whitelist or not

    if (OGwallets_lower.indexOf(walletaddress.toLowerCase()) !== -1)  
    {  
            alert("Congrats! You're on OG Magiclist!")  
    }
    if (MLwallets_lower.indexOf(walletaddress.toLowerCase()) !== -1) 
    {
            alert("Congrats! You're on Magiclist!") 
    }
    else
    {  
            alert("Sorry, No wallets found.")  
    } 
  }
  
