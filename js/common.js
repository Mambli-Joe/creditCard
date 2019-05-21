//--Adaptive Menu
var showBtn = document.getElementById("showMenu");
showBtn.addEventListener("click", showMenu);

function showMenu() {
  document.getElementById("showHide").style.display = "block";
  showBtn.removeEventListener("click", showMenu);
  showBtn.addEventListener("click", hideMenu);
}

function hideMenu() {
  document.getElementById("showHide").style.display = "none";
  showBtn.removeEventListener("click", hideMenu);
  showBtn.addEventListener("click", showMenu);
}

//--Form Validation

function formCheck() {
  var arr = [];
  var number1 = document.getElementById('number1').value;
  var number2 = document.getElementById('number2').value;
  var number3 = document.getElementById('number3').value;
  var number4 = document.getElementById('number4').value;
  var holder = document.getElementById('holder').value;
  var cvc = document.getElementById('cvc').value;
  var valForNumber = /^[0-9]{4}$/;
  var valForHolder = /^[A-Z][a-z][a-z][a-z]+\s[A-Z][a-z][a-z][a-z]+$/i;
  var valForCvc = /^[0-9]{3}$/;

  if (valForNumber.test(number1)) {
    document.getElementById('number1').style.border = "1px solid green";
    number1 = true;
    arr.push(number1);
  } else {
    document.getElementById('number1').style.border = "1px solid red";
  }

  if (valForNumber.test(number2)) {
    document.getElementById('number2').style.border = "1px solid green";
    number2 = true;
    arr.push(number2);
  } else {
    document.getElementById('number2').style.border = "1px solid red";
  }
  if (valForNumber.test(number3)) {
    document.getElementById('number3').style.border = "1px solid green";
    number3 = true;
    arr.push(number3);
  } else {
    document.getElementById('number3').style.border = "1px solid red";
  }

  if (valForNumber.test(number4)) {
    document.getElementById('number4').style.border = "1px solid green";
    number4 = true;
    arr.push(number4);
  } else {
    document.getElementById('number4').style.border = "1px solid red";
  }
  
  if (valForHolder.test(holder)) {
    document.getElementById('holder').style.border = "1px solid green";
    holder = true;
    arr.push(holder);
  } else {
    document.getElementById('holder').style.border = "1px solid red";
  }
  if (valForCvc.test(cvc)) {
    document.getElementById('cvc').style.border = "1px solid green";
    cvc = true;
    arr.push(cvc);
  } else {
    document.getElementById('cvc').style.border = "1px solid red";
  }

  if (arr.length == 6) {
    document.getElementById('error').innerHTML = "Данные успешно отправлены!";
    document.getElementById('error').style.color = "green";
  } else {
    document.getElementById('error').innerHTML = "*Пожалуйста, заполните отмеченные поля!";
    document.getElementById('error').style.color = "red";
  }
}