var battlefield = document.querySelector(".app");
var enemy = document.createElement("div");
enemy.className = "enemy1";
var pos = 0;

battlefield.appendChild(enemy);

document.querySelector(".enemy1").onclick = function(e, timer1){
  clearTimeout(timer1);
  var enemy = e.target;
  enemy.className += " poof"
}

function attack() {
  if (pos == 500) {
    clearTimeout(timer1);
  } else {
    pos = pos + 10;
    console.log(pos);
    var enemy = document.querySelector(".enemy1");
    enemy.style.top = pos + "px";
    var timer1 = setTimeout(attack, 100);
  }
}


attack();
