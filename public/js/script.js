let sendBtn = document.getElementById("sendBtn");
let textBox = document.getElementById("textBox");
let chatContainer = document.getElementById("chatContainer");
let user = { message: "" };

function sendMessage(userMessage){
let msgElement = document.createElement("div");
msgElement.innerHTML = 
"<span>You</span> " +
"<span>" + userMessage + "</span>";
chatContainer.appendChild(msgElement);
}




sendBtn.addEventListener("click", function (e) {
  let userMsg = textBox.value;
  if (userMsg == "") {
    alert("Please enter a message");
  } else {
    let userMessageText = userMsg.trim();
    user.message = userMessageText;
    textBox.value = "";
    sendMessage(userMessageText);
  }
 
});
