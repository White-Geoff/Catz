//Game
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let start = document.getElementById('start');
let guessesBox = document.getElementById('guesses')
let catBox = 'https://q3ndvw.bn.files.1drv.com/y4m-sNjfcQg-lQ6ifoEJYD78TVxNVv8uzD1xq1StjMHU74qF15lTOFZMHfFK8JOYQ4mTM2YVjnh3W-DGma5lSlGDUBRdAxdMgCTS0wYVQeCBaI6-EPsVsNGBOaurnapaZRhO69umOy6ZuQx8WCUsPvuKhgQ2bwfn7UwJNrwKueaAoe5kUX2xP__m-kt2xABLzt8Zprj_2ifKS_xgeIKdDt0HQ?width=1080&height=1078&cropmode=none';
let openBox = 'https://qnndvw.bn.files.1drv.com/y4m05Dg0k1AJTvyS4TBF2k0jTZsVN1J7LfuGeM0uZ_Rn9UbMLkzBGV56SN9T7_cTX1xyYg0mV6dVmzbjkaLhdPCqAm9ogBxJc-rehlYGvDpeFBipPZcL7UIKow0wB6dSHUyHfjnGV5_5-FwoIkPy_duP67r3oI21CuAiH5n6pSzWzdTMTGE-gz3e2JDSM6d6ccFB9jK8TmHD9Y1NNO0HtVe5A?width=1080&height=1041&cropmode=none';
let closedBox = 'https://rhndvw.bn.files.1drv.com/y4mWhJmOQClBtdq3kzrOAs4--DFubCADn8g6zavVmryxD-_qM34cWb0hLrf0nEDqRyIghxd4oj52L7kD-xOrJNqhiY6jJl9vEj02lhbU-fKNAKQRLYWUuk7xXlPodsjrccXuBMhEK2AWoMD1MXPg7JOSUyP9RsqH9kbrVP4S3xXPKEMdG6d596G8n4x-SoQ1etWecZxRiQLWZjivKFKyEyGog?width=1080&height=1015&cropmode=none';
let numClosedBoxes = 6;
let openBox1;
let openBox2;
let openBox3;
let openBox4;
let openBox5;
let openBox6;
let currentlyPlaying = true;
let guesses = 0;


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
        guessesBox.innerHTML = `${guesses} guess(es)`;
    }
}//box1.onclick

box2.onclick = () => {
    if (!isClicked(box2) && currentlyPlaying) {
        box2.src = openBox2;
        playBox(box2);
        guesses++;
        guessesBox.innerHTML = `${guesses} guess(es)`;
    }
}//box2.onclick

box3.onclick = () => {
    if (!isClicked(box3) && currentlyPlaying) {
        box3.src = openBox3;
        playBox(box3);
        guesses++;
        guessesBox.innerHTML = `${guesses} guess(es)`;
    }
}//box3.onclick

box4.onclick = () => {
    if (!isClicked(box4) && currentlyPlaying) {
        box4.src = openBox4;
        playBox(box4);
        guesses++;
        guessesBox.innerHTML = `${guesses} guess(es)`;
    }
}//box4.onclick

box5.onclick = () => {
    if (!isClicked(box5) && currentlyPlaying) {
        box5.src = openBox5;
        playBox(box5);
        guesses++;
        guessesBox.innerHTML = `${guesses} guess(es)`;
    }
}//box5.onclick

box6.onclick = () => {
    if (!isClicked(box6) && currentlyPlaying) {
        box6.src = openBox6;
        playBox(box6);
        guesses++;
        guessesBox.innerHTML = `${guesses} guess(es)`;
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
    start.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomCatBoxGenerator();
}//startRound

let gameOver = (str) => {
    if (str === 'win') {
        start.innerHTML = 'You found it! Play again?';
        guessesBox.innerHTML = `${guesses} guess(es)`;
    } else {
        start.innerHTML = "Game over! Play again?"
    }
    currentlyPlaying = false;
}//gameOver

startRound();