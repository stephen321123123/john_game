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


  bounceBall(mouse) {

    let mouseLeft = mouse.x - 40;  //-40 as the paddle is 80 wide
    let mouseRight = mouse.x + 40;
    let mouseTop = mouse.y + 20;
    let mouseBottom = mouse.y + 40;

    
    if (this.x - this.radius < mouseRight && this.x + this.radius > mouseLeft &&
        this.y + this.radius > mouseTop && this.y - this.radius < mouseBottom) {
      
 
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
