let sendBtn = document.getElementById("sendBtn");

let textBox = document.getElementById("textBox");

let chatContainer = document.getElementById("chatContainer");

let user = {
    message: ""
};

let arryPossiblMsg = [

    {
        message: "hello",
        response: "Hello there! How can I assist you today?"
    },

    {
        message: "hi",
        response: "Hi there! How can I help you?"
    },

    {
        message: "how are you",
        response: "I'm doing well, thank you for asking!"
    },

    {
        message: "what's up",
        response: "Not much, just here to assist you!"
    },

    {
        message: "good morning",
        response: "Good morning! Hope you have a great day!"
    },

    {
        message: "good afternoon",
        response: "Good afternoon! How can I assist you?"
    },

    {
        message: "good evening",
        response: "Good evening! How can I help you?"
    },

    {
        message: "bye",
        response: "Goodbye! Have a great day!"
    },

    {
        message: "thank you",
        response: "You're welcome! If you have any more questions, feel free to ask."
    },

    {
        message: "thanks",
        response: "You're welcome! If you have any more questions, feel free to ask."
    },

    {
        message: "what is your name",
        response: "I am a ChatBot created to assist you."
    }

];


// Send User Message
function sendMessage(userMessage) {

    let msgElement = document.createElement("div");

    msgElement.style.textAlign = "right";

    msgElement.style.margin = "10px";

    msgElement.innerHTML =
        "<span class='badge bg-primary p-2'>" +
        userMessage +
        "</span>";

    chatContainer.appendChild(msgElement);
}


// ChatBot Response
function chatBotResponse(userMessage) {

    let chatBotMsg = "";

    let result = arryPossiblMsg.filter((item) =>
        userMessage.toLowerCase().includes(item.message)
    );

    if (result.length > 0) {

        chatBotMsg = result[0].response;

    } else {

        chatBotMsg = "Sorry, I don't understand.";
    }


    let msgElement = document.createElement("div");

    msgElement.style.textAlign = "left";

    msgElement.style.margin = "10px";

    msgElement.innerHTML =
        "<span class='badge bg-success p-2'>" +
        chatBotMsg +
        "</span>";

    chatContainer.appendChild(msgElement);
}


// Button Click Event
sendBtn.addEventListener("click", function () {

    let userMsg = textBox.value;

    if (userMsg == "") {

        alert("Please enter a message");

    } else {

        let userMessageText = userMsg.trim();

        user.message = userMessageText;

        textBox.value = "";

        sendMessage(userMessageText);

        chatBotResponse(userMessageText);
    }

});