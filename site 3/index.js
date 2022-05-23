function bigImg(x) {
    x.style.height = "395px";
    x.style.width = "395px";
  }
  
  function normalImg(x) {
    x.style.height = "380px";
    x.style.width = "380px";
  }

  function tutors(){
      alert("Best front end developer");
  }
  function tutor2(){
    alert("Best Back end developer");
}
function tutor3(){
    alert("Just a good guy");
}
function tutor4(){
    alert("Walking Calculator");
}
function tutor5(){
  alert("2+2=5");
}
function tutor6(){
  alert("Just a good guy");
}
function soundClick() {
    var audio = new Audio(); 
    audio.src = 'u_edomlenie-9.mp3';
    audio.autoplay = true; 
    alert("Welcome to the club buddy")
  }
  function myFunction() {   
    document.getElementById("demo").style.backgroundColor = "#F9CEEE";
  }
  function myFunction1() {   
    document.getElementById("dem").style.backgroundColor = "#CCF3EE";
  }
  function animate({duration, draw, timing}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction)
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }