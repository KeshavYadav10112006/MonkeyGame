var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var play = 1
var end = 0
var gameState = play

function preload(){
  
  
    monkey_running =                    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");
    
}


function setup() {
    createCanvas(400,400);

    //creating ground
    ground = createSprite(400,350,900,10)
    ground.velocityX = -4
    ground.X = ground.width/2

    //createing monkey
    monkey = createSprite(80,315,20,20)
    monkey.addAnimation("monkey" , monkey_running)
    monkey.scale = 0.1

    FoodGroup = new Group();
    obstacleGroup = new Group();
 
  

}


function draw() {
    background(210)
  
  if(gameState === play){
    
        if(frameCount%80===0){
      fruits()
    }
        if(frameCount%300===0){
      obs()
    }
    
        if(keyDown("space")&&monkey.y>312) {
      monkey.velocityY = -15;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground)
    
     if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach()
    
  }
  if(monkey.isTouching(obstacleGroup)){
    monkey.destroy(monkey)
    gameState= end
    
  }
    
  }
  else if(gameState === end){
    
    ground.velocityX = 0
    
  }
    

  
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
     // console.log(monkey.y)
  
 
    drawSprites()
}

function fruits(){
  
  var banana = createSprite(300,200,20,20)
  banana.addImage("banana" , bananaImage)
  banana.scale = 0.1
  banana.y = Math.round(random(120,200))
  banana.velocityX = -4
  
  FoodGroup.add(banana)
  
}

function obs(){
  var obstacle = createSprite(300,315,20,20)
  obstacle.addImage("obstacle" , obstacleImage)
  obstacle.scale = 0.2
  obstacle.velocityX = -4
  
  obstacleGroup.add(obstacle)
  
}