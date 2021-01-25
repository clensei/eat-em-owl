"use strict";

class Virus {
  constructor(canvas, x, y, speed, entranceSide) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.width = 30;
    this.height = 30;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = new Image();
    this.image.src = "/img/virus.png";
    this.delete = false;
    console.log("test virus");
    this.entranceSide = entranceSide; 
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  updatePosition() {
    switch (this.entranceSide) {
      case "u":
        this.y = this.y + this.speed;
        break;
      case "d":
        this.y = this.y - this.speed;
        break;
      case "r":
        this.x = this.x - this.speed;
        break;
      case "l":
        this.x = this.x + this.speed;
        break;
    }
  }

  isInsideScreen() {
    switch (this.entranceSide) {
      case "u":
        if (this.y < this.canvas.height) return true;
        break;
      case "d":
        if (this.y + this.height < 0) return true;
        break;
      case "r":
        if (this.x + this.width < 0) return true;
        break;
      case "l":
        if (this.canvas.width > this.x) return true;
        break;
    }
  }
}
