"use strict";

class Owl {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.score = 0;
    this.biggestSize = 0;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.width = 100;
    this.height = 66;
    this.aspectRatio = 1.57;
    this.direction = "r";
    this.speed = 5;
    this.owlImage = new Image();
    this.owlImage.src = "img/owl-transp-100.png";
    this.owlDyingImage = new Image();
    this.owlDyingImage.src = "img/owl-dying.png";
    this.sizeDecreaseRate = 0.01;
    this.size = this.width + this.height;

    const owlTop = this.y;
    const owlBottom = this.y + this.height;
    const owlLeft = this.x;
    const owlRight = this.x + this.width;
  }

  draw() {
    // draw the owl
    if (this.width > 50) {
      this.ctx.drawImage(
        this.owlImage,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else {
      this.ctx.drawImage(
        this.owlDyingImage,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  setDirection(direction) {
    switch (direction) {
      case "up":
        this.direction = "u";
        break;
      case "down":
        this.direction = "d";
        break;
      case "left":
        this.direction = "l";
        break;
      case "right":
        this.direction = "r";
        break;
    }
  } // depending on event listener -> set new direction

  setMovement() {
    switch (this.direction) {
      case "u":
        this.y -= this.speed;
        break;
      case "d":
        this.y += this.speed;
        break;
      case "l":
        this.x = this.x - this.speed;
        break;
      case "r":
        this.x = this.x + this.speed;
        break;
    }
  } // update x & y depending on direction

  screenGoThrough() {
    // if reaches the edge of the screen, appear on the other side
    const screenTop = 0;
    const screenBottom = this.canvas.height;
    const screenLeft = 0;
    const screenRight = this.canvas.width;

    const owlTop = this.y;
    const owlBottom = this.y + this.height;
    const owlLeft = this.x;
    const owlRight = this.x + this.width;

    if (owlLeft > screenRight && this.direction === "r") {
      this.x = 0 - this.width;
    } else if (owlRight < screenLeft && this.direction === "l") {
      this.x = this.canvas.width + this.width;
    }
    if (owlBottom < screenTop && this.direction === "u") {
      this.y = this.canvas.height;
    }
    if (owlTop > screenBottom) {
      this.y = 0;
    }
  }

  didCollideWithVirus(virus) {
    const owlTop = this.y;
    const owlBottom = this.y + this.height;
    const owlLeft = this.x;
    const owlRight = this.x + this.width;

    const virusTop = virus.y;
    const virusBottom = virus.y + virus.height;
    const virusLeft = virus.x;
    const virusRight = virus.x + virus.width;

    const crossLeft = virusLeft <= owlRight && virusLeft >= owlLeft;
    const crossRight = virusRight >= owlLeft && virusRight <= owlRight;
    const crossBottom = virusBottom >= owlTop && virusBottom <= owlBottom;
    const crossTop = virusTop <= owlBottom && virusTop >= owlTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }

  didCollideWithPizza(pizza) {
    const owlTop = this.y;
    const owlBottom = this.y + this.height;
    const owlLeft = this.x;
    const owlRight = this.x + this.width;

    const pizzaTop = pizza.y;
    const pizzaBottom = pizza.y + pizza.height;
    const pizzaLeft = pizza.x;
    const pizzaRight = pizza.x + pizza.width;

    const crossLeft = pizzaLeft <= owlRight && pizzaLeft >= owlLeft;
    const crossRight = pizzaRight >= owlLeft && pizzaRight <= owlRight;
    const crossBottom = pizzaBottom >= owlTop && pizzaBottom <= owlBottom;
    const crossTop = pizzaTop <= owlBottom && pizzaTop >= owlTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }

  didCollideWithWorm(worm) {
    const owlTop = this.y;
    const owlBottom = this.y + this.height;
    const owlLeft = this.x;
    const owlRight = this.x + this.width;

    const wormTop = worm.y;
    const wormBottom = worm.y + worm.height;
    const wormLeft = worm.x;
    const wormRight = worm.x + worm.width;

    const crossLeft = wormLeft <= owlRight && wormLeft >= owlLeft;
    const crossRight = wormRight >= owlLeft && wormRight <= owlRight;
    const crossBottom = wormBottom >= owlTop && wormBottom <= owlBottom;
    const crossTop = wormTop <= owlBottom && wormTop >= owlTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }

  didCollideWithBonus(bonus) {
    const owlTop = this.y;
    const owlBottom = this.y + this.height;
    const owlLeft = this.x;
    const owlRight = this.x + this.width;

    const bonusTop = bonus.y;
    const bonusBottom = bonus.y + bonus.height;
    const bonusLeft = bonus.x;
    const bonusRight = bonus.x + bonus.width;

    const crossLeft = bonusLeft <= owlRight && bonusLeft >= owlLeft;
    const crossRight = bonusRight >= owlLeft && bonusRight <= owlRight;
    const crossBottom = bonusBottom >= owlTop && bonusBottom <= owlBottom;
    const crossTop = bonusTop <= owlBottom && bonusTop >= owlTop;

    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }

  decreaseSizeVirus() {
    this.width -= 40;
    this.height = this.width / this.aspectRatio;
  } // update points & width&height if eats virus

  increaseSizePizza() {
    this.width += 50;
    this.height = this.width / this.aspectRatio;
  } // update points & width&height if eats pizza

  increaseSpeedWorm() {
    this.speed += 1;
  } // update points & speed if eats pizza

  updateBiggestSize() {
    if (this.width > this.biggestSize) {
      this.biggestSize = this.width;
    }
  }

  // decrease owl's size with time
  decreaseSizeOwl(loopCounter) {
    loopCounter++;
    if (loopCounter % 20 === 0) {
      this.width -= 1;
      this.height = this.width / this.aspectRatio;
    }
  }
}
