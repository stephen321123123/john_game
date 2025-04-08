class Ball {
  // Constructor to initialize the ball's properties
  constructor(obj) {
    this.position = createVector(obj.x, obj.y); // Ball's position using a vector (x, y)
    this.speed = obj.speed; // Speed of the ball
    this.radius = obj.radius; // Radius of the ball
    this.colour = obj.colour; // Ball's color (not used for drawing as the image is used)
    this.angle = obj.angle; // Angle of the ball's movement
    this.velocity = createVector(this.speed * cos(this.angle), this.speed * sin(this.angle)); // Velocity vector based on speed and angle
  }

  // Method to draw the ball using an image (meteorImg)
  drawBall() {
    push(); // Start a new drawing context to apply transformations
    translate(this.position.x, this.position.y); // Move to the ball's position
    image(meteorImg, -this.radius, -this.radius, this.radius * 2, this.radius * 2); // Draw the ball as an image, centered at the ball's position
    pop(); // Restore the previous drawing context
  }

  // Method to update the ball's position based on its velocity
  moveBall() {
    this.position.add(this.velocity); // Add velocity to the ball's current position (move the ball)
  }

  // Method to handle the bounce of the ball when it hits the paddle (mouse)
  bounceBall(mouse) {
    let mouseLeft = mouse.x - 20;  // Left edge of the paddle (mouse)
    let mouseRight = mouse.x + 20; // Right edge of the paddle (mouse)
    let mouseTop = mouse.y; // Top edge of the paddle (mouse)
    let mouseBottom = mouse.y; // Bottom edge of the paddle (mouse)

    // Check if the ball is colliding with the paddle (mouse)
    if (this.position.x - this.radius < mouseRight &&
        this.position.x + this.radius > mouseLeft &&
        this.position.y + this.radius > mouseTop &&
        this.position.y - this.radius < mouseBottom) {
      
      this.velocity.y = -this.velocity.y;  // Reverse the vertical direction of the ball to simulate a bounce
    }
  }

  // Method to check if the ball hits the walls of the canvas and bounce off
  wall() {
    // Check if the ball hits the left or right wall
    if (this.position.x - this.radius < 0 || this.position.x + this.radius > width) {
      this.velocity.x = -this.velocity.x;  // Reverse the horizontal direction (bounce)
    }

    // Check if the ball hits the top or bottom wall
    if (this.position.y - this.radius < 0 || this.position.y + this.radius > height) {
      this.velocity.y = -this.velocity.y;  // Reverse the vertical direction (bounce)
    }
  }
}
