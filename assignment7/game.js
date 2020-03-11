window.onload = pageLoad;
var timer = null;
var targetClick = 0;
var currentClick = 0;

function pageLoad() {
  document.getElementById("start").onclick = startGame;
}

function startGame() {
  alert("Ready");

  addBox();
  timeStart();
}

function timeStart() {
  var TIMER_TICK = 1000;
  var min = 0.5; // 0.5 minute
  var second = min * 60;
  var x = document.getElementById("clock");
  x.innerHTML = second;

  timer = setInterval(timeCount, TIMER_TICK);

  function timeCount() {
    x.innerHTML--;
    var allbox = document.querySelectorAll("#squares-layer div");
    if (x.innerHTML == 0) {
      clearScreen();
    }
  }
}

function addBox() {
  var numbox = document.getElementById("numbox").value;
  targetClick = numbox;
  currentClick = 0;
  var squaresLayer = document.getElementById("squares-layer");
  var colorDrop = document.getElementById("color").value;

  for (var i = 0; i < numbox; i++) {
    var tempbox = document.createElement("div");
    tempbox.className = "square";
    tempbox.id = "box" + i;
    tempbox.style.left = Math.random() * (500 - 25) + "px";
    tempbox.style.top = Math.random() * (500 - 25) + "px";
    tempbox.style.backgroundColor = colorDrop;

    //console.log("new box");

    //add element to HTML node
    squaresLayer.appendChild(tempbox);
    bindBox(tempbox.id);
  }
}

function bindBox(box) {
  //เมื่อกดแล้ว กล่องจะหายไป
  var target = document.getElementById(box);

  target.onclick = function() {
    currentClick++;
    removeMe(box);
  };
}

function removeMe(x) {
  var tar = document.getElementById(x);
  tar.parentNode.removeChild(tar);

  if (currentClick == targetClick) {
    console.log(currentClick + " " + targetClick);
    setTimeout(YouWin, 500);
    StopTimer();
  }
}

function YouWin() {
  alert("You Win !");
}

function clearScreen() {
  console.log("timeout");
  var allbox = document.querySelectorAll(".square");

  //delete all  squares
  for (var i = 0; i < allbox.length; i++) {
    removeMe(allbox[i].id);
  }
  StopTimer();
}

function StopTimer() {
  clearInterval(timer);
  timer = null;
}
