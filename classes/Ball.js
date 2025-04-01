class Ball {
	constructor(rotation) {
	  // Initialize  y and rotation properties
    this.colour = color(random(0,255,0), random(0,255,0), random(0,255));
	  this.positionX = random(400);
	  this.positionY = random(600);
	  this.rotation = rotation;
	}
  
	// Function to draw the mouse
	renderBall() {
        push();
        fill(this.colour);
        ellipse(this.positionX, this.positionY, 15, 15);
        pop();
      }

      movementBall(){  
        if(this.positionX > width || this.positionX < 0) { 
        xSpeed = xSpeed * -1;   //bounce ball off canvas x axis
        
        }

        if(this.positionY > height || this.positionY < 0) { 
        ySpeed = ySpeed * -1;   //bounce ball off canvas y axis
        
        }

        this.positionX = this.positionX + xSpeed;  
        this.positionY = this.positionY - ySpeed;
      }
  }


  
  