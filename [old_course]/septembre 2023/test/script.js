setTimeout(function () {
    //const ball = document.querySelector(".ball");
    // ball.style.visibility ="hidden"; 
    const balls = document.querySelectorAll(".ball"); // OK
    
    balls.forEach( ball => ball.style.visibility ="hidden" );

    //balls[0].style.visibility ="hidden"; 
    //balls[1].style.visibility ="hidden"; 

    // const rouge = document.querySelector(".red-ball");
    // rouge.style.visibility="hidden";
    const timer = document.querySelector("#timer");
    timer.innerText="GAME OVER"
  }, 100);    //10000remettre<-