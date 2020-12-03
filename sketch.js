const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, dustbinImage;
var ground;
var paper;

function preload() {
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	
	createCanvas(1400,300);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100,100,70);
	ground = new Ground (700,280,1400,10);
	dustbin1 = new Dustbin (1000,200,20,150);
	dustbin2 = new Dustbin (1090,265,200,20)
	dustbin3 = new Dustbin (1180,200,20,150);

	Engine.run(engine);
  
}

function draw() {
  
  background("lightgray");

  ground.display();
  
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  
  imageMode(CENTER);
  image(dustbinImage,1090,200,220,150);

  paper.display();
 
}

function keyPressed(){

	if (keyCode === RIGHT_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:160,y:-115})

	}

}


