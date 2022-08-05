function shake() {
   var ball= document.getElementById("ball")
    ball.classList.add("shake");
    setTimeout(function(){ ball.classList.remove("shake"); }, 1000);
}