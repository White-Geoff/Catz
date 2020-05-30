//Game
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let start = document.getElementById('start');
let guessesBox = document.getElementById('guesses')
let catBox = 'https://q3ndvw.bn.files.1drv.com/y4m-sNjfcQg-lQ6ifoEJYD78TVxNVv8uzD1xq1StjMHU74qF15lTOFZMHfFK8JOYQ4mTM2YVjnh3W-DGma5lSlGDUBRdAxdMgCTS0wYVQeCBaI6-EPsVsNGBOaurnapaZRhO69umOy6ZuQx8WCUsPvuKhgQ2bwfn7UwJNrwKueaAoe5kUX2xP__m-kt2xABLzt8Zprj_2ifKS_xgeIKdDt0HQ?width=1080&height=1078&cropmode=none';
let openBox = 'https://qnndvw.bn.files.1drv.com/y4m05Dg0k1AJTvyS4TBF2k0jTZsVN1J7LfuGeM0uZ_Rn9UbMLkzBGV56SN9T7_cTX1xyYg0mV6dVmzbjkaLhdPCqAm9ogBxJc-rehlYGvDpeFBipPZcL7UIKow0wB6dSHUyHfjnGV5_5-FwoIkPy_duP67r3oI21CuAiH5n6pSzWzdTMTGE-gz3e2JDSM6d6ccFB9jK8TmHD9Y1NNO0HtVe5A?width=1080&height=1041&cropmode=none';
let closedBox = 'https://rhndvw.bn.files.1drv.com/y4mWhJmOQClBtdq3kzrOAs4--DFubCADn8g6zavVmryxD-_qM34cWb0hLrf0nEDqRyIghxd4oj52L7kD-xOrJNqhiY6jJl9vEj02lhbU-fKNAKQRLYWUuk7xXlPodsjrccXuBMhEK2AWoMD1MXPg7JOSUyP9RsqH9kbrVP4S3xXPKEMdG6d596G8n4x-SoQ1etWecZxRiQLWZjivKFKyEyGog?width=1080&height=1015&cropmode=none';
let numClosedBoxes = 3;
let openBox1;
let openBox2;
let openBox3;
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
    if (catBoxGenerator === 0) {
        openBox1 = catBox;
        openBox2 = openBox;
        openBox3 = openBox;
    } else if (catBoxGenerator === 1) {
        openBox2 = catBox;
        openBox3 = openBox;
        openBox1 = openBox;
    } else {
        openBox3 = catBox;
        openBox1 = openBox;
        openBox2 = openBox;
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

start.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
}//start.onclick

let startRound = () => {
    box1.src = closedBox;
    box2.src = closedBox;
    box3.src = closedBox;
    numClosedBoxes = 3;
    guesses = 0;
    start.innerHTML = 'Good luck!';
    guessesBox.innerHTML = '';
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