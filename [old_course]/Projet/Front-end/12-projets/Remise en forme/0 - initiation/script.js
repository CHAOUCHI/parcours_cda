// Pré-requis
/**
 * docuement.querySelector et les selecteurs css
 * HTMLElement.addEventListener et l'évenement "click"
 * setInterval et clearInterval
 * HTMLElement.innerText
 * HTMLElement.remove
 */

//1. Cliquer ball et score up
//2. timer tourne
//3. clearInterval
//4. removeBall et print GAME OVER

const redBall = document.querySelector("#red-ball");
const blueBall = document.querySelector("#blue-ball");
const scoreTag = document.querySelector("#score");
const timerTag = document.querySelector("#timer");

let score = 0;
let timer = 10;

redBall.addEventListener("click",function(){
    score++;
    scoreTag.innerText = "Score : "+score;
});

blueBall.addEventListener("click",function(){
    score++;
    scoreTag.innerText = "Score : "+score;
});

const intervalId = setInterval(function(){
    timer--;
    timerTag.innerText = "Timer : "+timer+"s";
    if(timer === 0){
        redBall.remove();
        blueBall.remove();
        timerTag.innerText = "GAME OVER";
        clearInterval(intervalId);
    }
},1000);
