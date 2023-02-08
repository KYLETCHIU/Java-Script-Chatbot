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
let inputString = userInput.value;


// Load JSON data
function load_json(file) {
    fetch(file)
    .then(response=>response.json())
    
    .then()
        console.log('Hello. How may I help you?');

       
    
// Store JSON data

}


load_json("bot.json");


let postUserInput = () => {
    let input= userInput.value;
    chatHistory.innerHTML +=`<div class="userText">${input}</div>`;
    chatHistory.scrollIntoView({block: 'end', behavior: 'smooth'});
    buttonsDiv.scrollIntoView({block: 'end', behavior: 'smooth'});
    userInput.value = '';
}


sendBtn.addEventListener("click", () => {
    console.log('click');
    // let input = userInput.value;

    if (userInput.value !== '') {
        postUserInput();
        getAnswers();
    }  

})


inputGroup.addEventListener("keyup", (e) => {
    
    if(e.keyCode === 13){
        console.log('enter');
        

        if (userInput.value !== '') {
            postUserInput();
            getAnswers();
        }  
    }

    console.log(inputString);

})


function getAnswers() {
    split_message = inputString.split('r\s+|[,;?!.-]\s*', inputString.toLowerCase());
    score_list = [];
    
}

// getAnswers();

    // Check all the responses
//     for (response in responses) {
//         response_score = 0;
//         required_score = 0;
//         required_words = response['required_words'];
//     }
//         // Check if there are any required words
//         if (required_words) {
//             for (word in split_message) {
//                 if (word in required_words) {
//                     required_score += 1;
//                 }
//         // Amount of required words should match the required score
//         if (required_score == len(required_words)) {
//             for (word in split_message) {
//                 if (word in response['user_input']) {
//                     response_score += 1;
//                 }
//         // Add score to list
//         score_list.push(response_score);
//             }
//     // Find the best response and return it if they're not all 0
//     best_response = max(score_list);
//     response_index = score_list.index(best_response);
//         }
//     // Check if input is empty
//     // if (input_string == '') {
//     //     return 'Please type something so we can chat :(';
//     // }
//     // If there is no good response, return a random one.
//     // if (best_response != 0) {
//     //     return response_data[response_index]['answers'];
//     // }
//     // return random_responses.random_string();
//     //         }

// // while (true) {
// //     user_input = input('You: ');
// //     console.log('Bot:', get_response(user_input));

// // } 
//     }}