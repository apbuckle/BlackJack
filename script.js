$(() => {
    console.log("ReadyPlayerOne")

$("#deal").click(function() {
    // dealCard(randomCard())
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
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        
    for (var s = 0; s < suits.length; s++) {
        for (var v = 0; v < values.length; v++) {
        var card = {Value: values[v], Suit: suits[s]};
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

//Need to create a function that will deal the hand from the deck
//Deal cards button will give two face up cards to player
//Then place the dealt card image/value in each respective box


//sum total of cards in hand (create value system)
//if sum is less than 21, player can hit
//Make hit button work to draw the next card in deck
//if over 21, alert player has busted
//if stand is clicked the dealer will recieve next card untill equal to 17 or between 18 - 21
//if dealer goes over 21, bust and player wins



//Function that alerts player if they can hit, busted or hit Blackjack
function cardSum() {
    var cardSum = 15;
if (cardSum > 21) {
    alert("BUSTED")
}
if (cardSum === 21) {
    alert("BLACKJACK You Win")
}
else console.log("You may hit")
 }
cardSum();
















});

