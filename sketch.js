
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
     
	//Create the Bodies Here.

      var ball_options= {
      restitution:0.3,
      friction:0,
      density:1.2,
      isStatic:false
      }
   ball= Bodies.circle(200,450,40,ball_options);
   groundObj = new Ground(width/2,670,width,20)
   leftside= new Ground(1100,600,20,120);
   rightside= new Ground(1350,600,20,120);
   
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine); 
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(200,450,40,40)
  drawSprites();
 groundObj.show();
 rightside.show();
 leftside.show();
}

function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
}

}

