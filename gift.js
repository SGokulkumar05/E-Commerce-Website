function amount(e) {
  console.log(e.target.value.length);
  let val = e.target.value;
  if (val >= 25 && val <= 1000) {
    document.getElementById("amount").style.display = "none";
  } else if (val.length < 1) {
    document.getElementById("amount").style.display = "none";
  } else {
    document.getElementById("amount").style.display = "block";
  }
}

function remail(e) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (e.target.value.match(mailformat)) {
    document.getElementById("remail").style.display = "none";
  } else if (e.target.value.length < 1) {
    document.getElementById("remail").style.display = "none";
  } else {
    document.getElementById("remail").style.display = "block";
  }
}
function email(e) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (e.target.value.match(mailformat)) {
    document.getElementById("email").style.display = "none";
  } else if (e.target.value.length < 1) {
    document.getElementById("email").style.display = "none";
  } else {
    document.getElementById("email").style.display = "block";
  }
}

function mudisplay1() {
  document.getElementById("icons-hov1").style.display = "none";
}
function modisplay1() {
  document.getElementById("icons-hov1").style.display = "block";
}
function mudisplay2() {
  document.getElementById("icons-hov2").style.display = "none";
}
function modisplay2() {
  document.getElementById("icons-hov2").style.display = "block";
}
function mudisplay3() {
  document.getElementById("icons-hov3").style.display = "none";
}
function modisplay3() {
  document.getElementById("icons-hov3").style.display = "block";
}
