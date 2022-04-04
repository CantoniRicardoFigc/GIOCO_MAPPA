import Levels from "./levels.js";
import Lvl from "./lvl.js";
import NinjaSprites from "./scriptImg.js";
import AnimatedObject from "./animatedObject.js";

export default class GameArea {
  
    constructor() {
      this.ninja = new AnimatedObject(NinjaSprites.running, 60, 60, 10, 150);
      this.ninja.loadImages(NinjaSprites.running);
      this.vet = [];
      this.level = new Levels(
        40,
        40,
        32,
        32,
        Lvl.water,
        Lvl.path,
        Lvl.obstacles,
        "PathAndObjects.png",
        512,
        512
      );
      this.canvas = document.getElementById("gameArea");
      this.canvas.width = 1280;
      this.canvas.height = 1280;
      this.context = this.canvas.getContext("2d");
      this.interval = setInterval(this.updateGameArea, 20); 
      document.addEventListener("keydown", this.move);
      document.addEventListener("keyup", this.clearmove);
      this.obstaclesVector = this.level.obstaclesVector;
    }
  
    clear = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
  
    updateGameArea = () => {
      this.clear();
      this.level.draw(this.context);
      this.obstaclesVector=[];
      this.ninja.update(this.obstaclesVector)
      this.ninja.draw(this.context)
    };

    move = (e) => {
      switch (e.key) {
        case "w":
          this.ninja.speedY = -2;
          break;
        case "s":
          this.ninja.speedY = 2;
          break;
        case "a":
          this.ninja.speedX = -2;
          break;
        case "d":
          this.ninja.speedX = 2;
          break;
      }
    };
  
    clearmove = (e) => {
      switch (e.key) {
        case "w":
          this.ninja.speedY = 0;
          break;
        case "s":
          this.ninja.speedY = 0;
          break;
        case "a":
          this.ninja.speedX = 0;
          break;
        case "d":
          this.ninja.speedX = 0;
          break;
      }
      //this.ninja.speedX = 0;
      //this.ninja.speedY = 0;
    };

  }