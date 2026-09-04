export function startTicTacToe() {
    const gameContent = document.getElementById("gameContent");

    if (!gameContent) {
        console.error("gameContent nahi mila.");
        return;
    }

    let board = ["", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameOver = false;
    let computerThinking = false;

    let gameMode = "";
    let difficulty = "";

    let playerScore = 0;
    let opponentScore = 0;
    let drawScore = 0;

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // =========================
    // MAIN MENU
    // =========================

    function showModeSelection() {

        gameContent.innerHTML = `
            <div class="ttt-container">

                <div class="ttt-menu">

                    <div class="ttt-icon">❌⭕</div>

                    <h1>Tic-Tac-Toe</h1>

                    <p class="ttt-subtitle">
                        Game Mode Choose Karo
                    </p>

                    <div class="ttt-menu-buttons">

                        <button
                            class="ttt-menu-btn computer-btn"
                            id="computerMode"
                        >
                            <span class="menu-btn-icon">🤖</span>

                            <span>
                                <strong>Computer</strong>
                                <small>AI ke saath khelo</small>
                            </span>
                        </button>

                        <button
                            class="ttt-menu-btn player-btn"
                            id="twoPlayerMode"
                        >
                            <span class="menu-btn-icon">👥</span>

                            <span>
                                <strong>2 Players</strong>
                                <small>Friend ke saath khelo</small>
                            </span>
                        </button>

                    </div>

                </div>

            </div>
        `;

        gameContent
            .querySelector("#computerMode")
            .addEventListener("click", () => {

                gameMode = "computer";

                showDifficultySelection();
            });

        gameContent
            .querySelector("#twoPlayerMode")
            .addEventListener("click", () => {

                gameMode = "2player";
                difficulty = "";

                startGame();
            });
    }

    // =========================
    // DIFFICULTY SCREEN
    // =========================

    function showDifficultySelection() {

        gameContent.innerHTML = `
            <div class="ttt-container">

                <div class="ttt-menu">

                    <button
                        class="ttt-back-btn"
                        id="backToMode"
                    >
                        ← Back
                    </button>

                    <div class="ttt-icon">🤖</div>

                    <h1>Difficulty</h1>

                    <p class="ttt-subtitle">
                        Computer ki difficulty choose karo
                    </p>

                    <div class="ttt-difficulty-buttons">

                        <button
                            class="difficulty-btn easy"
                            data-difficulty="easy"
                        >
                            <span>🟢</span>

                            <div>
                                <strong>Easy</strong>
                                <small>Beginner ke liye</small>
                            </div>
                        </button>

                        <button
                            class="difficulty-btn medium"
                            data-difficulty="medium"
                        >
                            <span>🟡</span>

                            <div>
                                <strong>Medium</strong>
                                <small>Thoda challenging</small>
                            </div>
                        </button>

                        <button
                            class="difficulty-btn hard"
                            data-difficulty="hard"
                        >
                            <span>🔴</span>

                            <div>
                                <strong>Hard</strong>
                                <small>Computer ko harao!</small>
                            </div>
                        </button>

                    </div>

                </div>

            </div>
        `;

        gameContent
            .querySelector("#backToMode")
            .addEventListener(
                "click",
                showModeSelection
            );

        gameContent
            .querySelectorAll(".difficulty-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        difficulty =
                            button.dataset.difficulty;

                        startGame();
                    }
                );
            });
    }

    // =========================
    // GAME SCREEN
    // =========================

    function startGame() {

        board = [
            "", "", "",
            "", "", "",
            "", "", ""
        ];

        currentPlayer = "X";
        gameOver = false;
        computerThinking = false;

        gameContent.innerHTML = `
            <div class="ttt-container">

                <div class="ttt-game">

                    <div class="ttt-game-header">

                        <button
                            class="ttt-back-btn"
                            id="gameBack"
                        >
                            ← Back
                        </button>

                        <div>
                            <h2>❌⭕ Tic-Tac-Toe</h2>

                            <span class="game-mode-text">
                                ${
                                    gameMode === "computer"
                                        ? `🤖 ${
                                            difficulty
                                                .charAt(0)
                                                .toUpperCase() +
                                            difficulty.slice(1)
                                        }`
                                        : "👥 2 Players"
                                }
                            </span>
                        </div>

                    </div>

                    <div class="ttt-scoreboard">

                        <div class="score-box player-score">
                            <span id="playerLabel">
                                ${
                                    gameMode === "computer"
                                        ? "👤 You"
                                        : "❌ Player X"
                                }
                            </span>

                            <strong id="playerScore">
                                0
                            </strong>
                        </div>

                        <div class="score-box draw-score">
                            <span>🤝 Draw</span>

                            <strong id="drawScore">
                                0
                            </strong>
                        </div>

                        <div class="score-box opponent-score">
                            <span id="opponentLabel">
                                ${
                                    gameMode === "computer"
                                        ? "🤖 Computer"
                                        : "⭕ Player O"
                                }
                            </span>

                            <strong id="opponentScore">
                                0
                            </strong>
                        </div>

                    </div>

                    <div class="ttt-status-box">

                        <p id="tttStatus">
                            ${
                                gameMode === "computer"
                                    ? "👤 Aapki turn"
                                    : "❌ Player X ki turn"
                            }
                        </p>

                    </div>

                    <div
                        class="ttt-board"
                        id="tttBoard"
                    >

                        ${Array.from(
                            { length: 9 },
                            (_, index) => `
                                <button
                                    data-index="${index}"
                                    aria-label="Cell ${index + 1}"
                                ></button>
                            `
                        ).join("")}

                    </div>

                    <div class="ttt-game-actions">

                        <button
                            id="tttRestart"
                            class="ttt-action-btn restart"
                        >
                            🔄 New Game
                        </button>

                        <button
                            id="tttResetScore"
                            class="ttt-action-btn reset"
                        >
                            🗑️ Reset Score
                        </button>

                    </div>

                </div>

            </div>
        `;

        setupGameEvents();
    }

    // =========================
    // GAME SETUP
    // =========================

    function setupGameEvents() {

        const cells =
            gameContent.querySelectorAll(
                ".ttt-board button"
            );

        const status =
            gameContent.querySelector(
                "#tttStatus"
            );

        const restartButton =
            gameContent.querySelector(
                "#tttRestart"
            );

        const resetScoreButton =
            gameContent.querySelector(
                "#tttResetScore"
            );

        const backButton =
            gameContent.querySelector(
                "#gameBack"
            );

        const playerScoreElement =
            gameContent.querySelector(
                "#playerScore"
            );

        const opponentScoreElement =
            gameContent.querySelector(
                "#opponentScore"
            );

        const drawScoreElement =
            gameContent.querySelector(
                "#drawScore"
            );

        function updateScore() {

            playerScoreElement.textContent =
                playerScore;

            opponentScoreElement.textContent =
                opponentScore;

            drawScoreElement.textContent =
                drawScore;
        }

        function checkWinner(testBoard = board) {

            for (
                const pattern of winningPatterns
            ) {

                const [a, b, c] = pattern;

                if (
                    testBoard[a] !== "" &&
                    testBoard[a] === testBoard[b] &&
                    testBoard[a] === testBoard[c]
                ) {
                    return testBoard[a];
                }
            }

            if (
                testBoard.every(
                    cell => cell !== ""
                )
            ) {
                return "draw";
            }

            return null;
        }

        function finishGame(winner) {

            if (winner === "X") {

                if (gameMode === "computer") {
                    status.textContent =
                        "🎉 Aap jeet gaye!";
                } else {
                    status.textContent =
                        "🎉 Player X jeet gaya!";
                }

                playerScore++;

            } else if (winner === "O") {

                if (gameMode === "computer") {
                    status.textContent =
                        "🤖 Computer jeet gaya!";
                } else {
                    status.textContent =
                        "🎉 Player O jeet gaya!";
                }

                opponentScore++;

            } else {

                status.textContent =
                    "🤝 Game Draw!";

                drawScore++;
            }

            updateScore();

            gameOver = true;

            document
                .querySelector(".ttt-status-box")
                ?.classList.add("game-finished");
        }

        function makeMove(index, player) {

            if (gameOver) return;

            if (board[index] !== "") return;

            board[index] = player;

            cells[index].textContent =
                player;

            cells[index].classList.add(
                player === "X"
                    ? "x"
                    : "o"
            );

            const winner =
                checkWinner();

            if (winner) {
                finishGame(winner);
                return;
            }

            currentPlayer =
                currentPlayer === "X"
                    ? "O"
                    : "X";

            if (
                gameMode === "computer" &&
                currentPlayer === "O"
            ) {

                status.textContent =
                    "🤖 Computer soch raha hai...";

                computerThinking = true;

                setTimeout(
                    computerMove,
                    500
                );

            } else {

                status.textContent =
                    `Player ${currentPlayer} ki turn`;

                computerThinking = false;
            }
        }

        function findWinningMove(player) {

            for (let i = 0; i < 9; i++) {

                if (board[i] !== "") {
                    continue;
                }

                board[i] = player;

                const winner =
                    checkWinner();

                board[i] = "";

                if (winner === player) {
                    return i;
                }
            }

            return null;
        }

        function getRandomMove() {

            const emptyCells = [];

            for (let i = 0; i < 9; i++) {

                if (board[i] === "") {
                    emptyCells.push(i);
                }
            }

            if (emptyCells.length === 0) {
                return null;
            }

            return emptyCells[
                Math.floor(
                    Math.random() *
                    emptyCells.length
                )
            ];
        }

        function getMediumMove() {

            const winningMove =
                findWinningMove("O");

            if (winningMove !== null) {
                return winningMove;
            }

            const blockingMove =
                findWinningMove("X");

            if (blockingMove !== null) {
                return blockingMove;
            }

            if (board[4] === "") {
                return 4;
            }

            const corners =
                [0, 2, 6, 8];

            const availableCorners =
                corners.filter(
                    index => board[index] === ""
                );

            if (
                availableCorners.length > 0
            ) {

                return availableCorners[
                    Math.floor(
                        Math.random() *
                        availableCorners.length
                    )
                ];
            }

            return getRandomMove();
        }

        function minimax(
            testBoard,
            maximizingPlayer
        ) {

            const winner =
                checkWinner(testBoard);

            if (winner === "O") {
                return 10;
            }

            if (winner === "X") {
                return -10;
            }

            if (winner === "draw") {
                return 0;
            }

            if (maximizingPlayer) {

                let bestScore = -Infinity;

                for (let i = 0; i < 9; i++) {

                    if (testBoard[i] !== "") {
                        continue;
                    }

                    testBoard[i] = "O";

                    const score =
                        minimax(
                            testBoard,
                            false
                        );

                    testBoard[i] = "";

                    bestScore =
                        Math.max(
                            bestScore,
                            score
                        );
                }

                return bestScore;

            } else {

                let bestScore = Infinity;

                for (let i = 0; i < 9; i++) {

                    if (testBoard[i] !== "") {
                        continue;
                    }

                    testBoard[i] = "X";

                    const score =
                        minimax(
                            testBoard,
                            true
                        );

                    testBoard[i] = "";

                    bestScore =
                        Math.min(
                            bestScore,
                            score
                        );
                }

                return bestScore;
            }
        }

        function getHardMove() {

            let bestScore = -Infinity;
            let bestMove = null;

            for (let i = 0; i < 9; i++) {

                if (board[i] !== "") {
                    continue;
                }

                board[i] = "O";

                const score =
                    minimax(
                        board,
                        false
                    );

                board[i] = "";

                if (score > bestScore) {

                    bestScore = score;
                    bestMove = i;
                }
            }

            return bestMove;
        }

        function getComputerMove() {

            if (difficulty === "easy") {
                return getRandomMove();
            }

            if (difficulty === "medium") {
                return getMediumMove();
            }

            return getHardMove();
        }

        function computerMove() {

            if (gameOver) return;

            const move =
                getComputerMove();

            if (move === null) return;

            makeMove(move, "O");

            computerThinking = false;
        }

        function restartGame() {

            board = [
                "", "", "",
                "", "", "",
                "", "", ""
            ];

            currentPlayer = "X";
            gameOver = false;
            computerThinking = false;

            cells.forEach(cell => {

                cell.textContent = "";

                cell.classList.remove(
                    "x",
                    "o"
                );
            });

            status.textContent =
                gameMode === "computer"
                    ? "👤 Aapki turn"
                    : "❌ Player X ki turn";

            document
                .querySelector(".ttt-status-box")
                ?.classList.remove(
                    "game-finished"
                );
        }

        cells.forEach(cell => {

            cell.addEventListener(
                "click",
                () => {

                    if (gameOver) return;

                    if (computerThinking) {
                        return;
                    }

                    if (
                        gameMode === "computer" &&
                        currentPlayer !== "X"
                    ) {
                        return;
                    }

                    const index =
                        Number(
                            cell.dataset.index
                        );

                    makeMove(
                        index,
                        currentPlayer
                    );
                }
            );
        });

        restartButton.addEventListener(
            "click",
            restartGame
        );

        resetScoreButton.addEventListener(
            "click",
            () => {

                playerScore = 0;
                opponentScore = 0;
                drawScore = 0;

                updateScore();
                restartGame();
            }
        );

        backButton.addEventListener(
            "click",
            () => {

                if (
                    gameMode === "computer"
                ) {
                    showDifficultySelection();
                } else {
                    showModeSelection();
                }
            }
        );

        updateScore();
    }

    // Game start hone par pehle menu
    showModeSelection();
}
