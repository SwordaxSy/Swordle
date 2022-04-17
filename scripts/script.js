// Import Words
import { threeWords, fourWords, fiveWords } from "./words.js";

// Selectors
const gameBoard = document.querySelector(".game-board");
const resultScreen = document.querySelector(".result");
let pads;

const statusMessageField = document.querySelector("#statusMessage");
const wordField = document.querySelector("#wordField");
const statusField = document.querySelector("#status");
const signField = document.querySelector("#sign");
const timeField = document.querySelector("#time");

const settingsButtons = document.querySelectorAll(".settings button");
const resetButton = document.querySelector(".reset-button");

// Game Variables
let gameRows = parseInt(localStorage.getItem("rows")) || 5;
let currentPos = 0;
let skips = 0;
let locked = false;
let started = false;
let timer = 0;
let timerInterval;
let goal;

// Valid Keys
const letters = "qwertyuiopasdfghjklzxcvbnm";
const validKeys = letters.split("");
validKeys.push("backspace");

// Event Listeners
window.addEventListener("keydown", (e) => keyAction(e));
resetButton.addEventListener("click", resetGame);
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("keydown", (e) => {
        e.preventDefault();
    });
});

// Calculate Time
function calcTime(time) {
    let minutes = 0;

    while (time >= 60) {
        minutes++;
        time -= 60;
    }

    return `${minutes}:${time.toString().padStart(2, "0")}`;
}

// Sleep Function
function sleep(time) {
    const promise = new Promise((res) => {
        setTimeout(res, time);
    });

    return promise;
}

// Insert Pads
function insertPads() {
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    }

    for (let i = 0; i < gameRows; i++) {
        const rowElement = document.createElement("div");
        rowElement.classList.add("row");

        for (let i = 0; i < gameRows; i++) {
            const padElement = document.createElement("div");
            padElement.classList.add("pad");
            rowElement.appendChild(padElement);
        }

        gameBoard.appendChild(rowElement);
    }

    pads = document.querySelectorAll(".pad");
}
insertPads();

// Game Settings Buttons
settingsButtons.forEach((btn) => {
    if (parseInt(btn.getAttribute("data-rows")) == gameRows) {
        btn.classList.add("current");
    }
    btn.addEventListener("click", (e) => {
        document
            .querySelector(".settings button.current")
            .classList.remove("current");
        btn.classList.add("current");

        gameRows = parseInt(btn.getAttribute("data-rows"));
        insertPads();
        resetGame();

        localStorage.setItem("rows", gameRows);
    });
});

// Set Goal Word
function setGoal() {
    const words =
        gameRows == 3 ? threeWords : gameRows == 4 ? fourWords : fiveWords;
    const random = Math.floor(Math.random() * words.length);
    goal = words[random].toLowerCase();
}
setGoal();

// Keydown Action
async function keyAction(e) {
    if (locked) return false;
    if (!started) {
        timerInterval = setInterval(() => {
            timer++;
        }, 1000);
    }
    started = true;

    const eKey = e.key.toLowerCase();
    if (!validKeys.includes(eKey)) return false;

    if (eKey == "backspace") {
        if (currentPos == skips) return false;

        currentPos--;
        pads[currentPos].innerText = "";
    } else {
        if (currentPos - gameRows == skips) return false;

        pads[currentPos].innerText = eKey;
        currentPos++;
    }

    if (currentPos == gameRows + skips) {
        locked = true;

        let word = "";
        for (let i = 0; i < gameRows; i++) {
            const letter = pads[i + skips].innerText;
            word += letter;
        }

        const resume = await checkInput(word);
        if (resume) {
            skips += gameRows;
            locked = false;
        }
    }
}

// Check Input
async function checkInput(word) {
    for (let i = 0; i < gameRows; i++) {
        const userLetter = word[i];
        const goalLetter = goal[i];

        if (userLetter == goalLetter) {
            pads[i + skips].classList.add("correct");
        } else if (goal.includes(userLetter)) {
            pads[i + skips].classList.add("exists");
        } else {
            pads[i + skips].classList.add("incorrect");
        }

        await sleep(100);
    }

    const gameStatus = word == goal;

    if (currentPos == Math.pow(gameRows, 2) || gameStatus) {
        endGame(gameStatus);
        return false;
    }
    return true;
}

// End Game
function endGame(status) {
    resultScreen.classList.add("active");
    const timeElapsed = calcTime(timer);

    const won = {
        statusMessage: "Congratulations",
        status: "won",
        sign: "!",
    };
    const lost = {
        statusMessage: "Oh no",
        status: "lost",
        sign: " :(",
    };
    const statusObject = status ? won : lost;

    statusMessageField.innerText = statusObject.statusMessage;
    wordField.innerText = goal;
    statusField.innerText = statusObject.status;
    signField.innerText = statusObject.sign;
    timeField.innerText = timeElapsed;
}

// Reset Game
function resetGame() {
    resultScreen.classList.remove("active");

    started = false;
    locked = false;
    currentPos = 0;
    skips = 0;
    clearInterval(timerInterval);
    timer = 0;

    setGoal();

    pads.forEach((pad) => {
        pad.innerText = "";
        pad.classList.remove("correct", "incorrect", "exists");
    });
}

// Dynamic Browser Tab
const title = document.querySelector("title");
const name = "Swordle";
let currentLetter = 0;
setInterval(() => {
    if (title.innerText == name) {
        title.innerText = "";
        currentLetter = 0;
    }
    title.innerText += name[currentLetter];
    currentLetter++;
}, 400);
