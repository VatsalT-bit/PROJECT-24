const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var canvas;

function preload()
{
	
}

function setup() {
	var canvas =createCanvas(800, 700);
	engine= Engine.create();
    world = engine.world;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	 box1=new Box(700,320,200,200);
    
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("cyan");
  
  drawSprites();
  box1.display();
}


