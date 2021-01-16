
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	boy=loadImage("images/boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 stone=new Stone(200,380,20,30);
 ground=new Ground(290,580,1000,20);
 slingshot=new slingShot(stone.body,{x:200,y:380})
 tree=new Tree(500,400,50,120)
 mango1=new Mango(600,300,20,20)
 mango2=new Mango(650,250,20,20)
 mango3=new Mango(700,270,20,20)
 mango4=new Mango(600,220,20,20)
 mango5=new Mango(650,200,20,20)
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy,200,340,200,300)
  stone.display()
  ground.display()
  slingshot.display()
  tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  drawSprites();
 
}



