var startNumber;
var endNumber;
var jump = 1;

function disableButton (errId) {
  document.getElementById("buttongenerate").disabled = true;
  document.getElementById(errId).innerHTML = "Giá trị không hợp lệ";
}

function enableButton (errId) {
  document.getElementById("buttongenerate").disabled = false;
  document.getElementById(errId).innerHTML = "&nbsp;";
}

function getFloatValueByElemId(elemId, errId) {
  const elem = document.getElementById(elemId);

  if(!elem.value || elem.value.length == 0) {
    disableButton(errId);
  } else {
    enableButton(errId);
    return parseFloat(elem.value);
    }
}
  
function setStartNumber () {
  startNumber = getFloatValueByElemId("startnumber", "err-startnumber");
}

function setEndNumber () {
  endNumber = getFloatValueByElemId("endnumber", "err-endnumber");
}

function setJump () {
  jump = getFloatValueByElemId("jump", "err-jump");
}

function genNumberList() {
  
  setStartNumber();
  setEndNumber();

  if (!document.getElementById("buttongenerate").disabled){
    var numberList = "";
    for (var index = startNumber; index <= endNumber; index += jump) {
      numberList += index + "<br>";
    };
    document.getElementById("result").innerHTML = numberList;
    document.getElementById("copy-text").style.display = "block";
    console.log(numberList);
  }
}

function copyText () {
  var text = document.getElementById('result').innerText;
  navigator.clipboard.writeText(text)
  document.getElementById('alert-copy-text').style.display = "block";
  setTimeout(deleteCopyText, 700);
  function deleteCopyText(){
    document.getElementById('alert-copy-text').style.display = "none";
  }
}

