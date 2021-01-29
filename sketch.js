var fairy,fairyImage;
var background,backgroundImage;
var star,starImage;
var invisibleGround;

function preload()
{
 fairyImage=loadImage("images/fairy.png");
starImage=loadImage("images/star.png");
backgroundImage=loadImage("images/starnight.png");
}


function setup() {
  createCanvas(800, 750);

 background=createSprite(1,750,800,750);
 background.addImage(backgroundImage)

fairy=createSprite(50,580,50,50);
fairy.addImage(fairyImage);
fairy.scale=0.1;



star=createSprite(710,50,20,20);
star.addImage(starImage);
star.scale=0.1;


}


function draw(){

  
  if(keyDown("RIGHT_ARROW")){
    fairy.x=fairy.x+5;
  }
  if(keyDown("LEFT_ARROW")){
    fairy.x=fairy.x-5;
  }
 if(star.y>650){

 }


  if(fairy.x>650){
    star.velocityY=6;
  }


drawSprites();
}
