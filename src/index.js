import _ from 'lodash';

require('./sass/style.scss');

var gunSound = require('./sounds/gun.mp3');
var Plane = require('./images/Plane/Fly.png');
var Dead = require('./images/Plane/Dead.png');


var numOfEnemies = 4,
    battlefield = document.querySelector(".app"),
    pos = 0,
    score = 0,
    speed = 100;

function createEnemies(num) {
  _.times(num, index => {
    const enemy = document.createElement("div");
    const getPosition = Math.floor((Math.random() * 100) + 1) * 3;
    enemy.className = "enemy enemy" + index; 
    enemy.style.top = 120 * index + "px";
    enemy.style.left = "-" + getPosition + "px";
    pos = getPosition;
    battlefield.appendChild(enemy);
    attack(enemy, pos);
    attachHandler(enemy);
  });

  for (let i=0;i < num; i++) {
  }
}

function updateScore() {
  score++;
  console.log(score);
  var scoreboard = document.getElementsByClassName("scoreboard");
  console.log('scoreboard', scoreboard);
  scoreboard[0].innerHTML =  score; 

}

function killGuy(guy) {
  //kill guy
  
  console.log(guy.offsetTop);
  //update score
}

function attachHandler(enemy) {
  enemy.onclick = function(e) {
    e.target.className += " poof";
    var gun = new Audio(gunSound);
    /* gun.play();*/
    killGuy(e.target);
    updateScore();
  }
}

function attack(enemy, pos) {
  pos = pos + 10;
  enemy.style.left = pos + "px"
  setTimeout(function(){
    attack(enemy, pos)
  }, speed);
}

createEnemies(numOfEnemies);

