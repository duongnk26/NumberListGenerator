var numberStart;
var numberEnd;
var jump;

// get value from input tag when user fill in and convert value to Float
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

// genarate number list
function genNumberList() {
  var numberList = "";
  for (var index = numberStart; index <= numberEnd; index += jump) {
    numberList += index + "<br>";
  };
  document.getElementById("number-result").innerHTML = numberList;
  document.getElementById("copy-text").style.display = "block";
}

// copy to clipboard
function copyText () {
  var text = document.getElementById('number-result').innerText;
  navigator.clipboard.writeText(text)
  setTimeout(alertCopyText, 700);
  document.getElementById('alert-copy-text').style.display = "block";
  function alertCopyText(){
    document.getElementById('alert-copy-text').style.display = "none";
  }
}

