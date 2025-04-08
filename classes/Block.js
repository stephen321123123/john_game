class Block {
    // Constructor to initialize the block's position, size, and color
    constructor(obj) {
      this.posX = obj.posX; // Block's x-coordinate
      this.posY = obj.posY; // Block's y-coordinate
      this.width = obj.width; // Block's width
      this.height = obj.height; // Block's height
      this.colour = obj.colour; // Block's color
    }
  
    // Method to render the block on the screen
    renderBlock() {
      fill(this.colour); // Set the fill color to the block's color
      rect(this.posX, this.posY, this.width, this.height); // Draw the block at its position with its dimensions
    }
  
    // Method to check for a collision with the ball
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
      return false; // No collision
    }
  }
  