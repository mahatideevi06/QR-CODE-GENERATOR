// script.js
function generateQRCode() {
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = ""; // Clear previous QR code
  const text = document.getElementById("text").value;

  if (!text.trim()) {
    alert("Please enter text or a URL");
    return;
  }

  new QRCode(qrContainer, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}