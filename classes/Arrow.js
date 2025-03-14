class Arrow {
	constructor(x, y, rotation) {
	  // Initialize x, y, and rotation properties
	  this.x = x;
	  this.y = y;
	  this.rotation = rotation;
	}
  
	// Function to draw the arrow
	drawArrow() {
	  push();
	  // Translate the drawing origin to the arrow's position
	  translate(this.x, this.y);
	  rotate(this.rotation);
	fill(100,100,100);
	stroke(200,200,200);
	
	  rect (0,0,10,40);  
	   
	  pop();
	}
  
	// Method to rotate the arrow to always point to the center of the canvas
	rotateToCentre( targetY) {
	  // Hide the cursor
	  noCursor();
  
	  // Move the arrow with the mouse position
	  
	  this.y = mouseY;
  
	  // Calculate the difference between the arrow position and the center
	  
	  let dy = targetY - this.y;
  
	  // Calculate the angle to the center using atan2
	  this.rotation = atan2(dy);
	}
  
  }
  