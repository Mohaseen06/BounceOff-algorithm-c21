var fixedRect,movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 300, 50, 50);
fixedRect.shapeColor = "green";
fixedRect.velocityY = -5;

 movingRect = createSprite(400, 100, 70, 30);
movingRect.shapeColor = "green";
movingRect.velocityY = 5;

gameObject1 = createSprite(200, 300, 50, 50);
gameObject1.shapeColor = "green";
gameObject1.velocityY = -5;

 gameObject2 = createSprite(200, 100, 70, 30);
gameObject2.shapeColor = "green";
gameObject2.velocityY = 5;
}

function draw() {
  background(0);  
 
  bounceOff(movingRect,fixedRect);
  bounceOff(gameObject1,gameObject2);

  drawSprites();
}

