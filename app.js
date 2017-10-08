var numOfEnemies = 4,
    battlefield = document.querySelector(".app"),
    pos = 0,
    score = 0,
    speed = 100;

function createEnemies(num) {
  for (i=0;i < num; i++) {
    var enemy = document.createElement("div");
    var getPosition = Math.floor((Math.random() * 100) + 1) * 3;
    enemy.className = "enemy enemy" + i; 
    enemy.style.top = 120 * i + "px";
    enemy.style.left = "-" + getPosition + "px";
    pos = getPosition;
    battlefield.appendChild(enemy);
    attack(enemy, pos);
    attachHandler(enemy);
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
