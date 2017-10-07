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
  }
}

function attack(enemy, pos) {
  console.log('pos', pos)
  pos = pos + 10;
  enemy.style.top = pos + "px"
  /* var enemies = document.getElementsByClassName('enemy');*/
  /* for (i = 1;i < enemies.length; i++) {*/
  /* var enemy = enemies[i];*/
  /* if (pos == 450) {*/
  /* console.log('stop');*/
  /* } else {*/
  /* pos = pos + 10;*/
  /* enemy.style.top = pos + "px";*/
  /* console.log(enemy);*/
  /* }*/
  /* }*/
  setTimeout(function(){
    attack(enemy, pos)
  }, 500);
}
/* document.querySelector(".enemy").onclick = function(e, timer1){
 *   clearTimeout(timer1);
 *   var enemy = e.target;
 *   enemy.className += " poof"
 * }*/

createEnemies(numOfEnemies);
attack();
