//get username from textbox on click
var enteredUsernameEl = document.getElementById("enteredUN");
var usernameButton = document.getElementById("enteredUNButton");

var username = "ERROR";

usernameButton.addEventListener("click", function(){
    username = enteredUsernameEl.value;
    console.log(username);
    localStorage.setItem("CurrentUsername", username);
    window.location.replace("index.html");
})