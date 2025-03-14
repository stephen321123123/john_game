class Mouse {
	constructor(x, y, rotation) {
	  // Initialize x, y, and rotation properties
	  this.x = x;
	  this.y = y;
	  this.rotation = rotation;
	}
  
	// Function to draw the mouse
	drawMouse() {
	  push();
	  // Translate the drawing origin to the mouse's position
	  translate(this.x, this.y);
	  rotate(this.rotation);
	fill(100,100,100);
	stroke(200,200, 200);
	
	  rect (0,0,10,40);  
	   
	  pop();
	}
  
	// Method to rotate the mouse to always point to the center of the canvas
	rotateToCentre( targetY) {
	  // Hide the cursor
	  noCursor();
  
	  // Move the mouse with the mouse position
	  
	  this.y = mouseY;
  
	  // Calculate the difference between the mouse position and the center
	  
	  let dy = targetY - this.y;
  
	  // Calculate the angle to the center using atan2
	  this.rotation = atan2(dy);
	}
  
  }
  