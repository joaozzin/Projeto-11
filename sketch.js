var chao,chaoi,homem,homemi,borda1,borda2;

function preload(){
  
  chaoi = loadImage("path.png")

  homemi = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){

  createCanvas(400,400);
  
  chao =  createSprite(200,200);
  chao.addImage(chaoi);
  chao.velocityY = 5;

  homem = createSprite(200,350);
  homem.addAnimation("andar",homemi);
  homem.scale = 0.05;

  borda1 = createSprite(30,200,60,400);
  borda1.visible = false;

  borda2 = createSprite(400-30,200,60,400);
  borda2.visible = false;

}

function draw() {

  background(0);
  
  homem.x = World.mouseX;

  homem.collide(borda1);
  homem.collide(borda2);

  if(homem.x < 0){
    
    homem.x = 100;  
  }

  if(homem.x > 400){
  
    homem.x = 300;  
  }

  if(chao.y>400){
    
    chao.y = height/2;
  }

  drawSprites();

}