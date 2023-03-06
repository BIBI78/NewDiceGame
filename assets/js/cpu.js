// These are the varibles I use in my JS , I set them globally.
const cpuButton = document.getElementById("cpu-button")
let compareValueOne = 1;
let compareValueTwo = 2;
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
// Same as the Player1 function but does it for the second set of die
function Player2() {
    document.getElementById('d4').classList.add("spinImg");
    document.getElementById('d5').classList.add("spinImg");
    document.getElementById('d6').classList.add("spinImg");
    const d4 = document.getElementById('d4');
    const d5 = document.getElementById('d5');
    const d6 = document.getElementById('d6');

    function removeSpinClass() {
        d4.classList.remove('spinImg');
        d5.classList.remove('spinImg');
        d6.classList.remove('spinImg');
    }
    d4.addEventListener('animationend', removeSpinClass);
    d5.addEventListener('animationend', removeSpinClass);
    d6.addEventListener('animationend', removeSpinClass);
    const fourthNumber = Math.floor(Math.random() * 6) + 1;
    const fifthNumber = Math.floor(Math.random() * 6) + 1;
    const sixthNumber = Math.floor(Math.random() * 6) + 1;
    const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];
    const fourthDie = "assets/images/d" + fourthNumber + ".png";
    const fifthDie = "assets/images/d" + fifthNumber + ".png";
    const sixthDie = "assets/images/d" + sixthNumber + ".png";
    document.getElementsByTagName('img')[3].setAttribute("src", fourthDie);
    document.getElementsByTagName('img')[4].setAttribute("src", fifthDie);
    document.getElementsByTagName('img')[5].setAttribute("src", sixthDie);
    document.getElementById('d4').setAttribute("src", fourthDie);
    document.getElementById('d5').setAttribute("src", fifthDie);
    document.getElementById('d6').setAttribute("src", sixthDie);
    if ((myRollTwo[0] === 1 || myRollTwo[0] === 2 || myRollTwo[0] === 3) && (myRollTwo[0] !== myRollTwo[1]) &&
        (myRollTwo[1] === 1 || myRollTwo[1] === 2 || myRollTwo[1] === 3) && (myRollTwo[1] !== myRollTwo[2]) &&
        (myRollTwo[2] === 1 || myRollTwo[2] === 2 || myRollTwo[2] === 3) && (myRollTwo[2] !== myRollTwo[0])) {
        compareValueTwo = 0;
    } else if ((myRollTwo[0] === 4 || myRollTwo[0] === 5 || myRollTwo[0] === 6) && (myRollTwo[0] !== myRollTwo[1]) &&
        (myRollTwo[1] === 4 || myRollTwo[1] === 5 || myRollTwo[1] === 6) && (myRollTwo[1] !== myRollTwo[2]) &&
        (myRollTwo[2] === 4 || myRollTwo[2] === 5 || myRollTwo[2] === 6) && (myRollTwo[2] !== myRollTwo[0])) {
        compareValueTwo = 1000;
    } else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]) {
        compareValueTwo = myRollTwo[0] * 3;
    } else if (myRollTwo[0] === myRollTwo[1]) {
        compareValueTwo = myRollTwo[2] * 10;
    } else if ((myRollTwo[1] === myRollTwo[2])) {
        compareValueTwo = myRollTwo[0] * 10;
    } else if ((myRollTwo[0] === myRollTwo[2])) {
        compareValueTwo = myRollTwo[1] * 10;
    } else {
        p2RollAgain();
    }
    if (compareValueTwo === 1000) {
        document.querySelector('h3').innerHTML = 'Automatic Win PLAYER 2';
    } else if (compareValueTwo === 0) {
        document.querySelector('h3').innerHTML = 'Automatic Lose PLAYER 2';
    } else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]) {
        document.querySelector('h3').innerHTML = 'Tripple';
    } else if (myRollTwo[1] === myRollTwo[2]) {
        document.querySelector('h3').innerHTML = 'Snake Eyes';
    } else if (myRollTwo[1] === myRollTwo[0]) {
        document.querySelector('h3').innerHTML = 'Snake Eyes';
    } else if (myRollTwo[0] === myRollTwo[2]) {
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

    function removeSpinClass() {

    }
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
// This function is called when Player 2s roll need to be done again , and it essentially just repeats Player2 function
function p2RollAgain() {
    document.getElementById('d4').classList.add("spinImg");
    document.getElementById('d5').classList.add("spinImg");
    document.getElementById('d6').classList.add("spinImg");
    const fourthNumber = Math.floor(Math.random() * 6) + 1;
    const fifthNumber = Math.floor(Math.random() * 6) + 1;
    const sixthNumber = Math.floor(Math.random() * 6) + 1;
    const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];

    function removeSpinClass() {

    }
    const fourthDie = "assets/images/d" + fourthNumber + ".png";
    const fifthDie = "assets/images/d" + fifthNumber + ".png";
    const sixthDie = "assets/images/d" + sixthNumber + ".png";
    document.getElementsByTagName('img')[3].setAttribute("src", fourthDie);
    document.getElementsByTagName('img')[4].setAttribute("src", fifthDie);
    document.getElementsByTagName('img')[5].setAttribute("src", sixthDie);
    document.getElementById('d4').setAttribute("src", fourthDie);
    document.getElementById('d5').setAttribute("src", fifthDie);
    document.getElementById('d6').setAttribute("src", sixthDie);
    if ((myRollTwo[0] === 1 || myRollTwo[0] === 2 || myRollTwo[0] === 3) && (myRollTwo[0] !== myRollTwo[1]) &&
        (myRollTwo[1] === 1 || myRollTwo[1] === 2 || myRollTwo[1] === 3) && (myRollTwo[1] !== myRollTwo[2]) &&
        (myRollTwo[2] === 1 || myRollTwo[2] === 2 || myRollTwo[2] === 3) && (myRollTwo[2] !== myRollTwo[0])) {
        compareValueTwo = 0;
    } else if ((myRollTwo[0] === 4 || myRollTwo[0] === 5 || myRollTwo[0] === 6) && (myRollTwo[0] !== myRollTwo[1]) &&
        (myRollTwo[1] === 4 || myRollTwo[1] === 5 || myRollTwo[1] === 6) && (myRollTwo[1] !== myRollTwo[2]) &&
        (myRollTwo[2] === 4 || myRollTwo[2] === 5 || myRollTwo[2] === 6) && (myRollTwo[2] !== myRollTwo[0])) {
        compareValueTwo = 1000;
    } else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]) {
        compareValueTwo = myRollTwo[0] * 100;
    } else if (myRollTwo[0] === myRollTwo[1]) {
        compareValueTwo = myRollTwo[2] * 10;
    } else if ((myRollTwo[1] === myRollTwo[2])) {
        compareValueTwo = myRollTwo[0] * 10;
    } else if ((myRollTwo[0] === myRollTwo[2])) {
        compareValueTwo = myRollTwo[1] * 10;
    } else {
        p2RollAgain();
    }
}
// This function I use mainly for CPU page , it rolls and rerolls both die and compares them.
function Kompare() {
    document.getElementById('d1').classList.add("spinImg");
    document.getElementById('d2').classList.add("spinImg");
    document.getElementById('d3').classList.add("spinImg");
    document.getElementById('d4').classList.add("spinImg");
    document.getElementById('d5').classList.add("spinImg");
    document.getElementById('d6').classList.add("spinImg");
    const d1 = document.getElementById('d1');
    const d2 = document.getElementById('d2');
    const d3 = document.getElementById('d3');
    const d4 = document.getElementById('d4');
    const d5 = document.getElementById('d5');
    const d6 = document.getElementById('d6');

    function removeSpinClass() {
        d1.classList.remove('spinImg');
        d2.classList.remove('spinImg');
        d3.classList.remove('spinImg');
        d4.classList.remove('spinImg');
        d5.classList.remove('spinImg');
        d6.classList.remove('spinImg');
    }
    d1.addEventListener('animationend', removeSpinClass);
    d2.addEventListener('animationend', removeSpinClass);
    d3.addEventListener('animationend', removeSpinClass);
    d4.addEventListener('animationend', removeSpinClass);
    d5.addEventListener('animationend', removeSpinClass);
    d6.addEventListener('animationend', removeSpinClass);
    const firstNumber = Math.floor(Math.random() * 6) + 1;
    const secondNumber = Math.floor(Math.random() * 6) + 1;
    const thirdNumber = Math.floor(Math.random() * 6) + 1;
    const fourthNumber = Math.floor(Math.random() * 6) + 1;
    const fifthNumber = Math.floor(Math.random() * 6) + 1;
    const sixthNumber = Math.floor(Math.random() * 6) + 1;
    const myRollOne = [firstNumber, secondNumber, thirdNumber];
    const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];
    const firstDie = "assets/images/d" + firstNumber + ".png";
    const secondDie = "assets/images/d" + secondNumber + ".png";
    const thirdDie = "assets/images/d" + thirdNumber + ".png";
    const fourthDie = "assets/images/d" + fourthNumber + ".png";
    const fifthDie = "assets/images/d" + fifthNumber + ".png";
    const sixthDie = "assets/images/d" + sixthNumber + ".png";
    document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
    document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
    document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);
    document.getElementsByTagName('img')[3].setAttribute("src", fourthDie);
    document.getElementsByTagName('img')[4].setAttribute("src", fifthDie);
    document.getElementsByTagName('img')[5].setAttribute("src", sixthDie);
    document.getElementById('d1').setAttribute("src", firstDie);
    document.getElementById('d2').setAttribute("src", secondDie);
    document.getElementById('d3').setAttribute("src", thirdDie);
    document.getElementById('d4').setAttribute("src", fourthDie);
    document.getElementById('d5').setAttribute("src", fifthDie);
    document.getElementById('d6').setAttribute("src", sixthDie);
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
        compareValueOne = rollOneValue * 100;
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
    if ((myRollTwo[0] === 1 || myRollTwo[0] === 2 || myRollTwo[0] === 3) && (myRollTwo[0] !== myRollTwo[1]) &&
        (myRollTwo[1] === 1 || myRollTwo[1] === 2 || myRollTwo[1] === 3) && (myRollTwo[1] !== myRollTwo[2]) &&
        (myRollTwo[2] === 1 || myRollTwo[2] === 2 || myRollTwo[2] === 3) && (myRollTwo[2] !== myRollTwo[0])) {
        compareValueTwo = 0;
    } else if ((myRollTwo[0] === 4 || myRollTwo[0] === 5 || myRollTwo[0] === 6) && (myRollTwo[0] !== myRollTwo[1]) &&
        (myRollTwo[1] === 4 || myRollTwo[1] === 5 || myRollTwo[1] === 6) && (myRollTwo[1] !== myRollTwo[2]) &&
        (myRollTwo[2] === 4 || myRollTwo[2] === 5 || myRollTwo[2] === 6) && (myRollTwo[2] !== myRollTwo[0])) {
        compareValueTwo = 1000;
    } else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]) {
        compareValueTwo = myRollTwo[0] * 100;
    } else if (myRollTwo[0] === myRollTwo[1]) {
        compareValueTwo = myRollTwo[2] * 10;
    } else if ((myRollTwo[1] === myRollTwo[2])) {
        compareValueTwo = myRollTwo[0] * 10;
    } else if ((myRollTwo[0] === myRollTwo[2])) {
        compareValueTwo = myRollTwo[1] * 10;
    } else {
        p2RollAgain();
    }
    if (compareValueOne < compareValueTwo) {
        document.querySelector('h3').innerHTML = 'CPU Wins';
    } else if (compareValueOne > compareValueTwo) {
        document.querySelector('h3').innerHTML = 'Player One Wins';
    } else if (compareValueOne === 100) {
        document.querySelector('h3').innerHTML = 'Automatic Win PLAYER 1';
    } else if (compareValueOne === 0) {
        document.querySelector('h3').innerHTML = 'Automatic Lose PLAYER 1';
    } else if (compareValueTwo === 0) {
        document.querySelector('h3').innerHTML = 'Automatic CPU';
    } else if (compareValueTwo === 100) {
        document.querySelector('h3').innerHTML = 'Automatic CPU';
    } else if (compareValueOne === compareValueTwo) {
        document.querySelector('h3').innerHTML = 'Roll Again';
    } else {}
}
// This Kompare is similar to the previous Kompare function but it doesnt roll any die it ONLY KOMPARES Player1 and Player2 rolls
// This function is only user for the Player2 page
function KomparePlayer2() {
    if (compareValueOne < compareValueTwo) {
        document.querySelector('h3').innerHTML = 'Player Two Wins';
    } else if (compareValueOne > compareValueTwo) {
        document.querySelector('h3').innerHTML = 'Player One Wins';
    } else if (compareValueOne === 100) {
        document.querySelector('h3').innerHTML = 'Automatic Win PLAYER 1';
    } else if (compareValueOne === 0) {
        document.querySelector('h3').innerHTML = 'Automatic Lose PLAYER 1';
    } else if (compareValueTwo === 0) {
        document.querySelector('h3').innerHTML = 'Automatic Lose PLAYER 2';
    } else if (compareValueTwo === 100) {
        document.querySelector('h3').innerHTML = 'Automatic Win PLAYER 2';
    } else if (compareValueOne === compareValueTwo) {
        document.querySelector('h3').innerHTML = 'Roll Again';
    } else {}
}

cpuButton.addEventListener("click", function () {
    Kompare();
    play();
})