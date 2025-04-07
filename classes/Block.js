class Block {
    constructor(obj){
        this.posX = obj.posX;
        this.posY = obj.posY;
        this.colour = obj.colour;
    }

    renderBlock(){
        fill (this.colour)
        rect(this.posX, this.posY, 40, 15);
    }
}