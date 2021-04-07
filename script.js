'use strict';

// document.querySelector(".message").textContent = "heyy"

let secret = Math.trunc(Math.random() * 100) + 1;


let score = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);

console.log(highScore, secret)
document.querySelector(".check").addEventListener('click', () => {

    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "❌You should enter a number";
    }
    else if (guess > 100) {

        document.querySelector(".message").textContent = "❗❗Number is out of range";
    }

    else if (guess === secret) {

        document.querySelector(".message").textContent = "🥇Congrats!";
        document.querySelector(".number").textContent = secret;

        document.querySelector(".check").setAttribute("disabled", " ");
        document.querySelector("body").style.backgroundColor = "green";


        if (score > highScore) {
            document.querySelector(".score").textContent = score;
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
        console.log(score, highScore)

    }
    else if (guess > secret) {
        if (score > 1) {

            checkDifference('📈Too High!');

        } else {

            fail();
        }


    }
    else if (guess < secret) {
        if (score > 1) {

            checkDifference('📉Too Low!');
        }
        else {

            fail();
        }

    }
    else if (score == 0) {

        fail();

    }
})

function fail() {


    document.querySelector(".message").textContent = "⛔Failed! Maybe next time";
    document.querySelector(".check").setAttribute("disabled", " ");
    document.querySelector("body").style.backgroundColor = "#c90202";
    document.querySelector(".score").textContent = 0;
    document.querySelector(".number").textContent = secret;

}

function checkDifference(diff) {

    document.querySelector(".message").textContent = diff;
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
}


document.querySelector(".again").addEventListener('click', function () {

    score = 20;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#000";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".check").removeAttribute("disabled", " ");
    document.querySelector(".guess").value = "";
    secret = Math.trunc(Math.random() * 100) + 1;
    console.log(highScore, secret)





})