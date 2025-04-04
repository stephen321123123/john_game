class Mouse {
  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
  }

  renderCursor() {
    push();

    translate(this.x, this.y); 
    beginShape();
    vertex(40, 20);
    vertex(-40, 20);
    vertex(-40, 40);
    vertex(40, 40);
    endShape(CLOSE); 

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
