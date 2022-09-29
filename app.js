const btn = document.querySelector("#search-btn");
const input = document.querySelector("#ip_adress");
const ip = document.querySelector("#current_ip");
const town = document.querySelector("#current_town");
const zone = document.querySelector("#current_zone");
const ısp = document.querySelector("#current_Isp");

const getIp = async ()=>{
const url ="https://geo.ipify.org/api/v2/country?apiKey=at_eFWbOEoIwMNa36i36Q8uhdp5RH5Nl&ipAddress=8.8.8.8";

try{
const res = await fetch(url);
if(!res.ok){
    throw new Error("ikazz")
}
console.log(res)
const data = await res.json()
console.log(data)
}
catch(err){
    console.log(err)
}


}
console.log(getIp())
const adress = (vri) =>{
    console.log(veri)
}



// =at_eFWbOEoIwMNa36i36Q8uhdp5RH5Nl&ipAddress=