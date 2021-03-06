import Levels from "./levels.js";
import Lvl from "./lvl.js";
import NinjaSprites from "./scriptImg.js";
import AnimatedObject from "./animatedObject.js";

export default class GameArea {
  
    constructor() {
      this.ninja = new AnimatedObject(NinjaSprites.running, 60, 60, 570, 780);
      this.ninja.loadImages(NinjaSprites.running);
      this.vet = [];
      this.level = new Levels(
        59,
        52,
        32,
        32,
        Lvl.water,
        Lvl.path,
        Lvl.obstacles,
        Lvl.oggetti,
        "Castle2.png",
        512,
        512
      );
      this.canvas = document.getElementById("gameArea");
      this.canvas.width = 400;
      this.canvas.height =400;
      this.context = this.canvas.getContext("2d");
      this.interval = setInterval(this.updateGameArea, 20); 
      this.interval = setInterval(this.updateSound1, 8000);
      this.interval = setInterval(this.updateSound2, 245000);
      document.addEventListener("keydown", this.move);
      document.addEventListener("keyup", this.clearmove);
      this.obstaclesVector= this.level.obstaclesVector;
      console.log(this.obstaclesVector)
      }
  
    clear = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
  
    updateGameArea = () => {
      this.clear();
      this.level.draw(this.context, this.ninja.x-(this.canvas.width-180), this.ninja.y-(this.canvas.height-150));
      this.ninja.update(this.obstaclesVector)
      this.ninja.draw(this.context)
    };
    updateSound1 = () => {
      var snd = new Audio("uccellini.mp3");
      snd.play();
    };
    updateSound2 = () => {
      var snd = new Audio("ruscello.mp3");
      snd.play();
    }

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

    allerte = (livelli) => {
      if (this.ninja.x && this.ninja.y == livelli.x && livelli.y) {
        alert('ciao');
      }
    }

  }