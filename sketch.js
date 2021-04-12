const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var box2;
var canvas;
var ground;
var hammer;
var circle;

function preload()
{
	
}

function setup() {
	var canvas =createCanvas(1000,500);
	engine= Engine.create();
    world = engine.world;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	 box1=new Box(700,320,90,95);
	 box2= new Box(200,400,200,40);
	 ground = new Ground(500,495,998,10);
	 hammer= new Hammer (100,100,100,200);
	 circle= new Round(900,450,70);
    
	Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  background("cyan");
  
  drawSprites();
  box1.display();
  box2.display();
  ground.display();
  hammer.display();
  circle.display();
}