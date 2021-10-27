


//Create namespace for Engine
const Engine = Matter.Engine
//Create namespace for World
const World = Matter.World
//Create namespace for Bodies
const Bodies = Matter.Bodies
//Create namespace for Body
const Body = Matter.Body

var engine,world
function setup() {
  createCanvas(400,400);
//create the engine
engine=Engine.create()
  //Add world to the engine
  world=engine.world

  var ball_options={
    restitution:1
  }
   
  ball=Bodies.circle(100,100,30,ball_options);
  World.add(world,ball);
  
  var ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,380,400,10,ground_options);
  World.add(world,ground);
  
  ground1=Bodies.rectangle(200,80,400,10,ground_options);
  World.add(world,ground1);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  
  //write a rectangle function to display ground.
 ellipse(ball.position.x,ball.position.y,30)

rect(ground.position.x,ground.position.y,400,20);
rect(ground1.position.x,ground1.position.y,400,20);
  
  
}

