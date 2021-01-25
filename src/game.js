"use strict";

class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.owl = null;
    this.pizza = [];
    this.worm = [];
    this.virus = [];
    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
    this.biggestSize = 0;
    this.speedWorm = 4;
    this.speedPizza = 2;
    this.speedVirus = 2;
    this.apparitionRatePizza = 0.99;
    this.apparitionRateVirus = 0.98;
    this.apparitionRateWorm = 0.995;
    this.apparitionRateBonus = 0.99;
    this.loopCounter = 0;
    this.backgroundMusic = new Audio("../sounds/Audrey's Dance.mp3");
    this.pizzaSound = new Audio("../sounds/eat sound.mp3");
    this.virusSound = new Audio("../sounds/Homer Simpson Doh sound effect.mp3");
    this.wormSound = new Audio(
      "../sounds/Super Mario Power Up Sound Effect.mp3"
    );
    this.deathSound = new Audio("../sounds/Wilhelm Scream sound effect.mp3");
    this.bonus = 0;
  }

  start() {
    this.canvasContainer = document.querySelector(".canvas-container");
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.scoreElement = document.body.querySelector(".current-score");
    this.biggestSizeElement = document.body.querySelector(".biggest-size");
    this.speedElement = document.body.querySelector(".current-speed");

    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;

    this.canvas.setAttribute("height", this.containerHeight);
    this.canvas.setAttribute("width", this.containerWidth);

    this.owl = new Owl(this.canvas);

    function handleKeyDown(event) {
      if (event.key === "ArrowDown" || event.key === "s") {
        this.owl.direction = "d";
        console.log("down");
      } else if (event.key === "ArrowUp" || event.key === "z") {
        this.owl.direction = "u";
        console.log("up");
      } else if (event.key === "ArrowLeft" || event.key === "q") {
        this.owl.direction = "l";
        console.log("left");
      } else if (event.key === "ArrowRight" || event.key === "d") {
        this.owl.direction = "r";
        console.log("right");
      }
    }

    const boundHandleKeyDown = handleKeyDown.bind(this);
    document.body.addEventListener("keydown", boundHandleKeyDown);

    this.startLoop();
  }

  startLoop() {
    const loop = function () {
      this.loopCounter++;
      let ranLet;
      let xVirus;
      let yVirus;

      this.changeBackground();

      // create viruses / pizza / worm / bonus

      if (this.biggestSize > 150) {
        this.apparitionRateVirus -= 0.00001;
      }
      if (Math.random() > this.apparitionRateVirus) {
        function udlrGenerator() {
          let ranNum = Math.floor(Math.random() * 4) + 1;

          switch (ranNum) {
            case 1:
              ranLet = "u";
              break;
            case 2:
              ranLet = "d";
              break;
            case 3:
              ranLet = "l";
              break;
            case 4:
              ranLet = "r";
              break;
          }
          return ranLet;
        }

        function xyGenerator(ranLet) {
          if (ranLet === "u") {
            yVirus = 0;
            xVirus = Math.random() * document.querySelector("canvas").width;
          } else if (ranLet === "d") {
            yVirus = document.querySelector("canvas").height;
            xVirus = Math.random() * document.querySelector("canvas").width;
          } else if (ranLet === "l") {
            xVirus = 0;
            yVirus = Math.random() * document.querySelector("canvas").height;
          } else if (ranLet === "r") {
            xVirus = document.querySelector("canvas").width;
            yVirus = Math.random() * document.querySelector("canvas").height;
          }
        }

        udlrGenerator();
        xyGenerator(ranLet);

        const newVirus = new Virus(
          this.canvas,
          xVirus,
          yVirus,
          this.speedVirus,
          ranLet
        );
        this.virus.push(newVirus);
      }
      if (Math.random() > this.apparitionRatePizza) {
        function udlrGenerator() {
          let ranNum = Math.floor(Math.random() * 4) + 1;

          switch (ranNum) {
            case 1:
              ranLet = "u";
              break;
            case 2:
              ranLet = "d";
              break;
            case 3:
              ranLet = "l";
              break;
            case 4:
              ranLet = "r";
              break;
          }
          return ranLet;
        }

        function xyGenerator(ranLet) {
          if (ranLet === "u") {
            yVirus = 0;
            xVirus = Math.random() * document.querySelector("canvas").width;
          } else if (ranLet === "d") {
            yVirus = document.querySelector("canvas").height;
            xVirus = Math.random() * document.querySelector("canvas").width;
          } else if (ranLet === "l") {
            xVirus = 0;
            yVirus = Math.random() * document.querySelector("canvas").height;
          } else if (ranLet === "r") {
            xVirus = document.querySelector("canvas").width;
            yVirus = Math.random() * document.querySelector("canvas").height;
          }
        }

        udlrGenerator();
        xyGenerator(ranLet);

        const newPizza = new Pizza(
          this.canvas,
          xVirus,
          yVirus,
          this.speedPizza,
          ranLet
        );
        this.pizza.push(newPizza);
      }
      if (Math.random() > this.apparitionRateWorm) {
        function udlrGenerator() {
          let ranNum = Math.floor(Math.random() * 4) + 1;

          switch (ranNum) {
            case 1:
              ranLet = "u";
              break;
            case 2:
              ranLet = "d";
              break;
            case 3:
              ranLet = "l";
              break;
            case 4:
              ranLet = "r";
              break;
          }
          return ranLet;
        }

        function xyGenerator(ranLet) {
          if (ranLet === "u") {
            yVirus = 0;
            xVirus = Math.random() * document.querySelector("canvas").width;
          } else if (ranLet === "d") {
            yVirus = document.querySelector("canvas").height;
            xVirus = Math.random() * document.querySelector("canvas").width;
          } else if (ranLet === "l") {
            xVirus = 0;
            yVirus = Math.random() * document.querySelector("canvas").height;
          } else if (ranLet === "r") {
            xVirus = document.querySelector("canvas").width;
            yVirus = Math.random() * document.querySelector("canvas").height;
          }
        }

        udlrGenerator();
        xyGenerator(ranLet);

        const newWorm = new Worm(
          this.canvas,
          xVirus,
          yVirus,
          this.speedWorm,
          ranLet
        );
        this.worm.push(newWorm);
      }

      //   if (Math.random() > this.apparitionRateBonus) {
      //     function udlrGenerator() {
      //       let ranNum = Math.floor(Math.random() * 4) + 1;

      //       switch (ranNum) {
      //         case 1:
      //           ranLet = "u";
      //           break;
      //         case 2:
      //           ranLet = "d";
      //           break;
      //         case 3:
      //           ranLet = "l";
      //           break;
      //         case 4:
      //           ranLet = "r";
      //           break;
      //       }
      //       return ranLet;
      //     }

      //     function xyGenerator(ranLet) {
      //       if (ranLet === "u") {
      //         yVirus = 0;
      //         xVirus = Math.random() * document.querySelector("canvas").width;
      //       } else if (ranLet === "d") {
      //         yVirus = document.querySelector("canvas").height;
      //         xVirus = Math.random() * document.querySelector("canvas").width;
      //       } else if (ranLet === "l") {
      //         xVirus = 0;
      //         yVirus = Math.random() * document.querySelector("canvas").height;
      //       } else if (ranLet === "r") {
      //         xVirus = document.querySelector("canvas").width;
      //         yVirus = Math.random() * document.querySelector("canvas").height;
      //       }
      //     }

      //     udlrGenerator();
      //     xyGenerator(ranLet);

      //     const newBonus = new Bonus(
      //       this.canvas,
      //       xVirus,
      //       yVirus,
      //       ranLet
      //     );
      //     this.bonus.push(newBonus);
      //   }

      // check if pizza/virus/worm are going off screen
      this.worm = this.worm.filter((worm) => {
        worm.updatePosition();
        return worm.isInsideScreen;
      });
      this.pizza = this.pizza.filter((pizza) => {
        pizza.updatePosition();
        return pizza.isInsideScreen;
      });

      this.virus = this.virus.filter((virus) => {
        virus.updatePosition();
        return virus.isInsideScreen;
      });

      //   this.bonus = this.bonus.filter((bonus) => {
      //     bonus.updatePosition();
      //     return bonus.isInsideScreen;
      //   });

      // check collisions Virus / pizza / worm
      this.checkCollisionsVirus();
      this.checkCollisionsPizza();
      this.checkCollisionsWorm();
      //   this.checkCollisionsBonus();

      // check if owl going through a wall
      this.owl.screenGoThrough();

      // size score;
      this.owl.updateBiggestSize();

      // clear the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // draw the owl & decrease size
      this.owl.draw();
      this.owl.setMovement();
      this.owl.decreaseSizeOwl(this.loopCounter);
      if (this.owl.width < 25) {
        this.gameOver();
        this.backgroundMusic.pause();
      }

      // draw the pizza / virus / worm
      this.virus.forEach((virus) => {
        virus.draw();
      });
      this.pizza.forEach((pizza) => {
        pizza.draw();
      });
      this.worm.forEach((worm) => {
        worm.draw();
      });
      //   this.bonus.forEach((bonus) => {
      //     bonus.draw()
      //   });

      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }

      // update Game Stats
      this.updateGameStats();
    }.bind(this);
    window.requestAnimationFrame(loop);
  }

  // check collisions Virus
  checkCollisionsVirus() {
    this.virus.forEach(function (virus) {
      if (this.owl.didCollideWithVirus(virus)) {
        this.virusSound.play();
        this.owl.decreaseSizeVirus();
        this.score -= 200;
        console.log("collision with virus", this.score);
        virus.x = 0 - this.virus.height;
      }
    }, this);
  }

  // check collisions Pizza
  checkCollisionsPizza() {
    this.pizza.forEach(function (pizza) {
      if (this.owl.didCollideWithPizza(pizza)) {
        this.pizzaSound.play();
        this.owl.increaseSizePizza();
        this.score += 300;
        console.log("collision with pizza ", this.score);
        pizza.x = 0 - this.pizza.height;
      }
    }, this);
  }

  // check collisions Worm
  checkCollisionsWorm() {
    this.worm.forEach(function (worm) {
      if (this.owl.didCollideWithWorm(worm)) {
        this.wormSound.play();
        this.owl.increaseSpeedWorm();
        this.score += 500;
        console.log("collision with worm", this.score);
        worm.x = 0 - this.pizza.height;
      }
    }, this);
  }

  // check collisions Bonus
  //   checkCollisionsBonus() {
  //       this.bonus.forEach(function(bonus){
  //         if (this.owl.didCollideWithBonus(bonus)) {
  //             this.bonus ++;
  //             console.log('collision with Bonus ', this.bonus);
  //         }
  //       }, this);
  //   }

  gameOver() {
    this.deathSound.play();
    this.gameIsOver = true;
    endGame(this.score, this.biggestSize);
  }

  changeBackground() {
    if (this.score > 1000) {
      document.querySelector(".canvas-container").style.backgroundColor =
        "#" + Math.floor(Math.random() * 1000000) + 1;
    }
    if (this.score > 1050) {
      document.querySelector(".canvas-container").style.backgroundColor = "";
    }
  }

  updateGameStats() {
    this.score += 1;
    this.biggestSize = this.owl.biggestSize;
    this.scoreElement.innerHTML = this.score;
    this.biggestSizeElement.innerHTML = this.biggestSize;
    this.speedElement.innerHTML = this.owl.speed;
  }
}
