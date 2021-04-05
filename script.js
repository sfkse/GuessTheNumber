'use strict';

// document.querySelector(".message").textContent = "heyy"

const secret = Math.trunc(Math.random() * 100 + 1);


let score = Number(document.querySelector(".score").textContent);

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
        document.querySelector(".highscore").textContent = score;
        document.querySelector(".check").setAttribute("disabled", " ");
        document.querySelector("body").style.backgroundColor = "green";



    }
    else if (guess > secret) {
        if (score > 1) {

            checkDifference('📉Too High!');

        } else {

            fail();
        }


    }
    else if (guess < secret) {
        if (score > 1) {

            checkDifference('📈Too Low!');
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

    window.location.reload();
    console.log("reset");
})