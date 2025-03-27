let positionX;
let xSpeed;
let positionY;
let ySpeed;

function setup() {
  
  createCanvas(400, 600);
  positionX = random(400);
	positionY = random(600);
  xSpeed = 3;
	ySpeed = 3;
 
  // Create an mouse object placed in the center of the canvas
   mouse = new Mouse(width / 6, height/2);
   ball = new Ball()
}

function draw() {
  background(220,0,0);
  

  mouse.renderCursor();
  mouse.moveToMouse();
  ball.renderBall();
  ball.movementBall();  
}
