console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

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

var board = document.getElementById('game-board');

function createBoard() {
	for (var i=0; i<cards.length; i++) {
		
var cardElement = document.createElement('div');

    cardElement.className = 'card';}

