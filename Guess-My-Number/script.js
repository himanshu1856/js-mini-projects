'use strict';

function randomNum(){
    return Math.floor(Math.random() * 20) + 1;
}

let scoreDisplay = document.querySelector('.score');
let highScoreDisplay = document.querySelector('.highscore');
let message = document.querySelector('.message');
let checkButton = document.querySelector('.check');
let inputBar = document.querySelector('.guess');
let btnAgain = document.querySelector('.again')

let score = 20;
let highScore = 0;
let num = randomNum();
let isGameWon = false;


btnAgain.addEventListener('click', ()=>{
    document.querySelector('body').style.backgroundColor = '#222'
    if(score > highScore){
        highScore = score;
        highScoreDisplay.textContent = highScore; 
    }
    score = 20;
    scoreDisplay.textContent = score;
    num = randomNum();
    isGameWon = false;
    message.textContent = 'Start Guessing...'
})

checkButton.addEventListener('click', ()=>{
    if(isGameWon && inputBar.value != 0){
        return
    }
    score -= 1;
    scoreDisplay.textContent = score;

    let inputValue = Number(inputBar.value);
    console.log(num + ' ' + inputValue);
    if (inputValue === num){
        message.textContent = '🥳 You Won !!';
        isGameWon = true
        document.querySelector('body').style.backgroundColor = 'green'
        return;
    } else if(inputValue > num){
        message.textContent = 'Too Big.';
    }else{
        message.textContent = 'Too Small.';
    }
})




function guessMyNumber(){
    let score = 10;
    let highScore = 0;

    
}
