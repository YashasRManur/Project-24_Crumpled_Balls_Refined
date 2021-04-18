const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ball = new Balls(400, 300, 30);
	Ground = new Ground(800,590, width, 30);
	Left = new Bin(1200, 470, 30, 150);
	Right = new Bin(1400, 470, 30, 150);
	Down = new Bin(1300, 560, 230, 30)
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  Ball.display();
  Ground.display();
  Left.display();
  Right.display();
  Down.display();
  Force();
  drawSprites();
 
}
function Force() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(Ball.body,Ball.body.position,{x : 8.5, y : -8.5})
}
}