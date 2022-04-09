console.log('Working...');
let hard = document.querySelector('.hard');
let easy = document.querySelector('.easy');

let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');
let box6 = document.querySelector('#box6');

let randomStatus = 0;
let randomRed = 0;
let randomGreen = 0;
let randomBlue = 0;
let colorName = "";
let ranfirstQue, ranMotivate;
let easyNum = 0;
let hardNum = 0;
let score = 0;
let a, b = 3;
let answer = "";
let randomBox = Math.ceil(Math.random() * 3);

let winStatus = ['* * * Good Work * * *', '* * * Well Done * * *', '* * * Hmm... Cool * * *', '* * * Playing Well * * *', '* * * So Nice * * *'];
let looseStatus = ['* * * Ups You Loose * * *', '* * * You were so Close * * *', '* * * Oooh You Just Missed * * *', '* * * Ups Wrong Selection * * *', '* * * Nothing To Be Worry * * *'];
let boxName = ['#box1', '#box2', '#box3', '#box4', '#box5', '#box6'];
let motivate = ['Never Give Up', 'Common.., You Can Do It', 'All The Best for This Code', 'Best Of Luck for this Code', 'Put Your All Effort', 'Lets Crack The Color Code', 'What Do You Think, what should be the color ?', `Don't you think, you're Unique`, 'Well I think, you can Do It', 'Wow... you have a Beautifull Mind', 'OMG you cracked that, lets try it'];
let firstQue = ['All the Best for your 1st Color Code', `Common.., Don't fear.., You Can Do It`, 'Put Your All Effort for Your 1st Color Code'];

box1.style.display = "none";
box2.style.display = "none";
box3.style.display = "none";
box4.style.display = "none";
box5.style.display = "none";
box6.style.display = "none";
easy.classList.remove('level-active');
hard.classList.remove('level-active');
document.querySelector('.index').style.display = "none";
document.querySelector('.index2').style.display = "none";
document.querySelector('.restart').style.display = "none";
document.querySelector('.playAgain').style.display = "none";

setInterval(() => {
    ranMotivate = Math.floor(Math.random() * motivate.length);
    ranfirstQue = Math.floor(Math.random() * firstQue.length);
}, 100);

function run() {
    for (a = 1; a <= b; a++) {
        let boxNum = `#box${a}`;
        randomRed = Math.floor(Math.random() * 257);
        randomGreen = Math.floor(Math.random() * 257);
        randomBlue = Math.floor(Math.random() * 257);
        if (a == randomBox) {
            colorName = `RGB(${randomRed}, ${randomGreen}, ${randomBlue})`
            answer = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            console.log(`rgb(${randomRed}, ${randomGreen}, ${randomBlue})`);
            document.querySelector(`.colorCode`).innerHTML = colorName;
        }
        document.querySelector(boxNum).style.background = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    }
}

function randomWinStatusCount() {
    randomStatus = Math.floor(Math.random() * 5);
    document.querySelector('.status-container').innerHTML = `${winStatus[randomStatus]}`;
    console.log(winStatus[randomStatus]);
    console.log("Win Status Number = " + (randomStatus + 1));
}

function randomLooseStatusCount() {
    randomStatus = Math.floor(Math.random() * 5);
    document.querySelector('.status-container').innerHTML = `${looseStatus[randomStatus]}`;
    console.log(looseStatus[randomStatus]);
    console.log("Loose Status Number = " + (randomStatus + 1));
}

function easyMode() {

    randomBox = Math.ceil(Math.random() * 3);
    easyNum = 1;
    hardNum = 0;
    b = 3;
    run();
    easy.classList.add('level-active');
    hard.classList.remove('level-active');
    box1.style.display = "block";
    box2.style.display = "block";
    box3.style.display = "block";
    box4.style.display = "none";
    box5.style.display = "none";
    box6.style.display = "none";
    document.querySelector('.index2').style.display = "block";
    document.querySelector('.status-container').innerHTML = firstQue[ranfirstQue];
    console.log("ranBox = " + randomBox);
}
function hardMode() {
    randomBox = Math.ceil(Math.random() * 6);
    easyNum = 0;
    hardNum = 1;
    b = 6;
    run();
    hard.classList.add('level-active');
    easy.classList.remove('level-active');
    box1.style.display = "block";
    box2.style.display = "block";
    box3.style.display = "block";
    box4.style.display = "block";
    box5.style.display = "block";
    box6.style.display = "block";
    document.querySelector('.index2').style.display = "block";
    document.querySelector('.status-container').innerHTML = firstQue[ranfirstQue];
    console.log("ranBox = " + randomBox);
}

