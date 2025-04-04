class Ball {
  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.speed = obj.speed;
    this.radius = obj.radius;
    this.angle = obj.angle;
    this.colour = obj.colour;

    this.vx = this.speed * cos(this.angle);
    this.vy = this.speed * sin(this.angle);
  }

  drawBall() {
    push();
    translate(this.x, this.y);  
    fill(this.colour);
    noStroke();
    ellipse(0, 0, this.radius * 2, this.radius * 2);  
    pop();
  }

  moveBall() {
    this.x += this.vx;
    this.y += this.vy;
  }

  bounceBall() {
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.vx = -this.vx;  
    }

    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.vy = -this.vy;  
    }
  }
}