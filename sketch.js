var monkeyrunning,backimg,back,ground,rock,fruitimg,fruit,fruitGroup,obstacleGroup,score;

function preload(){
  monkeyrunning=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Mon  key_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_9.png","Monkey_10.png");
  
  rock=loadImage("stone.png");
  backimg=loadImage("jungle2.png");
  fruitimg=loadImage("bananas.png");
}


function setup() {
  createCanvas(400, 400);
  monkey = createSprite (30,370,10,10);
  monkey.addAniamtion(monkeyrunning);
  back = createSprite(0,0,400,400);
  back.addImage(backimg);
  back.x=back.width/2;
  back.velocityX=-3;
  ground = createSprite(0,380,400,20);
  ground.x=ground.width/2;
  ground.velocityX=-3;
  fruitGroup=new Group();
  obstacleGroup=new Group();
  score=0;
}

function draw() {
  background(220);
  if(back.x<0){
     back.x=back.width/2
     }
  if(ground.x<0){
     ground.x=ground.width/2
     }
  
  if(fruitGroup.isTouching(monkey)){
     fruitGroup.destroyEach();
    score=score+2;
     }
  
  switch(score){
    case 10:monkey.scale=0.15;
            break;
    case 20:monkey.scale=0.20;
            break;
    case 30:monkey.scale=0.25;
            break;
            default:break        
  }
  
  if(obstacleGroup.isTouching(monkey)){
     monkey.scale=0.1;
     }
  
  spawnObstacles();
  spawnFruits();
  drawSprites();
}

function spawnFruits(){
if(frameCount%60===0){
   fruit = createSprite(400,100,10,10);
  fruit.addImage(fruitimg);
  fruit.velocityX=-3;
  fruit.lifetime=200;
  fruitGroup.add(fruit);
}
}

function spawnObstacles(){
if(frameCount%60===0){
   var obstacle = createSprite(400,380,10,10);
  obstacle.addImage(rock);
  obstacle.velocityX=-3;
  obstacleGroup.add(obstacle);
  
   }
}