let imgbox = document.getElementById("imgbox");

let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");




function generateqr() {
   

qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(qrtext.value)
imgbox.style.display = "block";
}