class Block {
    constructor(obj) {
      this.posX = obj.posX; 
      this.posY = obj.posY; 
      this.width = obj.width;
      this.height = obj.height; 
      this.colour = obj.colour;
    }
  
    renderBlock() {
      fill(this.colour); 
      rect(this.posX, this.posY, this.width, this.height); 
    }
  
    checkCollision(ball) {
      // Check if the ball intersects with the block
      if (
        ball.position.x + ball.radius > this.posX && // Ball's right edge is beyond the block's left edge
        ball.position.x - ball.radius < this.posX + this.width && // Ball's left edge is before the block's right edge
        ball.position.y + ball.radius > this.posY && // Ball's bottom edge is beyond the block's top edge
        ball.position.y - ball.radius < this.posY + this.height // Ball's top edge is before the block's bottom edge
      ) {
        ball.velocity.y = -ball.velocity.y; // Reverse the ball's vertical direction (bounce effect)
        return true; // Indicate a collision occurred
      }
      return false; 
    }
  }
  