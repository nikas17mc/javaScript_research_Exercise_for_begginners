// How to accept user input

// EASY WAY with a window promt

// let username = window.promt("What's your name?");
// console.log(username);

// DIFFICULT WAY HTML textbox

let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myResult").innerHTML = "Hello " + username;
}