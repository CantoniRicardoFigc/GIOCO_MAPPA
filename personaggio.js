export default class Personaggio {
    constructor() {
        speedX;
        speedY;
        width;
        height;
        x;
        y;
        imageList; 
        contaFrame;
        actualFrame;
    }
    update = () =>{
        this.x += this.speedX;
        this.y += this.speedY;
        this.contaFrame++;
        if (this.contaFrame == 5) {
          this.contaFrame = 0;
          this.actualFrame = (1 + this.actualFrame) % this.imageList.length;
          this.image = this.imageList[this.actualFrame];
        }
    }
  
    loadImages = () => {
        for (imgPath of running) {
         var img = new Image(this.width, this.height);
         img.src = imgPath;
         this.imageList.push(img);
       }
       this.image = this.imageList[this.actualFrame];
    }
   
}

