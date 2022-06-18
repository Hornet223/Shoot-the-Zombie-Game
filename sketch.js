var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg;
var heartImg, heart2Img, heart3Img;
var explosion_sound, lose_sound, win_sound;
var bat;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  
  explosion_sound = loadSound("assets/explosion.mp3")
  lose_sound = loadSound("assets/lose.mp3")
  win_sound = loadSound("assets/win.mp3")

  bgImg = loadImage("assets/bg.jpeg")

  zombieImg = loadImage("assets/zombie.png")

  heartImg = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  batImg = loadAnimation("assets/bat1_png.png", "assets/bat2_png.png", "vecteezy_bat_1203462.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   bat = createSprite(50, 80);
   bat.addAnimation("bat", batImg)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
spawnZombies()

drawSprites();

}
function spawnZombies(){
  if(frameCount % 80 === 0){
    var zombie = createSprite(windowWidth - 50, random(400,700),50,50);
    zombie.addImage(zombieImg);
    zombie.velocityX = -8;
    zombie.scale = 0.15;

  }
}