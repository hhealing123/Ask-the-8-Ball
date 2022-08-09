//michael's code
//fix element id's if needed
var luck = document.querySelector("button");
//var result = document.querySelector('.result');

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

var ballGifs = [
    "https://piskel-imgstore-b.appspot.com/img/9bafd921-1465-11ed-9776-f1b5740cb228.gif", //8Ball Spin
    "https://piskel-imgstore-b.appspot.com/img/bcfb9e40-1465-11ed-a932-f1b5740cb228.gif", //8Ball Still
    "https://piskel-imgstore-b.appspot.com/img/d81a7a78-1465-11ed-b838-f1b5740cb228.gif", //8Ball Empty
    "https://piskel-imgstore-b.appspot.com/img/dc1a19cf-1741-11ed-ab19-e7af349a0ea9.gif", //YouMayRelyOnIt 3
    "https://piskel-imgstore-b.appspot.com/img/0350cba1-1742-11ed-8d2f-e7af349a0ea9.gif", //YesDefinitely 4
    "https://piskel-imgstore-b.appspot.com/img/21ede494-1742-11ed-ab0e-e7af349a0ea9.gif", //Yes 5
    "https://piskel-imgstore-b.appspot.com/img/6892bb40-1742-11ed-8e72-e7af349a0ea9.gif", //WithoutADoubt 6
    "https://piskel-imgstore-b.appspot.com/img/89094c57-1742-11ed-ac9d-e7af349a0ea9.gif", //VeryDoubtful 7
    "https://piskel-imgstore-b.appspot.com/img/6d41a18a-1747-11ed-9a9f-e7af349a0ea9.gif", //SignsPointToYes 8
    "https://piskel-imgstore-b.appspot.com/img/9b6e3c11-1747-11ed-9f48-11a17a993152.gif", //ReplyHazyTryAgain 9
    "https://piskel-imgstore-b.appspot.com/img/c5ef21a3-1747-11ed-84b7-11a17a993152.gif", //OutlookGood 10
    "https://piskel-imgstore-b.appspot.com/img/1aac2ea6-1743-11ed-a054-e7af349a0ea9.gif", //OutlookNotSoGood 11
    "https://piskel-imgstore-b.appspot.com/img/ee6c4935-1747-11ed-be38-11a17a993152.gif", //MySourcesSayNo 12
    "https://piskel-imgstore-b.appspot.com/img/0bf9f1a6-1748-11ed-85e9-11a17a993152.gif", //MyReplyIsNo 13
    "https://piskel-imgstore-b.appspot.com/img/312c5d73-1748-11ed-8c88-11a17a993152.gif", //MostLikely 14
    "https://piskel-imgstore-b.appspot.com/img/480313e3-1748-11ed-93c9-11a17a993152.gif", //ItIsDecidedlySo 15
    "https://piskel-imgstore-b.appspot.com/img/6a014326-1748-11ed-a08c-11a17a993152.gif", //ItIsCertain 16
    "https://piskel-imgstore-b.appspot.com/img/7e4df75c-1748-11ed-af04-11a17a993152.gif", //DontCountOnIt 17
    "https://piskel-imgstore-b.appspot.com/img/9a1e84cc-1748-11ed-bf04-11a17a993152.gif", //ConcentrateAndAskAgain 18
    "https://piskel-imgstore-b.appspot.com/img/da4c5754-1748-11ed-8fee-11a17a993152.gif", //CannotPredictNow 19
    "https://piskel-imgstore-b.appspot.com/img/f48ec7a1-1748-11ed-a4f0-11a17a993152.gif", //BetterNotTellYouNow 20
    "https://piskel-imgstore-b.appspot.com/img/0d3c047d-1749-11ed-9fdd-11a17a993152.gif", //AskAgainLater 21
    "https://piskel-imgstore-b.appspot.com/img/278a5428-1749-11ed-8794-11a17a993152.gif" //AsISeeItYes 22
    ]