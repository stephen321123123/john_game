class Block {
    constructor(obj){
        this.posX = obj.posX;
        this.posY = obj.posY;
        this.width = obj.width;
        this.height = obj.height
        this.colour = obj.colour;
    }

    renderBlock(){
        fill (this.colour)
        rect(this.posX, this.posY, this.width, this.height);
    }


    
      

    
}