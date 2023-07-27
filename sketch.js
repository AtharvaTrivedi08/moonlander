var ground, lander, bg;
var lander_img 
var vy = 0;
var vx = 0;
var g = 0.5;

function preload(){
  lander_img = loadImage("normal.png");
  bg = loadImage("bg.png");
}

function setup(){
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(150,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  rectMode(CENTER);
}

function draw(){
  background(51);
  image(bg,0,0);

  push();
  fill(255);
  text("Vertical Velocity : "+round(vy),800,75);
  pop();

  vy = vy+g;
  lander.position.y += vy;

  drawSprites();
}