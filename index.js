var randomNum1 = Math.floor(Math.random() * 6) + 1; //1-6 Number

var randomImage1 = "images/dice" + randomNum1 + ".png"; //Image Source

var dice1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage1); //Image Setter


var randomNum2 = Math.floor(Math.random() * 6) + 1; //1-6 Number

var randomImage2 = "images/dice" + randomNum2 + ".png"; //Image Source

var dice2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2); //Image Setter

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
} else if (randomNum1 = randomNum2) {
  document.querySelector("h1").innerHTML = "🚩 Draw! 🚩"
}
