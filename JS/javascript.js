var S1 = document.getElementById("s1");
var S2 = document.getElementById("s2");
var S3 = document.getElementById("s3");
var S4 = document.getElementById("s4");
var S5 = document.getElementById("s5");
var BTN = document.getElementById("btn");
var ROW = document.getElementById("new");
var BG1 = document.getElementById("background1");
var BG2 = document.getElementById("background2");

var count = 1;
var num1;
var num2;

S1.onclick = function () {
  if (count === 1) {
    S1.style.backgroundColor = "hsl(217, 12%, 63%)";
    S1.style.color="white"
    count++;
    num1=1;
  } else if (count === 2) {
    S1.style.backgroundColor = " hsl(25, 97%, 53%)";
    count++;
    num2=1;
  }
};
S2.onclick = function () {
    if (count === 1) {
      S2.style.backgroundColor = "hsl(217, 12%, 63%)";
      S2.style.color="white"
      count++;
      num1=2;
    } else if (count === 2) {
      S2.style.backgroundColor = " hsl(25, 97%, 53%)";
      count++;
      num2=2;

    }
  };
S3.onclick = function () {
    if (count === 1) {
      S3.style.backgroundColor = "hsl(217, 12%, 63%)";
      S3.style.color="white"
      count++;
      num1=3;
    } else if (count === 2) {
      S3.style.backgroundColor = " hsl(25, 97%, 53%)";
      num2=3;

      count++;
    }
  };
S4.onclick = function () {
    if (count === 1) {
      S4.style.backgroundColor = "hsl(217, 12%, 63%)";
      S4.style.color="white"
      count++;
      num1=4;
    } else if (count === 2) {
      S4.style.backgroundColor = " hsl(25, 97%, 53%)";
      count++;
      num2=4;

    }
  };
S5.onclick = function () {
    if (count === 1) {
      S5.style.backgroundColor = "hsl(217, 12%, 63%)";
      S5.style.color="white"
      count++;
      num1=5;
    } else if (count === 2) {
      S5.style.backgroundColor = " hsl(25, 97%, 53%)";
      count++;
      num2=5;

    }
  };
  
  

BTN.onclick = function () {
  BG1.style.display = "none";
  BG2.style.display = "block";
  ROW.innerHTML="You selected "+num1+" out of "+num2;
  ROW.style.display="block";
};
