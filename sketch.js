let ball;
let mouse;
let gameStarted = false;
let score = 0;

const areaWidth = 800;
let numBlocks = 20;
const blockWidth = areaWidth / numBlocks;
const blockHeight = 10;
let blocks = [];

function preload(){
  meteorImg = loadImage('images/meteor.png');
}

function setup() {
  createCanvas(800, 600);
  noCursor();

  const numRows = 10;
  for (let row = 0; row < numRows; row++){ //outer loop 
    let posY = 0 + (row * 15);            //every loop adds 15 to the rows y pos 
 
  for(let i = 0; i < numBlocks; i++){   //inner loop 
    blocks.push(new Block({
      posX: i * blockWidth,
      posY: posY,
      width: 40,
      height: 15,
      colour: color(random(255,0,0), random(0,255,0), random(0,0,255)),
    }));
  }
 }

  ball = new Ball({
    x: 10,
    y: 300,
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

  for (let i = blocks.length - 1; i >= 0; i--) {
    let block = blocks[i];
  
  
    // Collision check
    if (
      ball.x + ball.radius > block.posX &&
      ball.x - ball.radius < block.posX + block.width &&
      ball.y + ball.radius > block.posY &&
      ball.y - ball.radius < block.posY + block.height
    ) {
      console.log("hit block!");
      
      // Bounce off
      ball.yspeed = -ball.yspeed;
  
      // Remove block
      blocks.splice(i, 1);
      score++;
    }
  }
  

  mouse.renderCursor();
  mouse.moveWithKeys();
  ball.drawBall();
  ball.moveBall();
  ball.bounceBall(mouse);
  ball.wall();  
  blocks.forEach(block => block.renderBlock());

  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Score: " + score, width/2 - 20, 40);
}

function showStartScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text('Click to Start', width / 2, height / 2);
}

function showEndScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text('Game Over', width / 2, height / 2);
}

function mousePressed() {
  if (!gameStarted) {
    gameStarted = true;
  } else if (ball.y > mouse.y +10){
    gameStarted = true;
  }
}
