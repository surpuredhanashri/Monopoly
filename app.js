var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box8 = document.querySelector('#box8');
var box12 = document.querySelector('#box12');
var box16 = document.querySelector('#box16');
var box15 = document.querySelector('#box15');
var box14 = document.querySelector('#box14');
var box13 = document.querySelector('#box13');
var box9 = document.querySelector('#box9');
var box5 = document.querySelector('#box5');

var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
var arrdiv = [box1,box2,box3,box4,box8,box12,box16,box15,box14,box13,box9,box5]
const player1_button = document.getElementById(`player-1`);
const player2_button = document.getElementById(`player-2`);

console.log(player1_button);
console.log(player2_button);

player1_button.addEventListener(`click`, rollDice_1);   //line no 8 
player2_button.addEventListener(`click`, rollDice_2);

let player1 = ["Dhanashri", 0, 1000];
let player2 = ["Surpure", 0, 1000];

function rollDice_1() {
    let position= Math.floor(Math.random() * 6) + 1;
    console.log("Player-1 roll",position);
    changePosition_1(player1[1], position);   
}

function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("Player-2 roll",position);
    changePosition_2(player2[1], position);         //line no 23
}

function changePosition_1(old, currentpos) {
    var newposition = old+ currentpos;
    player1[1] = newposition;
    console.log("Player-1",player1[1]);
    changeMoney_1(player1[1]);
}

function changePosition_2(old, currentpos) {
    var newposition = old+ currentpos;
    player2[1] = newposition;
    console.log("Player-2",player2[1]); 
    changeMoney_2(player2[1]);      //line no 37
}

function changeMoney_1(p1) {
    let updateMoney = 0;
    if (p1 < board.length) {
        updateMoney = player1[2] - board[p1 - 1];
    }
    else{
        p1=p1%15;
        updateMoney=player1[2]-board[p1-1];
    }
    player1[2]=updateMoney;
    console.log("player-1 money",player1[2]);
}

function changeMoney_2(p2) {
    let updateMoney = 0;
    if (p2 < board.length) {            // line  no 55
        updateMoney = player1[2] - board[p2 - 1];
    }
    else{
        p2=p2%15;
        updateMoney=player1[2]-board[p2-1];
    }
    player2[2]=updateMoney;
    console.log("player-2 money",player2[2]);
}
