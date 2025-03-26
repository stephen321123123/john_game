class Mouse {
	constructor(x, y) {
	  // Initialize  y and rotation properties
	  this.x = x;
	  this.y = 500;
	  
	}
  
	// Function to draw the mouse
	renderCursor() {
	  push();

	  translate(this.x, this.y);

	  fill(225,197,91);
	  stroke(100);

	  beginShape();
	  vertex(40,20);
	  vertex(-40,20);
	  vertex(-40,40);
	  vertex(40,40);
	  endShape();

	  pop();
	}
  
	
	moveToMouse(targetX) {
      noCursor()
	  this.x = mouseX; //y pos of rect moves with y pos of mouse
	  let dx = targetX - this.x;
	}
  }
  