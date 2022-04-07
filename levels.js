import RawObject from "./rawObject.js";

export default class Levels {

    level_width; 
    level_height;
    tile_width; 
    tile_height;
    water; 
    path; 
    obstacles;
    tileMapImage 
    tileMapImgHeight; 
    tileMapImageWidth;
    obstaclesVector = [];
    constructor(level_width, level_height, tile_width, tile_height, water, path, obstacles, tileMapsrc, tileMapImgHeight, tileMapImageWidth) {
        this.level_width = level_width;
        this.level_height = level_height;
        this.tile_width = tile_width;
        this.tile_height = tile_height;
        this.water = water;
        this.path = path;
        this.obstacles = obstacles;
        this.tileMapImage = new Image(this.width, this.height);
        this.tileMapImage.src = tileMapsrc;
        this.tileMapImgHeight = tileMapImgHeight;
        this.tileMapImageWidth = tileMapImageWidth;
        this.pushLayerObstacleVector(water, tile_width, tile_height);
        this.pushLayerObstacleVector(obstacles, tile_width, tile_height);
    }

    draw(canvasContext) {

       this.drawLayer(this.water, canvasContext);
       this.drawLayer(this.path, canvasContext);
       this.drawLayer(this.obstacles, canvasContext);

    }

    drawLayer(layerMap, canvasContext) {
        
        for (let i = 0; i < layerMap.length; i++) {
           
            let dx = (i % this.level_width) * 32;
            let dy = Math.floor(i / this.level_height) * 32;
            let tile = layerMap[i];
           
            let sx = ((tile  % (this.tileMapImageWidth/32))-1) * 32;
            let sy = Math.floor(tile / (this.tileMapImgHeight/32)) * 32;

            if (tile != 0) {
                canvasContext.drawImage(this.tileMapImage, sx, sy, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
            }
            
        }
    }

    pushLayerObstacleVector(layerMap, tile_width, tile_height)
    {
      for (let i = 0; i < layerMap.length; i++) {
        if(layerMap[i] != 0)
        {
            let dx = (i % this.level_width) * 32;
            let dy = Math.floor(i / this.level_height) * 32;
            
            let obstacle = new RawObject(dx, dy, tile_width, tile_height)
            this.obstaclesVector.push(obstacle);
        }
      }
    }

}

