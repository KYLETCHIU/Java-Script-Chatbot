// Makes chat collapsible


// // Grabs and displays first message
// // function firstBotMessage() {
//     let firstMessage = "How may I assist you?"
//     // document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

//     let time = getTime();

//     $("#chat-timestamp").append(time);
//     document.getElementById("userInput").scrollIntoView(false);
// // }

//firstBotMessage();

// Makes chat collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

let userInput = document.getElementById("textInput");
let chatHistory = document.getElementById("chatHistory");
let buttonsDiv = document.getElementById("buttonsDiv");
let sendBtn = document.getElementById("sendBtn");
let inputGroup = document.getElementById("inputGroup");




let postUserInput = () => {
    let input= userInput.value;
    chatHistory.innerHTML +=`<div class="userText">${input}</div>`;
    chatHistory.scrollIntoView({block: 'end', behavior: 'smooth'});
    buttonsDiv.scrollIntoView({block: 'end', behavior: 'smooth'});
    userInput.value = '';
}


// console.log(data);

let getAnswers = (input) => {
    fetch('bot.json')
        .then(response => response.json())
        .then(questions => {
            //console.log(questions);
            return searchAnswersInDB(input, questions);
        })
        .catch(error => {
            console.log(error);
        });
}


let searchAnswersInDB = (input, questions) => {

    // buttonsDiv.innerHTML = ""; 

    for (let question of questions) {
        if (question.keywords.some( a => input.toLowerCase().includes(a.toLowerCase()))) {

            chatHistory.innerHTML +=`<div class="botText">${question.answer}</div>`;

           
            chatHistory.scrollIntoView({block: 'end', behavior: 'smooth'});
            buttonsDiv.scrollIntoView({block: 'end', behavior: 'smooth'});
                console.log(question);
            return question;

        } else if (question.keywords.some( a => input.toLowerCase().includes(a.toLowerCase())) === {}) {

            chatHistory.innerHTML +=`<div class="chatBubblesBot">I don't understand this, please be more precise.</div>`;
        } 
        
    }  
 
}
