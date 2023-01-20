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
    //create new Array with all preceding numbers
    while (i > 0) {
      newArray.push(number - i);
      i --;
    }
    newArray.push(number);

    //check for elements of an array containing numbers 1,2,3 and replacing with appropriate phrases
    newArray.forEach(function(element) {
      if ((element + "").indexOf("3") > -1) {
        let index = newArray.indexOf(element);
        newArray[index] = " Won't you be my neighbor?";
      }
      else if ((element + "").indexOf("2") > -1) {
        let index = newArray.indexOf(element);
        newArray[index] = " Boop!";
      }
      else if ((element + "").indexOf("1") > -1) {
        let index = newArray.indexOf(element);
        newArray[index] = " Beep!";
      }
      else {
        let index = newArray.indexOf(element);
        newArray[index] = " " + element;
      }
    });
    document.getElementById("output").innerText = newArray;
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