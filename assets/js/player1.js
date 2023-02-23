let one;
let two;
let compareValueOne = 1;
let compareValueTwo = 2;




function spin() {
    console.log("SPINNING P1");
    console.log(document.getElementById('img1').classList);
    document.getElementById('img1').classList.add("spinImg");
    console.log(document.getElementById('img1').classList);
    document.getElementById('img2').className = 'spinImg';
    document.getElementById('img3').className = 'spinImg';


}

let restartBtn = document.getElementById("restart");

restartBtn.addEventListener("click", function () {
    window.location.reload();
});




function removeSpinClass() {
    snake.classList.remove('spinImg');
}



function play() {
    var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    audio.play();
}





function p1RollAgain() {
    //     document.getElementById('d1').classList.add("spinImg");
    //     document.getElementById('d2').className = 'spinImg';
    //     document.getElementById('d3').className = 'spinImg';

    //     const firstNumber = Math.floor(Math.random() * 6) + 1;
    //     const secondNumber = Math.floor(Math.random() * 6) + 1;
    //     const thirdNumber = Math.floor(Math.random() * 6) + 1;

    //     const myRollOne = [firstNumber, secondNumber, thirdNumber];

    //     function removeSpinClass() {

    //         d1.classList.remove('spinImg');
    //         d2.classList.remove('spinImg');
    //         d3.classList.remove('spinImg');
    //     }

    //     d1.addEventListener('animationend', removeSpinClass);
    //     d2.addEventListener('animationend', removeSpinClass);
    //     d3.addEventListener('animationend', removeSpinClass);


    //     const firstDie = "assets/images/d" + firstNumber + ".png";
    //     const secondDie = "assets/images/d" + secondNumber + ".png";
    //     const thirdDie = "assets/images/d" + thirdNumber + ".png";

    //     document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
    //     document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
    //     document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);

    //     document.getElementById('d1').setAttribute("src", firstDie);
    //     document.getElementById('d2').setAttribute("src", secondDie);
    //     document.getElementById('d3').setAttribute("src", thirdDie);

    //     if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
    //         (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
    //         (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {

    //         compareValueOne = 0;
    //         console.log("I. automatic lose// first condition " + compareValueOne);


    //     } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
    //         (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
    //         (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {

    //         compareValueOne = 1000;
    //         console.log("I. automatic win // second conditon " + compareValueOne);

    //     } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {



    //         compareValueOne = myRollOne[0] * 10;

    //         console.log("I.tripples //third conditon " + compareValueOne);


    //     } else if (myRollOne[0] === myRollOne[1]) {




    //         compareValueOne = myRollOne[2] * 10;
    //         console.log("I. snake eyes//fourth conditon " + compareValueOne);

    //     } else if ((myRollOne[1] === myRollOne[2])) {


    //         compareValueOne = myRollOne[0] * 10;
    //         console.log("I. snake eyes//fifth conditon " + compareValueOne);

    //     } else if ((myRollOne[0] === myRollOne[2])) {


    //         compareValueOne = myRollOne[1] * 10;
    //         console.log("I. snake eyes//sixth conditon " + compareValueOne);


    //     } else {


    //         p1RollAgain();

    //     }
    // }




    // function rollSpinKompareLoopPlayer1() {


    //     document.getElementById('d1').classList.add("spinImg");
    //     document.getElementById('d2').className = 'spinImg';
    //     document.getElementById('d3').className = 'spinImg';




    //     const d1 = document.getElementById('d1');
    //     const d2 = document.getElementById('d2');
    //     const d3 = document.getElementById('d3');



    //     function removeSpinClass() {

    //         d1.classList.remove('spinImg');
    //         d2.classList.remove('spinImg');
    //         d3.classList.remove('spinImg');




    //     }


    //     d1.addEventListener('animationend', removeSpinClass);
    //     d2.addEventListener('animationend', removeSpinClass);
    //     d3.addEventListener('animationend', removeSpinClass);




    //     const firstNumber = Math.floor(Math.random() * 6) + 1;
    //     const secondNumber = Math.floor(Math.random() * 6) + 1;
    //     const thirdNumber = Math.floor(Math.random() * 6) + 1;



    //     const myRollOne = [firstNumber, secondNumber, thirdNumber];







    //     const firstDie = "assets/images/d" + firstNumber + ".png";
    //     const secondDie = "assets/images/d" + secondNumber + ".png";
    //     const thirdDie = "assets/images/d" + thirdNumber + ".png";



    //     document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
    //     document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
    //     document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);



    //     document.getElementById('d1').setAttribute("src", firstDie);
    //     document.getElementById('d2').setAttribute("src", secondDie);
    //     document.getElementById('d3').setAttribute("src", thirdDie);



    //     if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
    //         (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
    //         (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {


    //         compareValueOne = 0;
    //         console.log("I. automatic lose// first condition " + compareValueOne);


    //     } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
    //         (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
    //         (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {

    //         compareValueOne = 100;
    //         console.log("I. automatic win // second conditon " + compareValueOne);

    //     } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {

    //         const rollOneValue = myRollOne[0];

    //         compareValueOne = rollOneValue;
    //         console.log("I.tripples //third conditon " + compareValueOne);


    //     } else if (myRollOne[0] === myRollOne[1]) {



    //         compareValueOne = myRollOne[2];
    //         console.log("I. snake eyes//fourth conditon " + compareValueOne);

    //     } else if ((myRollOne[1] === myRollOne[2])) {

    //         compareValueOne = myRollOne[0];
    //         console.log("I. snake eyes//fifth conditon " + compareValueOne);

    //     } else if ((myRollOne[0] === myRollOne[2])) {

    //         compareValueOne = myRollOne[1];
    //         console.log("I. snake eyes//sixth conditon " + compareValueOne);


    //     } else {

    //         p1RollAgain();



    //     }













    //     if (compareValueOne < compareValueTwo) {
    //         console.log("Player Two Wins");

    //     } else if (compareValueOne > compareValueTwo) {
    //         console.log("Player One Wins");

    //     } else if (compareValueOne === 100) {
    //         console.log("automatic win player 1");
    //     } else if (compareValueOne === 0) {
    //         console.log("automatic lose player 1");

    //     } else if (compareValueTwo === 0) {
    //         console.log("automatic lose player 2");

    //     } else if (compareValueTwo === 100) {
    //         console.log("automatic lose player 2");
    //     } else if (compareValueOne === compareValueTwo) {
    //         console.log("equals , so roll again ");

    //     } else {
    //         console.log("no idea what case this is");






    //     }






}


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
        console.log("I. automatic lose// first condition " + compareValueOne);


    } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
        (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
        (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {

        compareValueOne = 1000;
        console.log("I. automatic win // second conditon " + compareValueOne);

    } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {

        const rollOneValue = myRollOne[0];
        compareValueOne = rollOneValue * 10;

        console.log("I.tripples //third conditon " + compareValueOne);


    } else if (myRollOne[0] === myRollOne[1]) {

        const rollOneValue = myRollOne;


        compareValueOne = rollOneValue[2] * 10;
        console.log("I. snake eyes//fourth conditon " + compareValueOne);

    } else if ((myRollOne[1] === myRollOne[2])) {
        const rollOneValue = myRollOne;

        compareValueOne = rollOneValue[0] * 10;
        console.log("I. snake eyes//fifth conditon " + compareValueOne);

    } else if ((myRollOne[0] === myRollOne[2])) {
        const rollOneValue = myRollOne;

        compareValueOne = rollOneValue[1] * 10;
        console.log("I. snake eyes//sixth conditon " + compareValueOne);


    } else {

        p1RollAgain();



    }




    if (compareValueOne === 1000) {
        console.log("automatic win player 1");
        document.querySelector('h3').innerHTML = 'Automatic Win PLAYER 1';


    } else if (compareValueOne === 0) {
        console.log("automatic lose player 1");
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
        console.log("final case");
        document.querySelector('h3').innerHTML = 'Snake Eyes';



    }


}