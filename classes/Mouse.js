class Mouse {
  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
  }

  renderCursor() {
    push();
  translate(this.x, this.y); 
  rectMode(CENTER);  // Optional: Makes sure the rectangle is centered around the (x, y) position
  rect(0, 0, 80, 5); // Draws a rectangle at the center (0,0), with width 80 and height 20
  pop();
  }

  moveWithKeys() {
    if (keyIsDown(65)) { 
      this.x -= 5;
    }
    if (keyIsDown(68)) { 
      this.x += 5;
    } 
    
    this.x = constrain(this.x, 40, width - 40); // learn constrain function
  }
}
