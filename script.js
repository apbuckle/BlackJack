$(() => {
    makeDeck();
    cardValue();
    buildPlayers();
    // faceCard();
    console.log("ReadyPlayerOne")
})

$("#deal").click(function() {
    makeDeck();
    cardValue();
    // faceCard();
    shuffle();
    dealCards();
//deal cards    
    console.log("Deal Me In")
})

$("#hit").click(function() {
    hit();
    checkForBust();
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
var players = new Array();

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
    
    // var numbers = ("5");
    // numbers = cardValue();
    // console.log(cardValue());
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


//Durstenfeld shuffle used to randomize the deck
function shuffle() {
    
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;

    }
    // return arr;
}
// var arr = [26, 5, 007, 34, 8, 590, 67, "H", "WE", "ZZ"];
// arr = shuffle(arr);
// console.log(arr);



//Need to create player and dealer or two players
//Players will possess a hand

function buildPlayers() {
    players = new Array();
    for (var i = 0; i <= 1; i++) {
        var player = ("Player" + i)
        players.push(player);
console.log("They are alive")
        }

    }

//Each player will have a hand with 2 cards to start off with.
//Need to make a funtion let will allow card to pop() from deck and push() card to hand and show its images

function dealCards() {
    hand = new Array();
    var card = deck.pop();
    hand.push(card);
    console.log("Deal")

//Function to sum value of hand

function sumOfHand() {
    var total = 0;
    for (var i = 0; i < player.hand.length; i++) {
        total += player.hand;
    }
    return total;
}
console.log("I can count")
}

//Function for hit button
//only adds 1 card to hand from deck. pop() then 1 push() to hand
//update sum
//check if over 21

function hit(){
    var card = deck.pop();
    hand.push(card);
    sumOfHand();
    

}
//Change the alert function to a means to check if player busted over 21  
function checkForBust() {
    var sum = 21;
if (sum > 21) {
    console.log("BUSTED")
}
if (sum === 21) {
    console.log("BLACKJACK You Win")
}
}
checkForBust();





    
    












//Need to create a function that will deal the hand from the deck
//Deal cards button will give two face up cards to player
//Then place the dealt card image/value in each respective box
//link images with each card


//sum total of cards in hand (create value system)

//Make hit button work to draw the next card in deck
//if stand is clicked the dealer will recieve next card untill equal to 17 or between 18 - 21
//if dealer goes over 21, bust and player wins



//Function that alerts player if they can hit, busted or hit Blackjack


// function Alert() {
//     var handSum = 21;
// if (handSum > 21) {
//     console.log("BUSTED")
// }
// if (handSum === 21) {
//     console.log("BLACKJACK You Win")
// }
// else console.log("You may hit")
//  }
// Alert();







//Function for stand button










// });

