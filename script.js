$(() => {
    console.log("ReadyPlayerOne")

$("#deal").click(function() {
    dealCard(randomCard())
    console.log("Deal Me In")
})

$("#hit").click(function() {
    console.log("Hit Me")
})

$("#stand").click(function() {
    console.log("I'll Stand")
})

$("#redeal").click(function() {
    console.log("Let's go again")
})

var deck = new Array ();
var suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function createDeck () {
    var deck = new Array();
    for (var i = 0; i < suits.length; i++) {
        for (var v = 0; v < values.length; v++) {
            var
        var card = {value: values[v], suit: suits[i]};
        deck.push(card);
    }
}
return deck;
}


function randomCard() {
    return Math.floor(Math.random() * numberOfCardsInDeck);
}
















});

