// Game logic

let player = 1;
let turnsPlayed = new Map();

function checkGameState() {
    // game state logic
}

function showUserMessage(text) {
    if (text) {
        document.getElementById("user-message").style.display = "block";
        document.getElementById("user-message").innerHTML = text;
    } else {
        document.getElementById("user-message").style.display = "none";
    }
}

function handleTileClick(e) {
    let tileElement = e.target,
        tileId = tileElement.getAttribute("data-index");

    if (turnsPlayed.has(tileId)) {
        showUserMessage("tile already occupied!");
        return;
    }

    showUserMessage("");

    if (player === 1) {
        tileElement.innerHTML = `<span class="xtile">X</span>`;
        turnsPlayed.set(tileId, "X");
    } else {
        tileElement.innerHTML = `<span class="otile">O</span>`;
        turnsPlayed.set(tileId, "O");
    }
    player = (player + 1) % 2;
    checkGameState();
}

function initialize() {

    let tdElements = document.getElementsByTagName("td");
    tdElements = Array.prototype.slice.call(tdElements);
    tdElements.forEach(element => element.addEventListener("click", e => handleTileClick(e)));
}

window.onload = function () {
    initialize();
}