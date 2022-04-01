import GameArea from "./gameArea.js";
let myGameArea = new GameArea();

  var animatedObject = {
    speedX: 0,
    speedY: 0,
    width: 150,
    height: 120,
    x: 50,
    y: 530,
    imageList: [], //Vettore che conterrà tutte le immagini caricate
    contaFrame: 0, //Tiene conto di quanti frame sono passati
    actualFrame: 0, //Specifica quale frame disegnare
  
    update: function() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.contaFrame++;
      if (this.contaFrame == 5) {
        this.contaFrame = 0;
        this.actualFrame = (1 + this.actualFrame) % this.imageList.length;
        this.image = this.imageList[this.actualFrame];
      }
    },

    loadImages: function() {
      for (imgPath of running) {
       var img = new Image(this.width, this.height);
       img.src = imgPath;
       this.imageList.push(img);
     }
     this.image = this.imageList[this.actualFrame];
   }
 };
 
 