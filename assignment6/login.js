function getParams() {
  var idx = document.URL.indexOf("?");
  var params = new Array();
  if (idx != -1) {
    var pairs = document.URL.substring(idx + 1, document.URL.length).split("&");
    for (var i = 0; i < pairs.length; i++) {
      nameVal = pairs[i].split("=");
      params[nameVal[0]] = nameVal[1];
    }
  }
  return params;
}

window.onload = loginLoad;
function loginLoad() {
  // วิธีใช้ getParams()
  document.getElementById("SubmitButton").onclick = checkLogin;
}

function checkLogin() {
  if (isPasswordMatch()) {
  } else {
    alert("Wrong Username or Password :(");
    return false;
  }
  //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

function isPasswordMatch() {
  if (
    getParams()["username"] == document.getElementById("user").value &&
    getParams()["password"] == document.getElementById("pass").value
  ) {
    return true;
  } else {
    return false;
  }
}
