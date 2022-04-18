/**
 * Swordle © 2022 - present | Swordax
 * @swordax.sy
 * Discord Swordax#5756
 *
 * guesser.js is a cheat script created for swordle word guessing game
 * the gusser tool is not to be included in the production version
 */

// Import Words
import { threeWords, fourWords, fiveWords } from "./words.js";

// Guesser Program Class
class Guesser {
    // Constructor Function
    constructor() {
        // Program Variables
        this.pads;
        this.mode;
        this.words;
        this.skips;

        // Filter Variables
        this.exists;
        this.exacts;
        this.inexistant;

        // Activation/Evoking Centre
        const resultScreen = document.querySelector(".result");
        const resetBtn = document.querySelector(".reset-button");
        window.addEventListener("keydown", async (e) => {
            if (e.key == "Enter") {
                if (resultScreen.classList.contains("active")) {
                    resetBtn.click();
                    await this.sleep(500);
                }
                this.evoker();
            }
        });

        // Reset on Settings Change
        document.querySelectorAll(".settings button").forEach((btn) => {
            btn.addEventListener("click", () => {
                this.setReady();
            });
        });

        // Default Initializing
        this.setReady();
    }

    // Initialize Program
    setReady() {
        this.pads = document.querySelectorAll(".pad");
        this.mode = parseInt(
            document
                .querySelector(".settings button.current")
                .getAttribute("data-rows")
        );
        this.words =
            this.mode == 3
                ? threeWords
                : this.mode == 4
                ? fourWords
                : fiveWords;
        this.skips = 0;

        this.exists = [];
        this.exacts = [false, false, false, false, false];
        this.inexistant = [];
    }

    // Sleep Function
    sleep(time) {
        const promise = new Promise((res) => {
            setTimeout(res, time);
        });

        return promise;
    }

    // Generate Random Word
    genWord() {
        // Random Word Selector
        const randNum = Math.floor(Math.random() * this.words.length);
        const randWord = this.words[randNum].toLowerCase();

        // Filters
        const passExists = this.exists.every((char) => {
            return randWord.includes(char);
        });

        let passExacts = true;
        for (let i = 0; i < randWord.length; i++) {
            if (this.exacts[i]) {
                if (this.exacts[i] != randWord[i]) {
                    passExacts = false;
                }
            }
        }

        const passInexistant = this.inexistant.every((char) => {
            return !randWord.includes(char);
        });

        if (!passExacts || !passExists || !passInexistant) {
            // try refunctioning if word didn't pass tests
            try {
                return this.genWord();
            } catch (err) {
                console.error("Guesser couldn't generate word, program reset");
                return this.setReady();
            }
        } else {
            // word passed tests
            return randWord;
        }
    }

    // Main Evoker Function
    async evoker() {
        // block extra calls
        if (Math.pow(this.mode, 2) == this.skips) {
            return this.setReady();
        }

        // generate word
        let word;

        const generated = this.genWord();
        word = generated;

        // try word
        for (let letter of word) {
            const evt = new KeyboardEvent("keydown", { key: letter });
            window.dispatchEvent(evt);
        }

        await this.sleep(1000);

        const allCorrect = this.checkResult();

        this.skips += this.mode;

        if (allCorrect) {
            // success
            return this.setReady();
        } else {
            // retry another word
            return this.evoker();
        }
    }

    // Check Tried Word
    checkResult() {
        let allCorrect = true;

        // fill filters
        for (let i = 0; i < this.mode; i++) {
            const pad = this.pads[i + this.skips];

            if (pad.classList.contains("correct")) {
                this.exacts[i] = pad.innerText;
            } else if (pad.classList.contains("exists")) {
                this.exists.push(pad.innerText);
                allCorrect = false;
            } else {
                this.inexistant.push(pad.innerText);
                allCorrect = false;
            }
        }

        return allCorrect;
    }
}

// Guesser Program Object
const guesser = new Guesser();
