console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {

for (var i = 0; i < cards.length; i++) {

var cardElement = document.createElement('div');

cardElement.className = 'card';

  cardElement.setAttribute('data-card', cards[i]);

      cardElement.addEventListener('click', isTwoCards);

    board.appendChild(cardElement);
    board.appendChild(cardElement);

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2013/07/13/12/21/chess-159693_960_720.png'>"; 
	} else {
		this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2012/10/26/01/20/queen-63006_960_720.jpg'>";
	}

  if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}
//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king";

//if (cardOne === cardTwo) {
//	alert("Sorry, try again.");
//}

//else if (cardOne === cardFour) {
//	alert("Sorry, try again.");
//}

//else if (cardOne === cardThree) {
//	alert("You have found a match!");
//}

//else if (cardTwo === cardThree) {
//	alert("Sorry, try again.");
//}

//else if (cardTwo === cardFour) {
//	alert("You have found a match!");
//}

//else if (cardThree === cardFour) {
//	alert("Sorry, try again.");
//}



