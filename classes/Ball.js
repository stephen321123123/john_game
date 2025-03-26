class Ball {
	constructor(x, y, rotation) {
	  // Initialize  y and rotation properties
      this.x = x;
	    this.y = y;
      this.colour = (200,200,200);
	  positionX = random(400);
	  positionY = random(600);
	  this.rotation = rotation;
	}
  
	// Function to draw the mouse
	renderBall() {
        push();
        translate(this.x, this.y);
        fill(this.colour);
        ellipse(positionX, positionY, 15, 15);
        pop();
      }

      movementBall(){  
        if(positionX > width || positionX < 0) { 
        xSpeed = xSpeed * -1;   //bounce ball off canvas x axis
        }

        if(positionY > height || positionY < 0) { 
        ySpeed = ySpeed * -1;   //bounce ball off canvas y axis
        }

        positionX = positionX + xSpeed;  
        positionY = positionY - ySpeed;
      }
  }
  