// These are the varibles I use in my JS , I set them globally.
const playerOneButton = document.getElementById("playerOne-button")
let compareValueOne = 1;
// This is the spin function, I use this to "spin" the dice images
// The idea for this function came from a youtube video but I had to tweak a lot to make it work for me.
// THIS IS THE LATEST UPDATE TO THE JS 
function spin() {
    document.getElementById('img').className = 'spinImg';
    document.getElementById('img2').className = 'spinImg';
    document.getElementById('img3').className = 'spinImg';
}
// This just restarts the game by refreshing the page
let restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", function () {
    window.location.reload();
});
// Just a sound effect to emphasie the rolling/spining function
function play() {
    var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    audio.play();
}
// This function takes the first three dice images and spins them then it pick a random number between 1-6 
// and switchs the dice face accordingly.
// It essentially "rolls" the dice
function Player1() {
    document.getElementById('d1').classList.add("spinImg");
    document.getElementById('d2').classList.add("spinImg");
    document.getElementById('d3').classList.add("spinImg");
    const d1 = document.getElementById('d1');
    const d2 = document.getElementById('d2');
    const d3 = document.getElementById('d3');

    function removeSpinClass() {
        d1.classList.remove('spinImg');
        d2.classList.remove('spinImg');
        d3.classList.remove('spinImg');
    }
    d1.addEventListener('animationend', removeSpinClass);
    d2.addEventListener('animationend', removeSpinClass);
    d3.addEventListener('animationend', removeSpinClass);
    const firstNumber = Math.floor(Math.random() * 6) + 1;
    const secondNumber = Math.floor(Math.random() * 6) + 1;
    const thirdNumber = Math.floor(Math.random() * 6) + 1;
    const myRollOne = [firstNumber, secondNumber, thirdNumber];
    const firstDie = "assets/images/d" + firstNumber + ".png";
    const secondDie = "assets/images/d" + secondNumber + ".png";
    const thirdDie = "assets/images/d" + thirdNumber + ".png";
    document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
    document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
    document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);
    document.getElementById('d1').setAttribute("src", firstDie);
    document.getElementById('d2').setAttribute("src", secondDie);
    document.getElementById('d3').setAttribute("src", thirdDie);
    if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
        (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
        (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {
        compareValueOne = 0;
    } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
        (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
        (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
        compareValueOne = 1000;
    } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
        const rollOneValue = myRollOne[0];
        compareValueOne = rollOneValue * 10;
    } else if (myRollOne[0] === myRollOne[1]) {
        const rollOneValue = myRollOne;
        compareValueOne = rollOneValue[2] * 10;
    } else if ((myRollOne[1] === myRollOne[2])) {
        const rollOneValue = myRollOne;
        compareValueOne = rollOneValue[0] * 10;
    } else if ((myRollOne[0] === myRollOne[2])) {
        const rollOneValue = myRollOne;
        compareValueOne = rollOneValue[1] * 10;
    } else {
        p1RollAgain();
    }
    if (compareValueOne === 1000) {
        document.querySelector('h3').innerHTML = 'Automatic Win PLAYER 1';
    } else if (compareValueOne === 0) {
        document.querySelector('h3').innerHTML = 'Automatic Lose PLAYER 1';
    } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
        document.querySelector('h3').innerHTML = 'Tripple';
    } else if (myRollOne[1] === myRollOne[2]) {
        document.querySelector('h3').innerHTML = 'Snake Eyes';
    } else if (myRollOne[1] === myRollOne[0]) {
        document.querySelector('h3').innerHTML = 'Snake Eyes';
    } else if (myRollOne[0] === myRollOne[2]) {
        document.querySelector('h3').innerHTML = 'Snake Eyes';
    } else {
        document.querySelector('h3').innerHTML = 'Snake Eyes';
    }
}

// This function is called when Player 1s roll need to be done again , and it essentially just repeats Player1 function
function p1RollAgain() {
    document.getElementById('d1').classList.add("spinImg");
    document.getElementById('d2').classList.add("spinImg");
    document.getElementById('d3').classList.add("spinImg");
    const firstNumber = Math.floor(Math.random() * 6) + 1;
    const secondNumber = Math.floor(Math.random() * 6) + 1;
    const thirdNumber = Math.floor(Math.random() * 6) + 1;
    const myRollOne = [firstNumber, secondNumber, thirdNumber];
    const firstDie = "assets/images/d" + firstNumber + ".png";
    const secondDie = "assets/images/d" + secondNumber + ".png";
    const thirdDie = "assets/images/d" + thirdNumber + ".png";
    document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
    document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
    document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);
    document.getElementById('d1').setAttribute("src", firstDie);
    document.getElementById('d2').setAttribute("src", secondDie);
    document.getElementById('d3').setAttribute("src", thirdDie);
    if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
        (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
        (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {
        compareValueOne = 0;
    } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
        (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
        (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
        compareValueOne = 1000;
    } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
        compareValueOne = myRollOne[0] * 100;
    } else if (myRollOne[0] === myRollOne[1]) {
        compareValueOne = myRollOne[2] * 10;
    } else if ((myRollOne[1] === myRollOne[2])) {
        compareValueOne = myRollOne[0] * 10;
    } else if ((myRollOne[0] === myRollOne[2])) {
        compareValueOne = myRollOne[1] * 10;
    } else {
        p1RollAgain();
    }
}
playerOneButton.addEventListener("click", function () {
    Player1()
    play();
})