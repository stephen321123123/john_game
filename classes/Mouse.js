class Mouse {
  constructor(obj) {
    this.x = obj.x; 
    this.y = obj.y; 
  }

  renderCursor() {
    push(); 
    translate(this.x, this.y); 
    rectMode(CENTER);  // Ensure that the rectangle is drawn from its center
    rect(0, 0, 40, 5); 
    pop(); 
  }

 
  moveWithKeys() {
    if (keyIsDown('A'.charCodeAt(0))) {  // If the 'A' key is pressed and held
      this.x -= 5;  
    }
    if (keyIsDown('D'.charCodeAt(0))) {  // If the 'D' key is pressed and held
      this.x += 5;  
    }
    
    // Constrain the paddle's x-position so it doesn't go off-screen
    this.x = constrain(this.x, 20, width - 20); 
  }
}
