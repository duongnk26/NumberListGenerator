var numberStart;
var numberEnd;
var jump;

function getNumberStart() {
  numberStart = parseFloat(document.getElementById("numberstart").value);
};

function getNumberEnd() {
  numberEnd = parseFloat(document.getElementById("numberend").value);
}

jump = 1;
function getJump() {
    jump = parseFloat(document.getElementById("jump").value);
}

function genNumberList() {
  var numberList = "";
  for (var index = numberStart; index <= numberEnd; index += jump) {
    numberList += index + "<br>";
  };
  document.getElementById("number-result").innerHTML = numberList;
  document.getElementById("copy-text").style.display = "block";
}

function copyText () {
  var text = document.getElementById('number-result').innerText;
  navigator.clipboard.writeText(text)
  setTimeout(alertCopyText, 700);
  document.getElementById('alert-copy-text').style.display = "block";
  function alertCopyText(){
    document.getElementById('alert-copy-text').style.display = "none";
  }
}

