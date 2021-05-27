var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 

	 boxXposition = width/2 -100
	 boxYposition = 610 

	 leftboxSprite = createSprite (boxXposition, boxYposition, 20, 100);
	 leftboxSprite.shapeColor = 'red'

	 leftbox = Bodies.rectangle (boxXposition, boxYposition, 20, 100, {isStatic: true})
	 World.add (world,leftbox);

	 rightboxSprite = createSprite (boxXposition +200, boxYposition, 20, 100);
	 rightboxSprite.shapeColor= 'red'

	 rightbox = Bodies.rectangle (boxXposition, boxYposition, 20, 100, {isStatic: true})
	 World.add (world, rightbox);

	 bottomboxSprite = createSprite (boxXposition+100, boxYposition +40, 200, 20);
	 bottomboxSprite.shapeColor = 'red'

	 bottombox = Bodies.rectangle (boxXposition, boxYposition, 200, 20, {isStatic: true});
	 World.add (world, bottombox);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody, false);
	     // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



