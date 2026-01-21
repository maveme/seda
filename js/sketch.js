class Walker {
  constructor(x, y, color) {
    this.pos = createVector(x, y);
    this.vel = createVector(12.5, 1);
    this.color = color;
  }
  
  update() {
    this.pos.add(this.vel)
    if (this.pos.x > width || this.pos.x < 0) {
    this.vel.x = this.vel.x * (-1); 
  }
  if (this.pos.y > height || this.pos.y < 0) {
    this.vel.y = this.vel.y * (-1); 
  }
  }
  
  show() {
//     stroke(238, 67, 127);
    noStroke();
    fill(this.color);
    circle(this.pos.x, this.pos.y, 5);
  }
}

let walker;

function setup() {
  container = document.getElementById('header-container');
  let canvas = createCanvas(container.clientWidth, 350);
  canvas.parent('header-container');

  walker = new Walker(0, 0, color(201,220,249, 150));
  walker2 = new Walker(width, height, color(249,201,226, 150));
  walker3 = new Walker(0, height, color(249,248,242, 150));
}

function draw() {
      walker.show();      
      walker.update();
      walker2.show();
      walker2.update();
      walker3.show();
      walker3.update();
}

function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
}