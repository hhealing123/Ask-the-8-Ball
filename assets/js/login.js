//get username from textbox on click
var enteredUsernameEl = document.getElementById("enteredUN");
var usernameButton = document.getElementById("enteredUNButton");

var username = "ERROR";

usernameButton.addEventListener("click", function(){
    username = enteredUsernameEl.value;
    if(username!=""){
        
    console.log(username);
    localStorage.setItem("CurrentUsername", username);
    window.location.replace("index.html");
    }
    
})

enteredUsernameEl.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        usernameButton.click();
    }
})

$( function() {
    $( document ).tooltip();
  } );
