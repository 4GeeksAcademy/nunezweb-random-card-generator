// import "bootstrap";
import "./style.css";

// window.onload = () => {
//   document.querySelector(".numCenter").innerHTML = cardNumberGenerator();
//   const cardSymbol = cardSymbolGenerator();
//   const cardSymbolCorners = document.querySelectorAll(".corner");
//   cardSymbolCorners[0].innerHTML = cardSymbol;
//   cardSymbolCorners[1].innerHTML = cardSymbol;
//

const element = document.getElementById("clickToShuffle");
let cardNumber = ["1", "3", "J", "8"];
let suits = ["♦", "♥", "♠", "♣"];

element.addEventListener("click", function() {
  document.querySelector(".numCenter").innerHTML = cardNumberGenerator();
  const cardSymbol = cardSymbolGenerator();
  const cardSymbolCorners = document.querySelectorAll(".corner");
  cardSymbolCorners[0].innerHTML = cardSymbol;
  cardSymbolCorners[1].innerHTML = cardSymbol;

  if (cardSymbol === "♦" || cardSymbol === "♥") {
    cardSymbolCorners[0].style.color = "red";
    cardSymbolCorners[1].style.color = "red";
  } else {
    cardSymbolCorners[0].style.color = "black";
    cardSymbolCorners[1].style.color = "black";
  }
});

let cardNumberGenerator = () => {
  let cardNumberIndex = Math.floor(Math.random() * cardNumber.length);

  return cardNumber[cardNumberIndex];
};

let cardSymbolGenerator = () => {
  let suitsIndex = Math.floor(Math.random() * suits.length);

  return suits[suitsIndex];
};

window.changeWidth = function() {
  var width = document.getElementById("widthInputWidth").value;
  var box = document.getElementsByClassName("card_template")[0];
  if (width >= 100 && width <= 800) {
    box.style.width = width + "px";
  } else {
    alert("Please enter a valid value between 100px and 800px.");
  }
};

window.changeHeight = function() {
  var height = document.getElementById("widthInputHeight").value;
  var box = document.getElementsByClassName("card_template")[0];
  if (height >= 100 && height <= 1200) {
    box.style.height = height + "px";
  } else {
    alert("Please enter a valid value between 100px and 1200px.");
  }
};
