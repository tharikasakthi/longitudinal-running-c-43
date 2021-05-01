var boy, bg, pond;
var boyImg, bgImg, pondImg, groud;

function preload(){

  boyImg=loadImage ("sprites/boy.png");
  bgImg= loadImage ("sprites/BG.jpg ");

}


function setup() {
  createCanvas(1000,700);
  bg= createSprite(700, 350, 50, 50);
  bg.addImage(bgImg);
  bg.scale=1.0;

  boy= createSprite(50,630, 25,25)
  boy.addImage(boyImg)
  boy.scale=0.5;

  ground=createSprite(500,690,1000,20);
  ground.invisible = false;


}


function draw() {
  background(20,255,20);  

  bg.velocityX=-6 ;

  if(bg.x<0 ){
      bg.x=bg.width /2 
  }

  if(keyDown ("space")){
      boy.velocityY=-3;
  }

  boy.velocityY = boy.velocityY + 1

  boy.collide (ground );

  drawSprites();
}

//function pond
