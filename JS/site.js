//Game
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let start = document.getElementById('start');
let guessesBox = document.getElementById('guesses');
let totalGuessesBox = document.getElementById('guessTotal');
let winsText = document.getElementById('wins');
let average = document.getElementById('average');
let catBox = 'https://bit.ly/3djRC94';
let openBox = 'https://bit.ly/2XLOo7O';
let closedBox = 'https://bit.ly/3ckjhFq';
let numClosedBoxes = 6;
let openBox1;
let openBox2;
let openBox3;
let openBox4;
let openBox5;
let openBox6;
let currentlyPlaying = true;
let guesses = 1;
let guessesPerRound = 0;
let wins = 0;


// Nav
let navClosed = true;

let toggleNav = () => {
    if(navClosed) {
        $('#nav').animate(
            {
               right: 35
            }, 420, 'swing');
    }
    else {
        $('#nav').animate(
            {
               right: -300
            }, 420, 'swing');
    }
    navClosed = !navClosed;
}//toggleNav

// Game 
let isCat = (box) => {
    if (box.src === catBox) {
        return true;
    } else {
        return false;
    }
}// isCat

let isClicked = (box) => {
    if (box.src === closedBox) {
        return false;
    } else {
        return true;
    }
}//isClicked

let playBox = (box) => {
    numClosedBoxes--;
    if (numClosedBoxes === 0) {
        gameOver('win');
    } else if (isCat(box) === true) {
        gameOver('win');
    }
}//playBox

let randomCatBoxGenerator = () => {
    let catBoxGenerator = Math.floor(Math.random() * numClosedBoxes);
    switch(catBoxGenerator) {
        case 0:
            openBox1 = catBox;
            openBox2 = openBox;
            openBox3 = openBox;
            openBox4 = openBox;
            openBox5 = openBox;
            openBox6 = openBox;
            break;
        case 1:
            openBox1 = openBox;
            openBox2 = catBox;
            openBox3 = openBox;
            openBox4 = openBox;
            openBox5 = openBox;
            openBox6 = openBox;
            break;
        case 2:
            openBox1 = openBox;
            openBox2 = openBox;
            openBox3 = catBox;
            openBox4 = openBox;
            openBox5 = openBox;
            openBox6 = openBox;
            break;
        case 3:
            openBox1 = openBox;
            openBox2 = openBox;
            openBox3 = openBox;
            openBox4 = catBox;
            openBox5 = openBox;
            openBox6 = openBox;
            break;
        case 4:
            openBox1 = openBox;
            openBox2 = openBox;
            openBox3 = openBox;
            openBox4 = openBox;
            openBox5 = catBox;
            openBox6 = openBox;
            break;
        case 5:
            openBox1 = openBox;
            openBox2 = openBox;
            openBox3 = openBox;
            openBox4 = openBox;
            openBox5 = openBox;
            openBox6 = catBox;
            break;              
    }         
}//randomCatBoxGenerator

box1.onclick = () => {
    if (!isClicked(box1) && currentlyPlaying) {
        box1.src = openBox1;
        playBox(box1);
        guesses++;
        guessesPerRound++;
        guessesBox.innerHTML = `${guessesPerRound} guess(es)`;
    }
}//box1.onclick

box2.onclick = () => {
    if (!isClicked(box2) && currentlyPlaying) {
        box2.src = openBox2;
        playBox(box2);
        guesses++;
        guessesPerRound++;
        guessesBox.innerHTML = `${guessesPerRound} guess(es)`;
    }
}//box2.onclick

box3.onclick = () => {
    if (!isClicked(box3) && currentlyPlaying) {
        box3.src = openBox3;
        playBox(box3);
        guesses++;
        guessesPerRound++;
        guessesBox.innerHTML = `${guessesPerRound} guess(es)`;
    }
}//box3.onclick

box4.onclick = () => {
    if (!isClicked(box4) && currentlyPlaying) {
        box4.src = openBox4;
        playBox(box4);
        guesses++;
        guessesPerRound++;
        guessesBox.innerHTML = `${guessesPerRound} guess(es)`;
    }
}//box4.onclick

box5.onclick = () => {
    if (!isClicked(box5) && currentlyPlaying) {
        box5.src = openBox5;
        playBox(box5);
        guesses++;
        guessesPerRound++;
        guessesBox.innerHTML = `${guessesPerRound} guess(es)`;
    }
}//box5.onclick

box6.onclick = () => {
    if (!isClicked(box6) && currentlyPlaying) {
        box6.src = openBox6;
        playBox(box6);
        guesses++;
        guessesPerRound++;
        guessesBox.innerHTML = `${guessesPerRound} guess(es)`;
    }
}//box6.onclick

start.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
}//start.onclick

let startRound = () => {
    box1.src = closedBox;
    box2.src = closedBox;
    box3.src = closedBox;
    box4.src = closedBox;
    box5.src = closedBox;
    box6.src = closedBox;
    numClosedBoxes = 6;
    guessesPerRound = 0;
    start.innerHTML = 'Good luck!';
    guessesBox.innerHTML = '';
    currentlyPlaying = true;
    randomCatBoxGenerator();
}//startRound

let gameOver = (str) => {
    if (str === 'win') {
        start.innerHTML = 'You found it! Play again?';
        guessesBox.innerHTML = `${guesses} guess(es)`;
        totalGuessesBox.innerHTML = `You guessed ${guesses} times total`;
        wins++;
        winsText.innerHTML = `You found it ${wins} time(s)`
        average.innerHTML = `Your average is ${Math.round((guesses / wins) * 100) / 100} guesses / win`
    }
    currentlyPlaying = false;
}//gameOver

startRound();