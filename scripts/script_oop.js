/**
 * Swordle © 2022 - present | Swordax
 * @swordax.sy
 * Discord Swordax#5756
 */

// Import Words
import { threeWords, fourWords, fiveWords } from "./words.js";

// Game Class
class Swordle {
    // Constructor Function
    constructor() {
        // Elements
        this.gameBoard = document.querySelector(".game-board");
        this.resultScreen = document.querySelector(".result");
        this.pads;

        this.statusMessageField = document.querySelector("#statusMessage");
        this.wordField = document.querySelector("#wordField");
        this.statusField = document.querySelector("#status");
        this.signField = document.querySelector("#sign");
        this.timeField = document.querySelector("#time");

        // Global Variables
        this.gameRows = parseInt(localStorage.getItem("rows")) || 5;
        this.currentPos = 0;
        this.skips = 0;
        this.locked = false;
        this.started = false;
        this.timer = 0;
        this.timerInterval;
        this.goal;

        // Event Listeners
        window.addEventListener("keydown", (e) => {
            this.keyAction(e);
        });
        document
            .querySelector(".reset-button")
            .addEventListener("click", () => {
                this.resetGame();
            });
        document.querySelectorAll("button").forEach((btn) => {
            btn.addEventListener("keydown", (e) => {
                e.preventDefault();
            });
        });

        // Set Rows
        document.querySelectorAll(".settings button").forEach((btn) => {
            if (parseInt(btn.getAttribute("data-rows")) == this.gameRows) {
                btn.classList.add("current");
            }

            btn.addEventListener("click", (e) => {
                document
                    .querySelector(".settings button.current")
                    .classList.remove("current");
                btn.classList.add("current");

                this.gameRows = parseInt(btn.getAttribute("data-rows"));
                this.insertPads();
                this.resetGame();

                localStorage.setItem("rows", this.gameRows);
            });
        });

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

        // Initial Calls
        this.insertPads();
        this.setGoal();
    }

    // Calculate Time
    calcTime(time) {
        let minutes = 0;

        while (time >= 60) {
            minutes++;
            time -= 60;
        }

        return `${minutes}:${time.toString().padStart(2, "0")}`;
    }

    // Sleep Function
    sleep(time) {
        const promise = new Promise((res) => {
            setTimeout(res, time);
        });

        return promise;
    }

    // Insert Pads Function
    insertPads() {
        const gameBoard = document.querySelector(".game-board");

        while (gameBoard.firstChild) {
            gameBoard.removeChild(gameBoard.firstChild);
        }

        for (let i = 0; i < this.gameRows; i++) {
            const rowElement = document.createElement("div");
            rowElement.classList.add("row");

            for (let i = 0; i < this.gameRows; i++) {
                const padElement = document.createElement("div");
                padElement.classList.add("pad");
                rowElement.appendChild(padElement);
            }

            gameBoard.appendChild(rowElement);
        }

        this.pads = document.querySelectorAll(".pad");
    }

    // Set Goal Function
    setGoal() {
        const words =
            this.gameRows == 3
                ? threeWords
                : this.gameRows == 4
                ? fourWords
                : fiveWords;
        const random = Math.floor(Math.random() * words.length);

        this.goal = words[random].toLowerCase();
    }

    // Key Action Function
    async keyAction(e) {
        if (this.locked) return false;
        if (!this.started) {
            this.timerInterval = setInterval(() => {
                this.timer++;
            }, 1000);
        }
        this.started = true;

        // Valid Keys
        const letters = "qwertyuiopasdfghjklzxcvbnm";
        const validKeys = letters.split("");
        validKeys.push("backspace");

        const eKey = e.key.toLowerCase();
        if (!validKeys.includes(eKey)) return false;

        if (eKey == "backspace") {
            if (this.currentPos == this.skips) return false;

            this.currentPos--;
            this.pads[this.currentPos].innerText = "";
        } else {
            if (this.currentPos - this.gameRows == this.skips) return false;

            this.pads[this.currentPos].innerText = eKey;
            this.currentPos++;
        }

        if (this.currentPos == this.gameRows + this.skips) {
            this.locked = true;

            let word = "";
            for (let i = 0; i < this.gameRows; i++) {
                const letter = this.pads[i + this.skips].innerText;
                word += letter;
            }

            const resume = await this.checkInput(word);
            if (resume) {
                this.skips += this.gameRows;
                this.locked = false;
            }
        }
    }

    // Check Input Function
    async checkInput(word) {
        for (let i = 0; i < this.gameRows; i++) {
            const userLetter = word[i];
            const goalLetter = this.goal[i];

            if (userLetter == goalLetter) {
                this.pads[i + this.skips].classList.add("correct");
            } else if (this.goal.includes(userLetter)) {
                this.pads[i + this.skips].classList.add("exists");
            } else {
                this.pads[i + this.skips].classList.add("incorrect");
            }

            await this.sleep(100);
        }

        const gameStatus = word == this.goal;

        if (this.currentPos == Math.pow(this.gameRows, 2) || gameStatus) {
            this.endGame(gameStatus);
            return false;
        }
        return true;
    }

    // End Game Function
    endGame(status) {
        this.resultScreen.classList.add("active");
        const timeElapsed = this.calcTime(this.timer);

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

        this.statusMessageField.innerText = statusObject.statusMessage;
        this.wordField.innerText = this.goal;
        this.statusField.innerText = statusObject.status;
        this.signField.innerText = statusObject.sign;
        this.timeField.innerText = timeElapsed;
    }

    // Reset Game Function
    resetGame() {
        this.resultScreen.classList.remove("active");

        this.started = false;
        this.locked = false;
        this.currentPos = 0;
        this.skips = 0;
        clearInterval(this.timerInterval);
        this.timer = 0;

        this.setGoal();

        this.pads.forEach((pad) => {
            pad.innerText = "";
            pad.classList.remove("correct", "incorrect", "exists");
        });
    }
}

const swordle = new Swordle();
