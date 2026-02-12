'use strict';

const newGame = function(){
    sp1 = 0;
    sp2 = 0;
    cp1 = 0;
    cp2 = 0;
    updateScore();
    turn = 1;
}

const updateScore = function(){
    if(sp1 >= 30) {
        alert('Player 1 won the game 🥳');
        newGame();
    }
    if(sp2 >= 30) {
        alert('Player 2 won the game 🥳');
        newGame();
    }
    scoreP1.textContent = sp1;
    scoreP2.textContent = sp2;
    crtScoreP1.textContent = cp1;
    crtScoreP2.textContent = cp2;
}

const handleOne = function(player) {
    if (player === 1){
        sp1 = 0;
        cp1 = 0;
    } else{
        sp2 = 0;
        cp2 = 0;
    }
}

const switchPlayer = function(){
    if(turn === 1){
        turn = 2;
        document.querySelector('.player--0').classList.remove('player--active')
        document.querySelector('.player--1').classList.add('player--active')
        sp1 += cp1;
        cp1 = 0;
        updateScore();
    } else {
        turn = 1;
        document.querySelector('.player--0').classList.add('player--active')
        document.querySelector('.player--1').classList.remove('player--active')
        sp2 += cp2;
        cp2 = 0;
        updateScore();
    }
 }

const rollDice = function(){
    // Randome in range => Math.floor(Math.random() * (max - min + 1)) + min;
    const num =  Math.floor(Math.random() * 6) + 1;
    let path = `./Photos/dice-${num}.png`;
    const diceImg = document.querySelector('.dice'); 
    diceImg.src = path;
    if(turn == 1){
        num === 1? handleOne(1): cp1 += num;
        updateScore();
    } else {
        num === 1? handleOne(2): cp2 += num; 
        updateScore()
    }
}


const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.querySelector('#score--1');
const crtScoreP1 = document.querySelector('#current--0');
const crtScoreP2 = document.querySelector('#current--1');

let cp1 = 0;
let cp2 = 0;
let sp1 = 0;
let sp2 = 0;

let turn = 1;

const newBtn = document.querySelector('.btn--new');
newBtn.addEventListener('click', newGame);

const diceBtn = document.querySelector('.btn--roll')
diceBtn.addEventListener('click', rollDice);

const holdBtn = document.querySelector('.btn--hold');
holdBtn.addEventListener('click', switchPlayer)


