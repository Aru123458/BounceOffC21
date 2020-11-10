var fixedRect, movingRect;

var go1, go2, go3, go4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +0;

go1 =  createSprite(400, 100, 50, 80);
go1.shapeColor = "green";
go2 =  createSprite(500, 200, 50, 80);
go2.shapeColor = "green";
go3 =  createSprite(600, 300, 50, 80);
go3.shapeColor = "green";
go4 =  createSprite(700, 400, 50, 80);
go4.shapeColor = "green";

go1.velocityY = +5;


}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,go1);
  drawSprites();
}




