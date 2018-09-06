$(() => {
    makeDeck()
    console.log("ReadyPlayerOne")
})

$("#deal").click(function () {
    dealCards();
    console.log("Deal Me In")
})

function dealCards() {
    var card = deck.pop();
    playerHand.push(card);
    var card = deck.pop();
    playerHand.push(card);
    console.log("Dealt", playerHand)
}

$("#hit").click(function () {
    hit();
    console.log("Hit Me")
})

function hit() {
    var card = deck.pop();
    playerHand.push(card);
    console.log(playerHand)
}

$("#stand").click(function () {
    stand();
    console.log("I'll Stand")
})

function stand() {
    let sum = 0
    for (var i = 0; i < playerHand.length; i++) {
        console.log('cards in hand: ', playerHand[i])
        // if (players[i].score > 17 && players[i].score < 22)
        //     alert("Winner")
    }

    console.log('Final hand value: ', sum)
}













$("#newgame").click(function () {
    console.log("Let's go again")
})

//Work functions in order of logic. Start with cards, then deck and finally hand.  Hand will deal with scores and alerts.

//First wanted to create the cards that will be played
var suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
var numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
var deck = new Array();
// var players = ['Player0', 'Player1'];
let playerHand = []

//Creating the deck and adding values for face cards and Ace.
//Adding the shuffle function to randomize deck

function makeDeck() {
    // deck = new Array();
    for (var s = 0; s < suits.length; s++) {
        for (var n = 0; n < numbers.length; n++) {
            var card = { Numbers: numbers[n], Suits: suits[s] };
            deck.push(card);
        }
    }
    console.log(deck);
}

//Value for face cards and Ace
// function cardValue() {
//     if (numbers === "J" || numbers === "Q" || numbers === "K") {
//         return 10
//     }
//     else if (numbers === "A") {
//         return 11
//     }
//     else {
//         return numbers
//     }
// }

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
}




function score() {
    var points = 0;
    for (var i = 0; i < player.hand.length; i++) {
        points += player.hand;
    }
    players[i].points = score;
    return score;
}

//Change the alert function to a means to check if player busted over 21  
function checkForBust() {
    var sum = 22;
    if (sum > 21) {
        console.log("BUSTED")
    }
    if (sum === 21) {
        console.log("BLACKJACK You Win")
    }
}





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

