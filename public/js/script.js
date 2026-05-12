let sendBtn = document.getElementById("sendBtn");
let textBox = document.getElementById("textBox");
sendBtn.addEventListener("click", () => {
    let message = textBox.value;
    alert( message);
});