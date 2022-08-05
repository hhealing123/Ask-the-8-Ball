var luck = document.querySelector("button");
var result = document.querySelector('.result');
var question = document.querySelector('.question').value;

const options = {
  method: 'GET',
  url: 'https://magic-8-ball1.p.rapidapi.com/my_answer/',
  params: {question: 'I will succeed ?'},
  headers: {
    'X-RapidAPI-Key': 'afae7ab92emsh70e7b9a600e0dafp15f82djsn224d672302c4',
    'X-RapidAPI-Host': 'magic-8-ball1.p.rapidapi.com'
  }
}

luck.onclick = function(answer){
    fetch('https://magic-8-ball1.p.rapidapi.com/my_answer/', options)
    console.log(response);
  .then(response => response.json())
  .then(response => console.log(response))
  .then(data =>{
    var ballResult = data['answer'];

    result.innerHTML = ballResult;
  })
  

	.catch(err => console.error(err));

}


