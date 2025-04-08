// Declare global variables for ball, mouse, game state, score, and blocks
let ball;
let mouse;
let gameStarted = false; // Track if the game has started
let gameOver = false; // Track if the game is over
let score = 0; // Track the score

const areaWidth = 800; // Width of the game area
let numBlocks = 20; // Number of blocks in each row
const numRows = 10; // Number of rows of blocks
const blockWidth = areaWidth / numBlocks; // Width of each block
const blockHeight = 10; // Height of each block
let blocks = []; // Array to store all blocks

// Preload images or assets
function preload(){
  meteorImg = loadImage('images/meteor.png'); // Preload meteor image (if needed)
}

// Setup function to initialize the canvas and game elements
function setup() {
  createCanvas(800, 600); // Create a canvas of size 800x600
  noCursor(); // Hide the default mouse cursor

  // Create blocks and populate them in the array
  for (let row = 0; row < numRows; row++){ 
    let posY = 0 + (row * 15); // Position of each row of blocks
    for(let i = 0; i < numBlocks; i++){   
      blocks.push(new Block({
        posX: i * blockWidth, // X position of each block
        posY: posY, // Y position of the block
        width: 40, // Width of the block
        height: 15, // Height of the block
        colour: color(random(255), random(255), random(255)), // Random color for each block
      }));
    }
  }

  // Initialize the ball object
  ball = new Ball({
    x: 10, // X position
    y: 300, // Y position
    speed: 5, // Speed of the ball
    radius: 10, // Radius of the ball
    colour: random(255), // Random color for the ball
    angle: PI / 4 // Initial angle of the ball
  });

  // Initialize the mouse object (paddle)
  mouse = new Mouse({
    x: width / 4, // X position
    y: height * 0.8, // Y position (near the bottom)
  });
}

// Draw function, called continuously to update the game state
function draw() {
  background(220, 0, 0); // Set the background color

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

  // Update mouse (paddle) position and render it
  mouse.renderCursor();
  mouse.moveWithKeys();

  // Update ball position and render it
  ball.drawBall();
  ball.moveBall();
  ball.bounceBall(mouse); // Check for collision with the paddle
  ball.wall();  // Check for collisions with the walls

  // Render all blocks
  blocks.forEach(block => block.renderBlock());

  // Display the score
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("Score: " + score, width/2 - 20, 40);

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

// Display the start screen with instructions
function showStartScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text('Click to Start', width / 2, height / 2); // Show the start message
}

// Display the end screen with game over message
function showEndScreen() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text('Game Over\nClick to Restart', width / 2, height / 2); // Show the end message
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
