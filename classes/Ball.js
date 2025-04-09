class Ball {
  
  constructor(obj) {
    this.position = createVector(obj.x, obj.y); 
    this.speed = obj.speed; 
    this.radius = obj.radius; 
    this.colour = obj.colour; 
    this.angle = obj.angle; 
    this.velocity = createVector(this.speed * cos(this.angle), this.speed * sin(this.angle)); 
  }

  drawBall() {
    push(); 
    translate(this.position.x, this.position.y); 
    image(meteorImg, -this.radius, -this.radius, this.radius * 2, this.radius * 2); 
    pop(); 
  }

  moveBall() {
    this.position.add(this.velocity); // Add velocity to the ball's current position (move the ball)
  }

  bounceBall(mouse) {
    let mouseLeft = mouse.x - 20;  
    let mouseRight = mouse.x + 20; 
    let mouseTop = mouse.y;
    let mouseBottom = mouse.y; 

    // Check if the ball is colliding with the paddle (mouse)
    if (this.position.x - this.radius < mouseRight &&
        this.position.x + this.radius > mouseLeft &&
        this.position.y + this.radius > mouseTop &&
        this.position.y - this.radius < mouseBottom) {
      
      this.velocity.y = -this.velocity.y;  // Reverse the vertical direction of the ball to simulate a bounce
    }
  }

  
  wall() {
    
    if (this.position.x - this.radius < 0 || this.position.x + this.radius > width) {
      this.velocity.x = -this.velocity.x;  // Reverse the horizontal direction (bounce)
    }

    // Check if the ball hits the top or bottom wall
    if (this.position.y - this.radius < 0 || this.position.y + this.radius > height) {
      this.velocity.y = -this.velocity.y;  // Reverse the vertical direction (bounce)
    }
  }
}
