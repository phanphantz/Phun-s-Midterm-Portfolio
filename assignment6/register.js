window.onload = pageLoad;
function pageLoad() {
  var submitButton = document.getElementById("SubmitButton");
  submitButton.onclick = validateForm;
}

function validateForm() {
  // alert("Ok");
  if (isPasswordMatch()) {
  } else {
    return false;
  }

  //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

function isPasswordMatch() {
  if (
    document.getElementById("Pass").value ==
    document.getElementById("Retype").value
  ) {
    return true;
  } else {
    document.getElementById("errormsg").innerText = "Password doesn't match :(";
    return false;
  }
}
