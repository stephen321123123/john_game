class Mouse {
  // Constructor to initialize the mouse's (paddle's) position
  constructor(obj) {
    this.x = obj.x; // Mouse (paddle) x-coordinate
    this.y = obj.y; // Mouse (paddle) y-coordinate
  }

  // Method to render the paddle (as a rectangle) on the screen
  renderCursor() {
    push(); // Start a new drawing context to apply transformations
    translate(this.x, this.y); // Move the drawing context to the mouse's (paddle's) position
    rectMode(CENTER);  // Ensure that the rectangle is drawn from its center
    rect(0, 0, 40, 5); // Draw the paddle as a 40x5 rectangle centered at (0, 0)
    pop(); // Restore the previous drawing context
  }

  // Method to move the paddle based on keyboard input (A and D keys)
  moveWithKeys() {
    if (keyIsDown(65)) {  // If the 'A' key is pressed
      this.x -= 5;  // Move the paddle left
    }
    if (keyIsDown(68)) {  // If the 'D' key is pressed
      this.x += 5;  // Move the paddle right
    }
    
    // Constrain the paddle's x-position so it doesn't go off-screen
    this.x = constrain(this.x, 20, width - 20); 
  }
}
