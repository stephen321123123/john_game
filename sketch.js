let arrow;

var positionX;
var xSpeed;
var positionY;
var ySpeed;

function setup() {
  createCanvas(800, 400);
  positionX = random(400);
	positionY = random(400);
  xSpeed = 2;
	ySpeed = 3;
 
  
  // Create an arrow object placed in the center of the canvas
  arrow = new Arrow(width / 6, height / 2, 0);
}

function draw() {
  background(220,0,0);

  


// Draw the arrow
  arrow.drawArrow();
  // Rotate the arrow to face the mouse
  arrow.rotateToCentre();




  // When the ball passes either side of the canvas, TURNAROUND
  if(positionX > width || positionX < 0) { 
    xSpeed = xSpeed * -1; 
		//positionX = positionX - xSpeed; 
  }
    
  if(positionY > height || positionY < 0) { 
    ySpeed = ySpeed * -1;
		//positionY = positionY - ySpeed;
		// positionX = positionX + xSpeed; 
  }
  // We always need to be moving
 positionX = positionX + xSpeed;  
 positionY = positionY - ySpeed;
  fill(0);
  ellipse(positionX, positionY, 10, 10);

  

  
}
