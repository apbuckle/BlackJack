$(() => {
    console.log("ReadyPlayerOne")

$("#deal").click(function() {
    
    console.log("Deal Me In")
})

$("#hit").click(function() {
    console.log("Hit Me")
})

$("#stand").click(function() {
    console.log("I'll Stand")
})

$("#newgame").click(function() {
    console.log("Let's go again")
})



//First wanted to create the deck that will be played and then will randomize it in shuffle before dealing
function createDeck () {
    var deck = new Array();
    var suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
    var numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        
    for (var s = 0; s < suits.length; s++) {
        for (var n = 0; n < numbers.length; n++) {
        var card = {Number: numbers[n], Suit: suits[s]};
        deck.push(card);
    }
}
return deck;
}
createDeck();
console.log("We made a deck");




//Durstenfeld shuffle used to randomize the deck
function shuffleArray(array) {
    
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array;
}
var arr = [2, 5, 69, 32, 101, 52, 39, 7];
arr = shuffleArray(arr);
console.log(arr);


//Value system for card
function cardValue() {
    if (numbers === "J" || numbers === "Q" || numbers === "K") {
        return 10
    }
    else if (numbers === "A") {
        return 11 
    }
    else {
        return numbers
        }        
    }
var numbers = ("2");
numbers = cardValue();
console.log(cardValue());

//Need to create a function that will deal the hand from the deck
//Deal cards button will give two face up cards to player
//Then place the dealt card image/value in each respective box
//link images with each card


//sum total of cards in hand (create value system)

//Make hit button work to draw the next card in deck
//if stand is clicked the dealer will recieve next card untill equal to 17 or between 18 - 21
//if dealer goes over 21, bust and player wins



//Function that alerts player if they can hit, busted or hit Blackjack
function Alert() {
    var cardSum = 21;
if (cardSum > 21) {
    console.log("BUSTED")
}
if (cardSum === 21) {
    console.log("BLACKJACK You Win")
}
else console.log("You may hit")
 }
Alert();

//Function for deal button
//Will add two cards to player and two cards to dealer



//Function for hit button
//only adds 1 card to player deck and checks to see if its a bust



//Function for stand button










});

