var requestUrl = 'https://api.multiavatar.com/';

var responseText = document.getElementById('box');
const image = document.createElement('img');

function getApi(requestUrl) {
    let avatarId = 'Matteo'
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

responseText.appendChild(image)
getApi(requestUrl);
//Adding a test comment here 