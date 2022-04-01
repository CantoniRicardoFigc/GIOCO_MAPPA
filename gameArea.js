import Levels from "./levels.js";
import Lvl from "./lvl.js";

export default class GameArea {
  
    constructor() {
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
      this.interval = setInterval(this.updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea
    }
  
    clear = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
  
    updateGameArea = () => {
      this.clear();
      this.level.draw(this.context);
    };

  }