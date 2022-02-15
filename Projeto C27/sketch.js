
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(1365,653);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Bodies.rectangle(652,500,600,20,option);
  World.add(world,ground);
  //box1 = new Box(200,100,50,50);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(
    new Box(mouseX,mouseY,50,50)
    )
}

function draw() {
  background("lightblue");
  fill ("cyan");
  rect(ground.position.x,ground.position.y,600,20);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();
}
}
