//michael's code
//fix element id's if needed
var luck = document.querySelector("button");
//var result = document.querySelector('.result');
var section = document.querySelector('section');
const options = {
  method: 'GET',
  url: 'https://magic-8-ball1.p.rapidapi.com/my_answer/',
  headers: {
    'X-RapidAPI-Key': 'afae7ab92emsh70e7b9a600e0dafp15f82djsn224d672302c4',
    'X-RapidAPI-Host': 'magic-8-ball1.p.rapidapi.com'
  }
}

var ballResult = "";
var affCom = "";

/*
    if (affCom == "non_committal"){
        document.body.style.removeProperty('background-color');
        document.body.style.backgroundColor="yellow";
      }
    if (affCom == "negative"){
        document.body.style.removeProperty('background-color');
        document.body.style.backgroundColor="red";
      }
    if (affCom == "affirmative"){
        document.body.style.removeProperty('background-color');
        document.body.style.backgroundColor="green";
      }
*/

//API request URL
var requestUrl = 'https://api.multiavatar.com/';

//This enteredUser variable will change to contain whatever text is entered into the username box
var enteredUser = localStorage.getItem("CurrentUsername");

//Check if user is new user
if (localStorage.getItem(enteredUser) == null){
    createNewUser(enteredUser);
    console.log("New user, created new user with username: ", enteredUser);
} else {
    console.log("USER: ", localStorage.getItem(enteredUser));
}

//toAttach is wherever on the HTML the avatar container will be appended to
var toAttach = document.getElementById('box');

var toAttach = document.getElementById('navbar');

//creating the container for avatar picture and user name
var avatarContainer = document.createElement('div');

//creating text element to store user name, then sets text content to enteredUser
var avatarNameElement = document.createElement('p');
avatarNameElement.textContent = enteredUser;

//hardcoded style attribute to display contents of container inline
avatarContainer.style.display = 'inline-flex';
avatarNameElement.style.margin = 'auto';

const image = document.createElement('img');

function getApi() {
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

getApi();


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


    const address =
    fetch('https://magic-8-ball1.p.rapidapi.com/my_answer/', options)
    .then(response => response.json())
    .then(data => {
        let answerObject = [data['answer'], data['answer_type']]
        return answerObject
    })

    address.then((a) => {
        let questionAnswer = a[0]
        let questionAffCom = a[1]
        let questionItem = [questionInput, questionAnswer, questionAffCom];
        user.questions.push(questionItem);
        localStorage.setItem(userName, JSON.stringify(user));
        update8BallImage(questionAnswer);
    });
}

ask8BallButton.addEventListener("click", function(){
    currentQuestion = inputQuestion.value;
    console.log(currentQuestion);
    addQuestion(enteredUser, inputQuestion.value);
    inputQuestion.value = '';
})
//8Ball gif URLS

var ballImg = document.getElementById("eightBA");

function update8BallImage(ans){
    if(ans == "You may rely onit."){
        ballImg.src = ballGifs[3];
    }
    if(ans == "Yes definitely."){
        ballImg.src = ballGifs[4];
    }
    if(ans == "Yes."){
        ballImg.src = ballGifs[5];
    }
    if(ans == "Without a doubt."){
        ballImg.src = ballGifs[6];
    }
    if(ans == "Very doubtful."){
        ballImg.src = ballGifs[7];
    }
    if(ans == "Signs point to yes."){
        ballImg.src = ballGifs[8];
    }
    if(ans == "Reply hazy, try again."){
        ballImg.src = ballGifs[9];
    }
    if(ans == "Outlook good."){
        ballImg.src = ballGifs[10];
    }
    if(ans == "Outlook not so good."){
        ballImg.src = ballGifs[11];
    }
    if(ans == "My sources say no."){
        ballImg.src = ballGifs[12];
    }
    if(ans == "My reply is no."){
        ballImg.src = ballGifs[13];
    }
    if(ans == "Most likely."){
        ballImg.src = ballGifs[14];
    }
    if(ans == "It is decidedly so."){
        ballImg.src = ballGifs[15];
    }
    if(ans == "It is Certain."){
        ballImg.src = ballGifs[16];
    }
    if(ans == "Don't count on it."){
        ballImg.src = ballGifs[17];
    }
    if(ans == "Concentrate and ask again"){
        ballImg.src = ballGifs[18];
    }
    if(ans == "Cannot predict now."){
        ballImg.src = ballGifs[19];
    }
    if(ans == "Better not tell you now."){
        ballImg.src = ballGifs[20];
    }
    if(ans == "Ask again later."){
        ballImg.src = ballGifs[21];
    }
    if(ans == "As I see it, yes."){
        ballImg.src = ballGifs[22];
    }
}

