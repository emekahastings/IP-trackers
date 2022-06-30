let ipinput= document.getElementById('address')
let go= document.getElementById('go')
let submit= document.getElementById("go")
let ipadd= document.getElementById('ips')
let loc= document.getElementById('loc')
let isp= document.getElementById('isp')
let timezone= document.getElementById('time')
console.log(ipinput.value)

let map = L.map('map').setView([6.6342, 5.9304], 8)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 9,
    attribution: '© OpenStreetMap'
}).addTo(map);


function getip(){
fetch("https://api.ipify.org/?format=json")
.then(function(res){
   return(res.json())
})
.then(function(data){
    JSON.stringify(data)
     ipinput.value= `${data.ip}`

})
}

window.addEventListener('load', getip)


var ip = "8.8.8.8";
var api_key = "i0GfxPNIrkCAI2DukPxDSJktIJFUY";



 window.addEventListener('load',  $(function () {
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {  
            apiKey: "at_i0GfxPNIrkCAI2DukPxDSJktIJFUY",
           ipaddress: ipinput.value
        },
        success: function(data) {
            isp.innerHTML=` ${data.isp}`
            timezone.innerHTML=` ${data.location["country"]}`
            loc.innerHTML=` ${data.location["city"]}`
            console.log(data)
        }
    });
 }))


















