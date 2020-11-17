
//button

function click1(id) {id.innerHTML = "That's not right!";};

function click2(id) {id.innerHTML = "Correct! Well Done!";};

function click3(id) {id.innerHTML = "Wrong Answer!";};

function click4(id) {id.innerHTML = "Really!! Try again.";};




//checkbox 
function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
