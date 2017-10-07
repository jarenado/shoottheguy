var numOfEnemies = 7,
    battlefield = document.querySelector(".app"),
    pos = 0,
    score = 0;

function createEnemies(num) {
  for (i=0;i < num; i++) {
    var enemy = document.createElement("div");
    var getPosition = Math.floor((Math.random() * 100) + 1) * 3;
    enemy.className = "enemy enemy" + i; 
    enemy.style.left = 120 * i + "px";
    enemy.style.top = "-" + getPosition + "px";
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

function killGuy() {
  //kill guy
  //update score
}

function attachHandler(enemy) {
  enemy.onclick = function(e) {
    e.target.className += " poof";
    updateScore();
  }
}

function attack(enemy, pos) {
  pos = pos + 10;
  enemy.style.top = pos + "px"
  setTimeout(function(){
    attack(enemy, pos)
  }, 500);
}

createEnemies(numOfEnemies);
