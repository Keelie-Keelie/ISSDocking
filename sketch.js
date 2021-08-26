var spaceCraftLeft, spaceCraftRight, spaceCraftStill, spaceCraftBoth;
var issImage;
var bg, bgImage;
var iss, spaceCraft, hasDocked = false;


function preload(){

  bgImage = loadImage("images/spacebg.jpg");
  spaceCraftStill = loadImage("images/spacecraft1.png");
  spaceCraftBoth = loadImage("images/spacecraft2.png");
  spaceCraftLeft = loadImage("images/spacecraft3.png");
  spaceCraftRight = loadImage("images/spacecraft4.png");
   issImage = loadImage("images/iss.png");
}


function setup() {
  createCanvas(800,400);
  

  iss = createSprite(600,140);
  iss.addImage(issImage);
  iss.scale = 0.5;

  spaceCraft = createSprite(50,300);
  spaceCraft.addImage(spaceCraftStill);
  spaceCraft.scale = 0.15;



  
}

function draw() {
  background(bgImage);  

  if(!hasDocked){

    spaceCraft.x = spaceCraft.x+random(-1,1);
  }

  if(keyDown(LEFT_ARROW)){
    spaceCraft.addImage(spaceCraftRight);
    spaceCraft.x = spaceCraft.x-3;

  }

  if(keyDown(RIGHT_ARROW)){
    spaceCraft.addImage(spaceCraftLeft);
    spaceCraft.x = spaceCraft.x+3;
    
  }

  if(keyDown(UP_ARROW)){
    spaceCraft.addImage(spaceCraftStill);
    spaceCraft.y = spaceCraft.y-3;
    
  }

  if(keyDown(DOWN_ARROW)){
    spaceCraft.addImage(spaceCraftBoth);
   
    
  }


  if(spaceCraft.x <= (iss.x+20) && spaceCraft.y <= (iss.y+50)){
  fill("white");
  textSize(25);
  text("Docking is Successful!!", 200,200);
  hasDocked = true;
  
  }
  drawSprites();
}