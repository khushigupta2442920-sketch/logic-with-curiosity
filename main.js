import { startMindTrap } from "./games/mindTrap.js";
import { startFindLie } from "./games/findLie.js";
import { startWhatChanged } from "./games/whatChanged.js";
import { startEscapeRoom } from "./games/escapeRoom.js";
import { startImpossible } from "./games/impossible.js";
import { startFunnyLogic } from "./games/funnyLogic.js";
import { startPaheli } from "./games/paheli.js";
import { startTicTacToe } from "./games/ticTacToe.js";

const games = {
    mindTrap: startMindTrap,
    findLie: startFindLie,
    whatChanged: startWhatChanged,
    escapeRoom: startEscapeRoom,
    impossible: startImpossible,
    funnyLogic: startFunnyLogic,
    paheli: startPaheli,
    ticTacToe: startTicTacToe
};

const gameTitles = {
    mindTrap: "🧠 Mind Trap",
    findLie: "🔍 Find the Lie",
    whatChanged: "👀 What Changed?",
    escapeRoom: "🔐 Escape Room",
    impossible: "🌀 Impossible",
    funnyLogic: "😂 Funny Logic",
    paheli: "🧩 Paheli",
    ticTacToe: "❌⭕ Tic-Tac-Toe"
};

function openGame(gameName) {
    const main = document.querySelector("main");
    const gameScreen = document.getElementById("gameScreen");
    const gameTitle = document.getElementById("gameTitle");
    const gameContent = document.getElementById("gameContent");

    if (!main || !gameScreen || !gameTitle || !gameContent) {
        console.error("Required HTML elements nahi mile.");
        return;
    }

    if (!games[gameName]) {
        console.error(`Game "${gameName}" available nahi hai.`);
        return;
    }

    main.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    gameTitle.textContent = gameTitles[gameName] || "Game";

    gameContent.innerHTML = "";

    try {
        games[gameName]();
    } catch (error) {
        console.error(error);

        gameContent.innerHTML = `
            <div class="quiz-result">
                <h2>⚠️ Game Error</h2>
                <p>Game load nahi ho pa raha.</p>
                <button class="primary-btn" onclick="goHome()">
                    ← Home
                </button>
            </div>
        `;
    }
}

function goHome() {
    const main = document.querySelector("main");
    const gameScreen = document.getElementById("gameScreen");

    if (!main || !gameScreen) {
        return;
    }

    gameScreen.classList.add("hidden");
    main.classList.remove("hidden");
}

function surpriseMe() {
    const gameNames = Object.keys(games);

    if (gameNames.length === 0) {
        return;
    }

    const randomIndex = Math.floor(
        Math.random() * gameNames.length
    );

    openGame(gameNames[randomIndex]);
}

window.openGame = openGame;
window.goHome = goHome;
window.surpriseMe = surpriseMe;
