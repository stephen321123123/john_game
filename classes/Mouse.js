let cursorImage;

class Mouse {
  constructor(x, y) {
    this.x = x;
    this.y = 500;
  }

  // Preload the image
  static preload() {
    cursorImage = loadImage('images/scotland.jpg'); // Replace with the actual image path
  }

  renderCursor() {
    push();

    translate(this.x, this.y); // Translate to the custom mouse position

    // Define the coordinates of the custom cursor shape using vertexes
    let shapeWidth = 80;  // Width of the custom cursor
    let shapeHeight = 20; // Height of the custom cursor

    // Draw the shape using vertexes
    beginShape();
    vertex(40, 20);
    vertex(-40, 20);
    vertex(-40, 40);
    vertex(40, 40);
    endShape(CLOSE); // Close the shape

    // Adjust the position to correctly center the image inside the shape
    // Draw the image to fill the shape
    imageMode(CORNER); // Align image to the top-left corner of the shape
    image(cursorImage, -shapeWidth / 2, -shapeHeight / 2, shapeWidth, shapeHeight); // Position and scale the image

    pop();
  }

  moveToMouse() {
    noCursor();  // Hides the system cursor

    // Smoothly move towards the mouse position
    this.x = lerp(this.x, mouseX, 0.5);
    
  }
}
