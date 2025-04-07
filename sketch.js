let ball;
let mouse;
let gameStarted = false;

const areaWidth = 800;
let numBlocks = 20;
const blockWidth = areaWidth / numBlocks;
const blockHeight = 10;
let blocks = [];

function setup() {
  createCanvas(800, 600);
  noCursor();

  for(let i = 0; i < numBlocks; i++){
    blocks.push(new Block({
      posX: i * blockWidth,
      posY: 100,
      colour: color(random(255,0,0), random(0,255,0), random(0,0,255)),
    }));
  }
  for(let i = 0; i < numBlocks; i++){
    blocks.push(new Block({
      posX: i * blockWidth,
      posY: 140,
      colour: color(random(255,0,0), random(0,255,0), random(0,0,255)),
    }));
  }

  ball = new Ball({
    x: 10,
    y: 10,
    speed: 5,
    radius: 10,
    colour: random(255),
    angle: PI / 4
  });

  mouse = new Mouse({
    x: width / 6,
    y: height * 0.8,
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
  ball.bounceBall(mouse);
  ball.wall();  

  blocks.forEach(block => block.renderBlock());
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
