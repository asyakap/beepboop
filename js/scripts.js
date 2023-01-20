//Business Logic
function beepboop(number) {
  if(number < 1) {
    const paragraph = document.createElement("p");
    paragraph.append("Please enter integer number > 0");
    document.body.append(paragraph);
  }
  else {
    let newArray = [];
    let i = number;
    while (i > 0) {
      newArray.push(number - i);
      i --;
    }
    newArray.push(number);
    const paragraph = document.createElement("p");
    paragraph.append(newArray);
    document.body.append(paragraph);
  }
}

//Interface Logic 
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
    let input = document.getElementById("input").value;
    beepboop(input);
  }
}