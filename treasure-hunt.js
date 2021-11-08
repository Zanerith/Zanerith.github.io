//Assign Variables==========================================
var gold = Math.floor(Math.random() * 9);


var bomb1 = Math.floor(Math.random() * 9);
var bomb2 = Math.floor(Math.random() * 9);

if (gold === bomb1) {
    bomb1 = Math.floor(Math.random() * 9);
}

if (gold === bomb2) {
    bomb2 = Math.floor(Math.random() * 9);
}

console.log(gold, bomb1, bomb2);

var count = 8;
// var machine = 4;




//Treasure Function==============================================
const treasure = (location) => {

    if (count === 0) {
        alert('Reset the game')
        document.getElementById()
    }

    // if (winner = true) {
    //     alert("YOU ARE RICH!!!")
    // }

    // if (loser = true) {
    //     alert("GAME OVER!!!")
    // }
    // // alert(`You selected ${location}`)

    if (location === gold) {
        alert('You find the treasure')
        document.getElementById(location).innerHTML = "&#x1f308";
        var winner = true;
    }

    else if (location === bomb1 || location === bomb2) {
        alert('you dead')
        document.getElementById(location).innerHTML = "&#x2620";
        var loser = true;
    }

    else {
        alert('try again')
        document.getElementById(location).innerHTML = "🤔";
    }

    count = count - 1;
    document.getElementById('counter').innerHTML = count;

    //================================================================
    //Machine Automate
    // random = Math.floor(Math.random() * 9)
    // alert(`Machine selected ${random}`)

    // if (random === gold) {
    //     alert('You find the treasure')
    //     document.getElementById(random).innerHTML = "&#x1f308";
    // }

    // else if (random === bomb1 || random === bomb2) {
    //     alert('you dead')
    //     document.getElementById(random).innerHTML = "&#x2620";
    // }

    // else {
    //     alert('try again')
    //     document.getElementById(random).innerHTML = "🤔";
    // }

    // machine = machine - 1;


}
