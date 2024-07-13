let imgbox = document.getElementById("imgBox");
let qrcode = document.getElementById("qrcodeimg");
let qrtext = document.getElementById("qrtext");
let btn = document.getElementById("btn");

function generateQRCode() {
  if (qrtext.value == "") {
    qrtext.classList.add("error");
    setTimeout(() => {
      qrtext.classList.remove("error");
    }, 1000);
    setTimeout(() => {
      alert("Please enter a valid URL!");
    }, 200);
    qrtext.focus();
    return;
  }
  qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext.value}`;
  imgbox.classList.add("show-img");
}

btn.addEventListener("click", generateQRCode);
