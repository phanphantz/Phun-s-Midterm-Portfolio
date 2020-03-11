var index = 1;

function postFunction() {
  var message = document.getElementById("text1").value;
  var target = null;
  if (index == 1) {
    target = "post1";
  } else if (index == 2) {
    target = "reply1";
  } else if (index == 3) {
    target = "reply2";
  }
  document.getElementById(target).innerText = message;
  index++;
  if (index > 3) index = 1;
  document.getElementById("text1").value = "";
}

function clearFunction() {
  document.getElementById("post1").innerText = null;
  document.getElementById("reply1").innerText = null;
  document.getElementById("reply2").innerText = null;
  document.getElementById("text1").value = "";
  //message.value = "";
}
