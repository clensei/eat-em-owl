"use strict";

let game; // instance of the Game
let splashScreen; // Start Game Screen
let gameScreen; // create gameScreen
let gameOverScreen;

// Creates DOM elements from a string representation
function buildDom(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = `${htmlString}`;
  return div.children[0];
}

// -- splash (start) screen

function createSplashScreen() {
  splashScreen = buildDom(`
  <main>
    <h1>EAT'EM </br><span class="owl">OWL</span> </h1>
    <H2><img src="img/arrow.png" class="arrow">INSTRUCTIONS<img src="img/arrowleft.png" class="arrow"></H2>
    <section class="instr-list">
        <li>
            <ol>1/ Eat pizza to gain weight</ol>
            <ol>2/ Eat worms to gain speed</ol>
            <ol>3/ Avoid viruses or lose weight</ol>
            <ol>4/ Collect owls for Bonuses!</ol>
        </li>
        <div class="arrows">
            Move around using the Arrows </br> of your keyboard.</br></br>
            <span>Press space to use your bonus!</span> 
        </div>
    </section>
    <div class="div-btn"> 
        <div><img class="img-pizza" src="img/pizza.png"><img class="img-pizza" src="img/virus.png"><img class="img-pizza" src="img/worm.png"><img class="img-pizza" src="img/bonus.png"></div>
        <button class="play-btn">PLAY</button>
    </div>
  </main>
    `);

  document.body.appendChild(splashScreen);

  const startButton = splashScreen.querySelector("button");
  startButton.addEventListener("click", function () {
    startGame();
  });
}

function removeSplashScreen() {
  splashScreen.remove();
}

// -- game screen

function createGameScreen() {
  gameScreen = buildDom(`
    <main>
      <header class="game-display">
        <div>
          <span>Score:</span>
          <span class="current-score"></span>
        </div>
        <div>
          <span>Biggest Size:</span>
          <span class="biggest-size"></span>
        </div>
        <div>
          <span>Current Speed:<span>
          <span class="current-speed"></span>
        </div>
      </header>  
      <div class="canvas-container">
        <canvas></canvas> 
        </div> 
      <div class="message-board">
        <span></span>
      </div>
    </main>
    `);

  document.body.appendChild(gameScreen);
  return gameScreen;
}

function removeGameScreen() {
  gameScreen.remove();
}

// -- game over screen

function createGameOverScreen(score, bestSize) {
  gameOverScreen = buildDom(`
    <main>
    <h1>
       <span>GAME</span></br>
       <span>O<span class="wl-end">WL</span>VER
       </span>
   </h1>
   <div class="stats-div">
    <span class="statistics"> You Scored: <span class="current-score">${score}</span></span>
    <span class="statistics"> Your Max weight was: <span class="biggest-size">${bestSize}</span></span>
   </div>
   <h2 class="play-again">Dare to play again?</h2>
   <div class="play-again-btn-div">
       <button class="play-again-btn">Yes I want more pizza</button>
    </div>
    </main>
    `);

  const playAgainBtn = gameOverScreen.querySelector("button");
  playAgainBtn.addEventListener("click", startGame);

  document.body.appendChild(gameOverScreen);
}

function removeGameOverScreen() {
  if (gameOverScreen !== undefined) {
    gameOverScreen.remove();
  }
}

// -- Setting the game state - start or game over

function startGame() {
  removeSplashScreen();
  removeGameOverScreen();

  game = new Game();
  game.gameScreen = createGameScreen();

  game.start();

  game.backgroundMusic.play();
}

function endGame(score, bestSize) {
  removeGameScreen();
  createGameOverScreen(score, bestSize);
}

window.addEventListener("load", createSplashScreen);
