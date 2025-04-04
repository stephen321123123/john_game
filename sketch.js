let ball;
let mouse;
let gameStarted = false;

function setup() {
  createCanvas(400, 600);
  noCursor();
  ball = new Ball({
    x: 10,
    y: 10,
    speed: 5,
    radius: 10,
    colour: random(255),
    angle: PI / 4
  });

  mouse = new Mouse({
    x: width/6,
    y: height * 0.8
  });
}

function draw() {
  background(220, 0, 0);

  if (!gameStarted) {
    showStartScreen();
    return; 
  }

  mouse.renderCursor();
  mouse.moveWithKeys();
  ball.drawBall();
  ball.moveBall();
  ball.bounceBall();  
}

function showStartScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text('Click to Start', width / 2, height / 2);
}

function mousePressed() {
  if (!gameStarted) {
    gameStarted = true;
  }
}
