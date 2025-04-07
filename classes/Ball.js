class Ball {
  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.speed = obj.speed;
    this.radius = obj.radius;
    this.colour = obj.colour;
    this.angle = obj.angle;
    this.xspeed = this.speed * cos(this.angle);
    this.yspeed = this.speed * sin(this.angle);
  }

  drawBall() {
    fill(this.colour);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2); // Ball radius * 2 for full diameter
  }

  moveBall() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }


  //checks if my ball has collided with the paddle
  bounceBall(mouse) {
    let mouseLeft = mouse.x - 20;  //-40 as the paddle is 80 wide
    let mouseRight = mouse.x + 20;
    let mouseTop = mouse.y - 0;
    let mouseBottom = mouse.y + 0;

    if (this.x - this.radius < mouseRight && 
        this.x + this.radius > mouseLeft &&
        this.y + this.radius > mouseTop && 
        this.y - this.radius < mouseBottom) {
      
      this.yspeed = -this.yspeed; 
    }
  }

  
  wall() {
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.xspeed = -this.xspeed; 
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.yspeed = -this.yspeed; 
    }
  }
}
