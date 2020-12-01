var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var red1,red2,red3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	red1=createSprite(width/2, height-45, 200,20);
	red2=createSprite(width/2+100, height-85, 20,100);
	red3=createSprite(width/2-100, height-85, 20,100);

	red1.shapeColor="Red";
	red2.shapeColor="Red";
	red3.shapeColor="Red";



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,friction:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	red1Soul=Bodies.rectangle(width/2, height-45, 200,20 , {isStatic:true} );
	World.add(world, red1Soul);

	red2Soul=Bodies.rectangle(width/2+100, height-85, 20,100, {isStatic:true} );
	World.add(world, red2Soul);

	red3Soul=Bodies.rectangle(width/2-100, height-85, 20,100, {isStatic:true} );
	World.add(world, red3Soul);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  red1.x=red1Soul.position.x;
  red1.y=red1Soul.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic(packageBody,false);
    
  }
}



