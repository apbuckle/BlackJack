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

//Work functions in order of logic. Start with cards, then deck and finally hand.  Hand will deal with scores and alerts.

//First wanted to create the cards that will be played
var suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
var numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();


//Found a cool way to display the cards using value and suit symbols
function faceCard(card) {
    var el = document.createElement('div');
    var symbol = " ";
    if (card.Suit == "Hearts")
    symbol = "&hearts;";
    else if (card.Suit == "Diamonds")
    symbol = "&diams;";
    else if (card.Suit == "Spades")
    symbol = "&spades;";
    else (card.Suit == "Clubs")
    symbol = "&clubs;";

    el.className = "card";
    el.innerHTML = card.Value + "<br/>" + symbol;
    return el;
    
}

//Creating the deck and adding values for face cards and Ace.
//Adding the shuffle function to randomize deck

function makeDeck() {
    deck = new Array();
    for (var s = 0; s < suits.length; s++) {
        for (var n = 0; n < numbers.length; n++) {
        var card = {Number: numbers[n], Suit: suits[s]};
        deck.push(card);
        }
    }
}
makeDeck();

//Value for face cards and Ace
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

var numbers = ("A");
numbers = cardValue();
console.log(cardValue());



//Durstenfeld shuffle used to randomize the deck
function shuffle(arr) {
    
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
}
var arr = [26, 5, 007, 34, 8, 590, 67, "H", "WE", "ZZ"];
arr = shuffle(arr);
console.log(arr);




//Card images and adding image to game board
//Add two images to player and then two to dealer

// function displayImg(card) {
//     for (var i = 0; i < deck.length; i++) {
//         var imgElement = document.createElement('img')
//         imgElement.src =  "images/" + card[i].numbers + " of " + card[i].suits
            
//             if ()
//     }







// }

//Need to make a funtion for a card that will pop() from deck and push() card to hand and show its images


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

