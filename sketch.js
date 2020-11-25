let width = 400;
let height = 300;


function setup() {
  createCanvas(width,height);
  background(225,0,225);
  rectMode(CENTER);
  fill(0,0,255);
  rect(200,150,150,150);
}

function draw() {
  if (mouseIsPressed) {
    rectMode(CENTER);
    fill(random(0,255),random(0,255),random(0,255));
    rect(200,150,150,150);
  
  }
}

