//API request URL
var requestUrl = 'https://api.multiavatar.com/';

//This enteredUser variable will change to contain whatever text is entered into the username box
var enteredUser = localStorage.getItem("CurrentUsername");

//toAttach is wherever on the HTML the avatar container will be appended to
var toAttach = document.getElementById('box');

//creating the container for avatar picture and user name
var avatarContainer = document.createElement('div');

//creating text element to store user name, then sets text content to enteredUser
var avatarNameElement = document.createElement('p');
avatarNameElement.textContent = enteredUser;

//TEMPORARY BORDER- to show where the container extends
avatarContainer.style.border = '5px solid pink';

//hardcoded style attribute to display contents of container inline
avatarContainer.style.display = 'inline-flex';
avatarNameElement.style.margin = 'auto';

const image = document.createElement('img');

function getApi(requestUrl) {
    let avatarId = enteredUser;
    fetch('https://api.multiavatar.com/'+JSON.stringify(avatarId)+'.svg')
        .then(function(response) {
            console.log(response);
            image.setAttribute(
                'src',
                'https://api.multiavatar.com/'+JSON.stringify(avatarId)+'.svg'
            )
            //hardcoded image width and height, can be later changed into flex or percentage
            image.setAttribute('height', 50);
            image.setAttribute('width', 50); 
        })
}

//adding image and name to container
avatarContainer.appendChild(image);
avatarContainer.appendChild(avatarNameElement);

//adding container to whatever element is in toAttach
toAttach.appendChild(avatarContainer);

getApi(requestUrl);


//8ball
var inputQuestion = document.getElementById("questionInput");
var ask8BallButton = document.getElementById("ask8BallButton");

//will be set to element of the current question in html input box
var currentQuestion = '';

//will be set to element of current 8ball response in html text box
var newest8BallResponse = '';

//will be set to element of current 8ball affirmative/negative response
//consider using a boolean here
var newest8BallAffNeg = '';



//Function Creates new User and adds it to the end of the localstorage list
function createNewUser(nameInput){
    var newUser = {
        name:nameInput,
        questions:[]
    }
    localStorage.setItem(nameInput, JSON.stringify(newUser));
    
}
//Takes the inputted question and adds it to the user. NOTE: Assumes the user has already been created
function addQuestion(userName, questionInput){

    user = JSON.parse(localStorage.getItem(userName));

    user.questions.push(questionInput);

    localStorage.setItem(userName, JSON.stringify(user));

}



var currentUser = {};
for (user in localStorage){
    if (enteredUser === user.name){
        currentUser = user;
        break;
    }
}



ask8BallButton.addEventListener("click", function(){
    currentQuestion = inputQuestion.value;
    console.log(currentQuestion);
    inputQuestion.value = '';
})