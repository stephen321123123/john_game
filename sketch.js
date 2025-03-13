let arrow;

function setup() {
  createCanvas(400, 400);
  // Create an arrow object placed in the center of the canvas
  arrow = new Arrow(width / 2, height / 2, 0);
}

function draw() {
  background(220,0,0);

  // Rotate the arrow to face the mouse
  arrow.rotateToCentre();

  // Draw the arrow
  arrow.drawArrow();

  
}
