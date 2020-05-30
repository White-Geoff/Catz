// let box1 = document.getElementById('box1');
// let box2 = document.getElementById('box2');
// let box3 = document.getElementById('box3');
// let start = document.getElementById('start');

// let closedBox = 'https://rhndvw.bn.files.1drv.com/y4mWhJmOQClBtdq3kzrOAs4--DFubCADn8g6zavVmryxD-_qM34cWb0hLrf0nEDqRyIghxd4oj52L7kD-xOrJNqhiY6jJl9vEj02lhbU-fKNAKQRLYWUuk7xXlPodsjrccXuBMhEK2AWoMD1MXPg7JOSUyP9RsqH9kbrVP4S3xXPKEMdG6d596G8n4x-SoQ1etWecZxRiQLWZjivKFKyEyGog?width=1080&height=1015&cropmode=none';
// let openBox = 'https://qnndvw.bn.files.1drv.com/y4m05Dg0k1AJTvyS4TBF2k0jTZsVN1J7LfuGeM0uZ_Rn9UbMLkzBGV56SN9T7_cTX1xyYg0mV6dVmzbjkaLhdPCqAm9ogBxJc-rehlYGvDpeFBipPZcL7UIKow0wB6dSHUyHfjnGV5_5-FwoIkPy_duP67r3oI21CuAiH5n6pSzWzdTMTGE-gz3e2JDSM6d6ccFB9jK8TmHD9Y1NNO0HtVe5A?width=1080&height=1041&cropmode=none';
// let catBox = 'https://q3ndvw.bn.files.1drv.com/y4m-sNjfcQg-lQ6ifoEJYD78TVxNVv8uzD1xq1StjMHU74qF15lTOFZMHfFK8JOYQ4mTM2YVjnh3W-DGma5lSlGDUBRdAxdMgCTS0wYVQeCBaI6-EPsVsNGBOaurnapaZRhO69umOy6ZuQx8WCUsPvuKhgQ2bwfn7UwJNrwKueaAoe5kUX2xP__m-kt2xABLzt8Zprj_2ifKS_xgeIKdDt0HQ?width=1080&height=1078&cropmode=none';

// let numClosedBoxes = 3;
// let openBox1;
// let openBox2;
// let openBox3;
// let currentlyPlaying = true;

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
}

// Game 

// let isCat = box => {
//     if(box.src === catBox) {
//         return true;
//     } else {
//         return false
//     }
// }// isCat

// let isClicked = box => {
//     if (box.src === closedBox) {
//         return false;
//     } else {
//         return true;
//     }
// }// isClicked

// let playBox = box => {
//     numClosedBoxes--;
//     if (numClosedBoxes === 0) {
//         gameOver('win');
//     } else if (isCat(box) === true) {
//         gameOver('win');
//     }
// }// playBox

// let randomCatBoxGenerator = () => {
//     let chosenBox = Math.floor(Math.random() * numClosedBoxes);
//     if(chosenBox === 0) {
//         openBox1 = catBox;
//         openBox2 = closedBox;
//         openBox3 = closedBox;
//     } if(chosenBox === 1) {
//         openBox1 = closedBox;
//         openBox2 = catBox;
//         openBox3 = closedBox;
//     } else {
//         openBox1 = closedBox;
//         openBox2 = closedBox;
//         openBox3 = catBox;
//     }
// }// randomCatBoxGenerator


// box1.onclick = () => {
//     if (!isClicked(box1) && currentlyPlaying) {
//         box1.src = openBox1;
//         playBox(box1);
//     }
// }// box1.onclick

// box2.onclick = () => {
//     if (!isClicked(box2) && currentlyPlaying) {
//         box2.src = openBox2;
//         playBox(box2);
//     }
// }// box2.onclick

// box3.onclick = () => {
//     if (!isClicked(box3) && currentlyPlaying) {
//         box3.src = openBox3;
//         playBox(box3);
//     }
// }// box3.onclick

// start.onclick = () => {
//     if (!currentlyPlaying) {
//         startRound();
//     }
// }

// let startRound = () => {
//     box1.src = closedBox;
//     box2.src = closedBox;
//     box3.src = closedBox;
//     numClosedDoors = 3;
//     start.innerHTML = 'Play!';
//     currentlyPlaying = true;
//     randomCatBoxGenerator();
// }// startRound

// let gameOver = (str) => {
//     if (str === 'win') {
//         start.innerHTML = 'You win! Play again?';
//     } else {
//         startinnerHTML = "Game over! Play again?"
//     }
//     currentlyPlaying = false;
// }// gameOver

// startRound();

// Game Take 2
let doorImage1 = document.getElementById('box1');
let doorImage2 = document.getElementById('box2');
let doorImage3 = document.getElementById('box3');
let startButton = document.getElementById('start');

let botDoorPath = 'https://q3ndvw.bn.files.1drv.com/y4m-sNjfcQg-lQ6ifoEJYD78TVxNVv8uzD1xq1StjMHU74qF15lTOFZMHfFK8JOYQ4mTM2YVjnh3W-DGma5lSlGDUBRdAxdMgCTS0wYVQeCBaI6-EPsVsNGBOaurnapaZRhO69umOy6ZuQx8WCUsPvuKhgQ2bwfn7UwJNrwKueaAoe5kUX2xP__m-kt2xABLzt8Zprj_2ifKS_xgeIKdDt0HQ?width=1080&height=1078&cropmode=none';
let beachDoorPath = 'https://qnndvw.bn.files.1drv.com/y4m05Dg0k1AJTvyS4TBF2k0jTZsVN1J7LfuGeM0uZ_Rn9UbMLkzBGV56SN9T7_cTX1xyYg0mV6dVmzbjkaLhdPCqAm9ogBxJc-rehlYGvDpeFBipPZcL7UIKow0wB6dSHUyHfjnGV5_5-FwoIkPy_duP67r3oI21CuAiH5n6pSzWzdTMTGE-gz3e2JDSM6d6ccFB9jK8TmHD9Y1NNO0HtVe5A?width=1080&height=1041&cropmode=none';
let spaceDoorPath = 'https://qnndvw.bn.files.1drv.com/y4m05Dg0k1AJTvyS4TBF2k0jTZsVN1J7LfuGeM0uZ_Rn9UbMLkzBGV56SN9T7_cTX1xyYg0mV6dVmzbjkaLhdPCqAm9ogBxJc-rehlYGvDpeFBipPZcL7UIKow0wB6dSHUyHfjnGV5_5-FwoIkPy_duP67r3oI21CuAiH5n6pSzWzdTMTGE-gz3e2JDSM6d6ccFB9jK8TmHD9Y1NNO0HtVe5A?width=1080&height=1041&cropmode=none';
let closedDoorPath = 'https://rhndvw.bn.files.1drv.com/y4mWhJmOQClBtdq3kzrOAs4--DFubCADn8g6zavVmryxD-_qM34cWb0hLrf0nEDqRyIghxd4oj52L7kD-xOrJNqhiY6jJl9vEj02lhbU-fKNAKQRLYWUuk7xXlPodsjrccXuBMhEK2AWoMD1MXPg7JOSUyP9RsqH9kbrVP4S3xXPKEMdG6d596G8n4x-SoQ1etWecZxRiQLWZjivKFKyEyGog?width=1080&height=1015&cropmode=none';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
};

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door) === true) {
        gameOver('win');
    }
};

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
};

doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};

startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
}

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

const gameOver = (str) => {
    if (str === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = "Game over! Play again?"
    }
    currentlyPlaying = false;
}







startRound();