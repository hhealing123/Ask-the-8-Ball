var requestUrl = 'https://api.multiavatar.com/';

var enteredUser = "Matteo"
var responseText = document.getElementById('box');
var avatarContainer = document.createElement('div');
var avatarNameElement = document.createElement('p');
avatarNameElement.textContent = enteredUser;

avatarContainer.style.border = '5px solid pink';
avatarContainer.style.display = 'inline-flex';

avatarNameElement.style.margin = 'auto';

const image = document.createElement('img');

function getApi(requestUrl) {
    let avatarId = enteredUser
    fetch('https://api.multiavatar.com/'+JSON.stringify(avatarId)+'.svg')
        .then(function(response) {
            console.log(response);
            image.setAttribute(
                'src',
                'https://api.multiavatar.com/'+JSON.stringify(avatarId)+'.svg'
            )
            image.setAttribute('height', 50);
            image.setAttribute('width', 50); 
        })
}

avatarContainer.appendChild(image);
avatarContainer.appendChild(avatarNameElement);
responseText.appendChild(avatarContainer);
getApi(requestUrl);
//Adding a test comment here 