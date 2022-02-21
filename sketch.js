var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var  power,energy;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  energyImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
    boy = createSprite(180,340,30,30);
    boy.scale=0.08;
    boy.addAnimation("JakeRunning",boyImg);
  
    energy = createSprite(180,100,25,25);
    energy.addImage(energyImg);
    energy.scale=0.15;
    energy.velocityY = 3;
leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  

  if(energy.isTouching(boy) ){
    power = createSprite(10,200,50,50);

    power.addImage(powerImg);
    power.scale=0.3;
    power.velocityX = 4;
    energy.destroy();
    }
         
      

  //code to reset the background

  /*if(path.y > 400 ){
    path.y = height/2;
  }*/

  if(path.y > 400 ){
   
  path.y = height/2;
  }

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
