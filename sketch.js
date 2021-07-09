var sleep;
function preLoad(){
  bg= loadImage("iss.png");
  sleep1= loadImage("sleep.png");
  brush= loadAnimation("brush.png");
  bath= loadAnimation("bath1.png","bath2.png");
  drink= loadAnimation("drink1.png","drink2.png");
  eat= loadAnimation("eat1.png","eat2.png");
 gym= loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  move= loadAnimation("brush.png","bath1.png");
}


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
astronaut=createSprite(300,230)
astronaut.addImage("sleeping",sleep1);
astronaut.scale=0.1;
}
 
function draw() {
  background(255,255,255); 
  if(keyDown("UP_ARROW")){
    //astronaut.addAnimation("brushing",brush);
    //astronaut.changeAnimation("brushing")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  } 
  drawSprites();
}