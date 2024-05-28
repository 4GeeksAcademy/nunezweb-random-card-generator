import "bootstrap";
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
