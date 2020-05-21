const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ball = createSprite(250,250,10,10);
    ball.visibal = false;
}

function draw(){
    Engine.update(engine);

    ball.x = mouseX;
    ball.y = mouseY;

    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function mouseDrag(){
   if(mousePressOver(canvas)){
       ball.visibal=true;
   }

   if(keyDown("space")){
       createCanvas(400,400);
   }
}