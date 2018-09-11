var suits = ["&diams;", "&hearts;", "&spades;", "&clubs;"];
var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var deck = new Array();
var players = ['Player0', 'Player1'];
let playerHand = []


function makeDeck() {
    for (var s = 0; s < suits.length; s++) {
        for (var n = 0; n < numbers.length; n++) {
            var card = { Numbers: numbers[n], Suits: suits[s] };
            deck.push(card);
        }
    }
    console.log(deck);
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


function dealCards() {
    var card = deck.pop();
    playerHand.push(card);
    var card = deck.pop();
    playerHand.push(card);
    console.log("Dealt", playerHand)

    $('#dealtcards').html(`
        <div class='dealt'>
            ${playerHand[0].Numbers}
            ${playerHand[0].Suits}
        </div>
        <div class='dealt'>
            ${playerHand[1].Numbers}
            ${playerHand[1].Suits}
            
        </div>
    
    `)
}

function hit() {
    var card = deck.pop();
    playerHand.push(card);
    console.log(playerHand)

    $('#hitcards').html(`
        <div div class='hit'>
            ${playerHand[2].Numbers}
            ${playerHand[2].Suits}

        </div>
    `)
}

function score() {
    let sum = 0
    for (var i = 0; i < playerHand.length; i++) {
        sum += playerHand[i].Numbers
        if (sum === 21) {
            alert("BLACKJACK")
        }
        else if (sum >= 22) {
            alert('Bust')
        }
    }

    console.log('Final hand value: ', sum)

    $('#alert').html(`
        <div class='score'>
            ${sum}
            
    `)
}


$(() => {
    makeDeck();
    shuffle();
})


$("#deal").click(function () {
    dealCards();
    score();
})


$("#hit").click(function () {
    hit();
    score();
})


$("#stand").click(function () {
    score();
})


$("#newgame").click(function () {
    location.reload();

})



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
