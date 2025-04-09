// global variables 
let ball;
let mouse;
let gameStarted = false; // Track if the game has started
let gameOver = false; // Track if the game is over
let score = 0; // Track the score

const areaWidth = 800; 
let numBlocks = 20; 
const numRows = 10; 
const blockWidth = areaWidth / numBlocks; 
const blockHeight = 10; 
let blocks = []; 

function preload(){
  meteorImg = loadImage('images/meteor.png'); 
}

function setup() {
  createCanvas(800, 600); 
  noCursor(); // Hide the default mouse cursor

  
  for (let row = 0; row < numRows; row++){ 
    let posY = 0 + (row * 15); // Position of each row of blocks on the y axis
    for(let i = 0; i < numBlocks; i++){   
      blocks.push(new Block({
        posX: i * blockWidth, 
        posY: posY, 
        width: 40, 
        height: 15, 
        colour: color(random(255), random(255), random(255)), 
      }));
    }
  }

  // Initialize the ball object
  ball = new Ball({
    x: 10, 
    y: 300, 
    speed: 5,
    radius: 10, 
    colour: random(255),
    angle: PI / 4 
  });

  // Initialize the mouse object (paddle)
  mouse = new Mouse({
    x: width / 4, 
    y: height * 0.8, 
  });
}


function draw() {
  background(220, 0, 0);

  // Show the start screen if the game hasn't started yet
  if (!gameStarted && !gameOver) {
    showStartScreen(); 
    return; // Stop the draw loop here and wait for user input
  }
  
  // Show the game over screen if the game is over
  if (gameOver) {
    showEndScreen();
    return; // Stop the draw loop here and wait for user input
  }

  // Check for collisions with blocks and update the score
  for (let i = blocks.length - 1; i >= 0; i--) {
    let block = blocks[i];
    if (block.checkCollision(ball)) {
      blocks.splice(i, 1); // Remove the block if it's hit
      score++; // Increase the score
    }
  }

  mouse.renderCursor();
  mouse.moveWithKeys();
  ball.drawBall();
  ball.moveBall();
  ball.bounceBall(mouse); // Check for collision with the paddle
  ball.wall();  
  blocks.forEach(block => block.renderBlock());

  // Display the score
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Score: " + score, width/2 - 20, 240);

  // End the game if the ball falls below the paddle
  if (ball.position.y > mouse.y + 10) {
    gameOver = true;
    gameStarted = false;
  }
}

// Mouse pressed event, to start the game or restart it
function mousePressed() {
  if (!gameStarted && !gameOver) {
    gameStarted = true; // Start the game
  } else if (gameOver) {
    resetGame(); // Reset the game when it's over
    gameOver = false;
    gameStarted = true;
  }
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
  text('Game Over\nClick to Restart', width / 2, height / 2); 
}

// Reset game elements (ball, paddle, blocks, score) to start a new game
function resetGame() {
  score = 0; // Reset the score
  blocks = []; // Clear the blocks array

  // Recreate blocks
  for (let row = 0; row < numRows; row++) {
    let posY = 0 + (row * 15);
    for (let i = 0; i < numBlocks; i++) {
      blocks.push(new Block({
        posX: i * blockWidth,
        posY: posY,
        width: 40,
        height: 15,
        colour: color(random(255, 0, 0), random(0, 255, 0), random(0, 0, 255)),
      }));
    }
  }

  // Reinitialize the ball object
  ball = new Ball({
    x: 10,
    y: 300,
    speed: 5,
    radius: 10,
    colour: random(255),
    angle: PI / 4
  });

  // Reinitialize the mouse object (paddle)
  mouse = new Mouse({
    x: width / 6,
    y: height * 0.8,
  });
}
