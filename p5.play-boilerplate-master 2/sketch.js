var Walk, walk_animation, walk2_animation
var edges
var Idle, Idle_animation
var Base
var Base2
var obj1, obj1P
var BG, BG_Img
//var HorizonGrass, Hor_Img



  



function preload() {
  walk_animation = loadAnimation("SideWalk1.png", "SideWalk2.png", "SideWalk3.png")
  walk2_animation = loadAnimation("OtherSideWalk1.png", "OtherSideWalk2.png", "OtherSideWalk3.png")
  BG_Img = loadImage("forest.png")
  //Hor_Img = loadImage("HorizonGrass.png")

 
  Idle_animation = loadAnimation("Idle1.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
 //BG = createSprite(width / 2, height / 3.5, width, height)
  //BG.scale = 1
  //BG.addImage("Forest", BG_Img)

  //HorizonGrass = createSprite(width / 3, 716 + 20, width, 10 )
  
  obj1 = createSprite(200, 420, 20, 20)
  obj1P = createSprite(450, 420, 50, 20)
  obj1P.shapeColor = "Blue"
 obj1P.visible = false

 
  
  



Walk = createSprite(width / 2, height / 2)
Walk.addAnimation("TylerWalk", walk_animation)
Walk.addAnimation("TylerWalk2", walk2_animation)
Walk.addAnimation("Idle", Idle_animation)
Walk.scale = .75
//HorizonGrass.addImage("Grass", Hor_Img)
//HorizonGrass.index = 3



Base = createSprite(width / 3, 716 + 20, width, 10 )
Base.visible = false
Base.shapeColor =("Green")

Base2 = createSprite(25, 350, 70, 30 )
Base2.shapeColor =("Blue")

////Base3 = createSprite(width / 3, height / 2 + 10, width, 10 )
//Base3.shapeColor =("Green")

Base4 = createSprite(25, 400, 75, 120 )
Base4.shapeColor =("Green")

//Base5 = createSprite(width / 3, height / 2 + 25, width, 20 )
//Base5.shapeColor =("Green")






edges = createEdgeSprites()

}

function draw() {
  background(255,135,134);
  

  //Walk.addImage("WAlk1.png")

  image(BG_Img, 0, 0, width, height)

  text(mouseX + ", " + mouseY, mouseX, mouseY)
 
  Movement()

  //camera.positon.x = Walk.x
  //camera.positon.y = Walk.y

  if(obj1P.visible === true){

    Walk.collide(obj1P)
  }

  if(Walk.isTouching(obj1)){

   
    obj1P.visible = true
  }

  



  
  

  Walk.collide(Base)
  Base2.bounce  (Walk)
  
  



  drawSprites();
}

function Movement(){
  if(keyWentUp("D") || keyWentUp("A")){

    Walk.velocityX = 0 

    Walk.changeAnimation("Idle", Idle_animation)

    
  }

  Walk.collide(Base)

  

  if(keyWentDown("D")){

    Walk.velocityX = 5 

    Walk.changeAnimation("TylerWalk2", walk2_animation)

    
    

    
  }

  if(keyWentUp("W")){

    Walk.velocityY = -12
    
  }

  Walk.velocityY = Walk.velocityY + 0.5



  if(keyWentDown("A")){

    Walk.velocityX = -5

    Walk.changeAnimation("TylerWalk", walk_animation)
  

    

    
  }


}