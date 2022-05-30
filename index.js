var randomImgSrc = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];


var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice" + randomNumber1 + "png";

img1.setAttribute("src", randomImgSrc);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSources2 = "images/" + randomNumber2 + "png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSources2);

//if player one wins, update
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else {
        document.querySelector("h1").innerHTML = "Draw!"
}