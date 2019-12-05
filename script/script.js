var plantX = 100;
var plantY = 100;
var plantH = 200;
var flowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i=0; i < 100; i++){
    flowers.push(new Flower());
  }
}

function draw() {
  background(0);
  for (var i=0; i < 100; i++){
    flowers[i].display();
  }
}
function mouseMoved(){
  for (var i=0; i < 100; i++){
    flowers[i].grow();
  }
}

class Flower {
  constructor() {
      this.x = random(0, windowWidth)
      this.y = random(0, windowHeight)
      this.h = 200;
      this.w = 10;
  }

  display(){
    noStroke();
    fill(54,145,60);
    rect(this.x, this.y, this.w, this.h);

    fill(235, 225, 215);
    ellipse(this.x, this.y, 50);

    fill(235, 225, 215);
    ellipse(this.x, this.y, 100);

    fill(219, 207, 35);
    ellipse(this.x, this.y, 50);
  }

  grow(){
    var inc = random(0, 4);
    this.h = this.h + inc;
    this.y = this.y - inc;
  }
}
