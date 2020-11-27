  
var bullet
var wall
var speed
var weight
var damage
var thickness
function setup() {
  createCanvas(1600,400);
 speed = random(223,321);
weight = random(30,52);
thickness=random(22,83)
   bullet = createSprite(-50, 200, 50, 50);
   bullet.velocityX=speed;
  wall = createSprite(800, 200, 50, 200);
  wall.shapeColor="white"
damage =0.5*speed*speed*weight/(thickness*thickness*thickness)

}

function draw() {
  background(15);  
  text("damage =         =",20,75)
  text("speed = ",250,50)
  text("thickness = ",250,75)
  text("weight = ",250,100)
  text((Math.round(damage)),80,75)
  text((Math.round(speed)),300,50)
  text((Math.round(thickness)),310,75)
  text((Math.round(weight)),300,100)
  text(bullet.shapeColor,120,75)


  if(bullet.x >700
    &&damage<10){
        bullet.shapeColor="green"
        bullet.velocityX=0;
    }
    if(bullet.x>700
      &&damage>10){
        bullet.shapeColor="red"
        bullet.velocityX=0;
      }
    
    
 drawSprites();
}