function boxSelectA() {
    document.querySelector('.index').style.display = "block";
    document.querySelector('#box1').style.transform = "scale(1.05)";
    document.querySelector('.ask').innerHTML = "Wanna Play Again..?";
    document.querySelector('body').style.background = `linear-gradient(-45deg,${answer},transparent)`;

    console.log("Box 1 is selected");
    if (randomBox == 1) {
        randomWinStatusCount();
        document.querySelector('.playAgain').style.display = "block";
        document.querySelector('.restart').style.left = "100%";
        document.querySelector('.playAgain').style.left = "0%";
        document.querySelector('.ask').innerHTML = "Press PLAY AGAIN to continue";
        score = score + 1;
    }
    else {
        randomLooseStatusCount();
        document.querySelector('.playAgain').style.display = "none";
        document.querySelector('.restart').style.display = "block";
        document.querySelector('.restart').style.left = "0%";
        document.querySelector('.playAgain').style.left = "100%";
        document.querySelector('.ask').innerHTML = "Press RESTART to continue";
        looseGame();
    }
}
function boxSelectB() {
    document.querySelector('.index').style.display = "block";
    document.querySelector('.restart').style.display = "block";
    document.querySelector('#box2').style.transform = "scale(1.05)";
    document.querySelector('.ask').innerHTML = "Wanna Play Again..?";
    document.querySelector('body').style.background = `linear-gradient(-45deg,${answer},transparent)`;

    console.log("Box 2 is selected");
    if (randomBox == 2) {
        randomWinStatusCount();
        document.querySelector('.playAgain').style.display = "block";
        document.querySelector('.restart').style.left = "100%";
        document.querySelector('.playAgain').style.left = "0%";
        document.querySelector('.ask').innerHTML = "Press PLAY AGAIN to continue";
        score = score + 1;
    }
    else {
        randomLooseStatusCount();
        document.querySelector('.playAgain').style.display = "none";
        document.querySelector('.restart').style.display = "block";
        document.querySelector('.restart').style.left = "0%";
        document.querySelector('.playAgain').style.left = "100%";
        document.querySelector('.ask').innerHTML = "Press RESTART to continue";
        looseGame();
    }
}
function boxSelectC() {
    document.querySelector('.index').style.display = "block";
    document.querySelector('.restart').style.display = "block";
    document.querySelector('#box3').style.transform = "scale(1.05)";
    document.querySelector('.ask').innerHTML = "Wanna Play Again..?";
    document.querySelector('body').style.background = `linear-gradient(-45deg,${answer},transparent)`;

    console.log("Box 3 is selected");
    if (randomBox == 3) {
        randomWinStatusCount();
        document.querySelector('.playAgain').style.display = "block";
        document.querySelector('.restart').style.left = "100%";
        document.querySelector('.playAgain').style.left = "0%";
        document.querySelector('.ask').innerHTML = "Press PLAY AGAIN to continue";
        score = score + 1;
    }
    else {
        randomLooseStatusCount();
        document.querySelector('.playAgain').style.display = "none";
        document.querySelector('.restart').style.display = "block";
        document.querySelector('.restart').style.left = "0%";
        document.querySelector('.playAgain').style.left = "100%";
        document.querySelector('.ask').innerHTML = "Press RESTART to continue";
        looseGame();
    }
}
function boxSelectD() {
    document.querySelector('.index').style.display = "block";
    document.querySelector('.restart').style.display = "block";
    document.querySelector('#box4').style.transform = "scale(1.05)";
    document.querySelector('.ask').innerHTML = "Wanna Play Again..?";
    document.querySelector('body').style.background = `linear-gradient(-45deg,${answer},transparent)`;

    console.log("Box 4 is selected");
    if (randomBox == 4) {
        randomWinStatusCount();
        document.querySelector('.playAgain').style.display = "block";
        document.querySelector('.restart').style.left = "100%";
        document.querySelector('.playAgain').style.left = "0%";
        document.querySelector('.ask').innerHTML = "Press PLAY AGAIN to continue";
        score = score + 1;
    }
    else {
        randomLooseStatusCount();
        document.querySelector('.playAgain').style.display = "none";
        document.querySelector('.restart').style.display = "block";
        document.querySelector('.restart').style.left = "0%";
        document.querySelector('.playAgain').style.left = "100%";
        document.querySelector('.ask').innerHTML = "Press RESTART to continue";
        looseGame();
    }
}
function boxSelectE() {
    document.querySelector('.index').style.display = "block";
    document.querySelector('.restart').style.display = "block";
    document.querySelector('#box5').style.transform = "scale(1.05)";
    document.querySelector('.ask').innerHTML = "Wanna Play Again..?";
    document.querySelector('body').style.background = `linear-gradient(-45deg,${answer},transparent)`;

    console.log("Box 5 is selected");
    if (randomBox == 5) {
        randomWinStatusCount();
        document.querySelector('.playAgain').style.display = "block";
        document.querySelector('.restart').style.left = "100%";
        document.querySelector('.playAgain').style.left = "0%";
        document.querySelector('.ask').innerHTML = "Press PLAY AGAIN to continue";
        score = score + 1;
    }
    else {
        randomLooseStatusCount();
        document.querySelector('.playAgain').style.display = "none";
        document.querySelector('.restart').style.display = "block";
        document.querySelector('.restart').style.left = "0%";
        document.querySelector('.playAgain').style.left = "100%";
        document.querySelector('.ask').innerHTML = "Press RESTART to continue";
        looseGame();
    }
}
function boxSelectF() {
    document.querySelector('.index').style.display = "block";
    document.querySelector('.restart').style.display = "block";
    document.querySelector('#box6').style.transform = "scale(1.05)";
    document.querySelector('body').style.background = `linear-gradient(-45deg,${answer},transparent)`;

    console.log("Box 6 is selected");
    if (randomBox == 6) {
        randomWinStatusCount();
        document.querySelector('.playAgain').style.display = "block";
        document.querySelector('.restart').style.left = "100%";
        document.querySelector('.playAgain').style.left = "0%";
        document.querySelector('.ask').innerHTML = "Press PLAY AGAIN to continue";
        score = score + 1;
    }
    else {
        randomLooseStatusCount();
        document.querySelector('.playAgain').style.display = "none";
        document.querySelector('.restart').style.display = "block";
        document.querySelector('.restart').style.left = "0%";
        document.querySelector('.playAgain').style.left = "100%";
        document.querySelector('.ask').innerHTML = "Press RESTART to continue";
        looseGame();
    }
}
function playAgain() {
    console.log(easyNum + ", " + hardNum);
    if (easyNum == 1) {
        randomBox = Math.ceil(Math.random() * 3);
        b = 3;
        run();
    }
    else {
        randomBox = Math.ceil(Math.random() * 6);
        b = 6;
        run();
    }
    box1.style.transform = "scale(1)";
    box2.style.transform = "scale(1)";
    box3.style.transform = "scale(1)";
    box4.style.transform = "scale(1)";
    box5.style.transform = "scale(1)";
    box6.style.transform = "scale(1)";
    document.querySelector('body').style.background = `linear-gradient(120deg, #fccb909d 0%, #d57eeb 100%)`;
    document.querySelector('.index').style.display = "none";
    document.querySelector('.playAgain').style.display = "none";
    document.querySelector('.status-container').innerHTML = motivate[ranMotivate];
    document.querySelector('.ask').innerHTML = "* * *";
    console.log("ranBox = " + randomBox);
}
function looseGame(){
    for(let i = 1; i<=b ; i++){
        let j = `#box${i}`;
        document.querySelector(j).style.background = colorName;
    }
    document.querySelector('.restart').classList.add('restart-active');
    box1.style.transform = "scale(1)";
    box2.style.transform = "scale(1)";
    box3.style.transform = "scale(1)";
    box4.style.transform = "scale(1)";
    box5.style.transform = "scale(1)";
    box6.style.transform = "scale(1)";
}
function restart() {
    alert(`Your Score is = ${score}`);
    window.location.reload(true);
}
setInterval(() => {
    console.log(score);
    document.querySelector('.score').innerHTML = score;
    if (score >= 1) {
        document.querySelector('.restart').style.display = "block";
    }
}, 100);
easy.addEventListener('click', easyMode);
hard.addEventListener('click', hardMode);
box1.addEventListener('click', boxSelectA);
box2.addEventListener('click', boxSelectB);
box3.addEventListener('click', boxSelectC);
box4.addEventListener('click', boxSelectD);
box5.addEventListener('click', boxSelectE);
box6.addEventListener('click', boxSelectF);
document.querySelector('.playAgain').addEventListener('click', playAgain);
document.querySelector('.restart').addEventListener('click', restart);