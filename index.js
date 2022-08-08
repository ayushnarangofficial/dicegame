// simplified

function ab () {

    // FOR LEFT DICE
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);

    var randomImage = "images/dice" + randomNumber1 + ".png";

    document.querySelector(".img1").setAttribute("src", randomImage);

    // FOR RIGHT DICE
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    var randomImage1 = "images/dice" + randomNumber2 + ".png";

    document.querySelector(".img2").setAttribute("src", randomImage1);

    // WHO WON TEXT CHANGE
    if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Won!";
    } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Won!🚩";
    } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "🚩Draw!🚩";
    }

}

 document.querySelector("button").addEventListener("click", ab);







// js below for change dice on page reload 

// var randomNumber1 = Math.floor((Math.random() * 6) + 1);
//
// var randomImage = "images/dice" + randomNumber1 + ".png";
//
// var a = document.querySelectorAll("img")[0];
//
// a.setAttribute("src", randomImage);
//
//
// var randomNumber2 = Math.floor((Math.random() * 6) + 1);
// var randomImage1 = "images/dice" + randomNumber2 + ".png";
// var b = document.querySelectorAll("img")[1];
// b.setAttribute("src", randomImage1);
//
//
//
//
//
//
// if (randomNumber1 > randomNumber2) {
// document.querySelector("h1").textContent = "🚩Player 1 won!";
// } else if (randomNumber1 < randomNumber2) {
// document.querySelector("h1").textContent = "Player 2 won!🚩";
// } else if (randomNumber1 === randomNumber2) {
// document.querySelector("h1").textContent = "🚩Draw!🚩";
// }
