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
	  // Rotate by the rotation value
	  rotate(this.rotation);
	  // Draw the arrow shape
	  line(-50, -25, 0, -25);   // Left part of the arrow
	  line(0, -25, 0, -50);      // Arrowhead
	  line(0, -50, 50, 0);       // Right part of the arrow
	  line(50, 0, 0, 50);        // Bottom part of the arrow
	  line(0, 50, 0, 25);        // Arrow tail
	  line(0, 25, -50, 25);      // Left tail
	  line(-50, 25, -50, -25);   // Left side of the arrow
	  pop();
	}
  
	// Method to rotate the arrow to always point to the center of the canvas
	rotateToCentre(targetX, targetY) {
	  // Hide the cursor
	  noCursor();
  
	  // Move the arrow with the mouse position
	  this.x = mouseX;
	  this.y = mouseY;
  
	  // Calculate the difference between the arrow position and the center
	  let dx = targetX - this.x;
	  let dy = targetY - this.y;
  
	  // Calculate the angle to the center using atan2
	  this.rotation = atan2(dy, dx);
	}
  
  }
  