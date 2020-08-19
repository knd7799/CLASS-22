const Engine= Matter.Engine;//used to create the physics engine
const World=Matter.World;// create physical world and the objects
const Bodies= Matter.Bodies;//physical objects

var engine,world;
var object;
var ground ;
var ball;
function setup(){
var canvas=createCanvas(400,400);
engine=Engine.create();
world=engine.world;
 

var object_options={
    isStatic: true
}

var ball_options={
    restitution:1
}
ground=Bodies.rectangle(200,390,200,20,object_options);
World.add(world,ground); 

ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
//console.log(object);
//console.log(object.type);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}