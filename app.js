var numOfEnemies = 7;
var battlefield = document.querySelector(".app");
var pos = 0;

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

function attachHandler(enemy) {
  enemy.onclick = function(e) {
    e.target.className += " poof";
  }
}

function attack(enemy, pos) {
  console.log('pos', pos)
  pos = pos + 10;
  enemy.style.top = pos + "px"
  setTimeout(function(){
    attack(enemy, pos)
  }, 500);
}


createEnemies(numOfEnemies);
