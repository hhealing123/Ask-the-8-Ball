var luck = document.querySelector("button");
var result = document.querySelector('.result');

const options = {
  method: 'GET',
  url: 'https://magic-8-ball1.p.rapidapi.com/my_answer/',
  headers: {
    'X-RapidAPI-Key': 'afae7ab92emsh70e7b9a600e0dafp15f82djsn224d672302c4',
    'X-RapidAPI-Host': 'magic-8-ball1.p.rapidapi.com'
  }
}

let questions = []
luck.onclick = function(){
  let question;
  question = document.getElementById('question').value;
  fetch('https://magic-8-ball1.p.rapidapi.com/my_answer/', options)
  .then(response => response.json())
  .then(data =>{
    var ballResult = data['answer'];
    var aff = data['answer_type'];
    console.log(ballResult + ' ' + aff)
    result.innerHTML = ballResult;
  })
  console.log(question);
  questions.push(question);
  localStorage.setItem('UserQuestion', JSON.stringify(question) );

}