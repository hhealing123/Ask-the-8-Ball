var requestUrl = 'https://api.multiavatar.com/';

var firstName = $("#fname")
var LastName = $("#lname")

var responseText = document.getElementById('box');
const image = document.createElement('img');

function storeNames() {
    var storedFN = JSON.parse(localStorage.getItem("fname"));
    firstName.val(storedFN);

    var storedLN = JSON.parse(localStorage.getItem("lname"));
    LastName.val(storedLN);
}

function getApi(requestUrl) {
    let avatarId = 'Harvey'
    fetch('https://api.multiavatar.com/' + JSON.stringify(avatarId)+'.svg')
        .then(function(response) {
            console.log(response);
            image.setAttribute(
                'src',
                'https://api.multiavatar.com/' + JSON.stringify(avatarId)+'.svg'
            )
            image.setAttribute('height', 50);
            image.setAttribute('width', 50); 
        })
}

responseText.appendChild(image)
getApi(requestUrl);
