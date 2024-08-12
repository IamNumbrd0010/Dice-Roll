


var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var diceNumber = randomNumber1;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var diceNumber2 = randomNumber2;

if (diceNumber < diceNumber2) {
    document.querySelector("h1").innerHTML = "<strong>Player Two Wins</strong>";
} else if (diceNumber > diceNumber2) {
    document.querySelector("h1").innerHTML = "<strong>Player One Wins</strong>";
} else (
    document.querySelector("h1").innerHTML = "<strong>Draw</strong>");



if (diceNumber === 1) {
 (document.querySelectorAll("img")[0].setAttribute("src", "dice1.png"));
}else if (diceNumber === 2){
   (document.querySelectorAll("img")[0].setAttribute("src", "dice2.png"));
 } else if (diceNumber === 3){
    (document.querySelectorAll("img")[0].setAttribute("src", "dice3.png"));
} else if (diceNumber === 4){
    (document.querySelectorAll("img")[0].setAttribute("src", "dice4.png"));
} else if (diceNumber === 5){
    (document.querySelectorAll("img")[0].setAttribute("src", "dice5.png"));
} else ((document.querySelectorAll("img")[0].setAttribute("src", "dice6.png")));



    if (diceNumber2 === 1) {
        (document.querySelectorAll("img")[1].setAttribute("src", "dice1.png"));
    }else if (diceNumber2 === 2){
        (document.querySelectorAll("img")[1].setAttribute("src", "dice2.png"));
     } else if (diceNumber2 === 3){
        (document.querySelectorAll("img")[1].setAttribute("src", "dice3.png"));
    } else if (diceNumber2 === 4){
        (document.querySelectorAll("img")[1].setAttribute("src", "dice4.png"));
    } else if (diceNumber2 === 5){
        (document.querySelectorAll("img")[1].setAttribute("src", "dice5.png"));
    } else ((document.querySelectorAll("img")[1].setAttribute("src", "dice6.png")));
    

