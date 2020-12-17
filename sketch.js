const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg = "sprites/bg1.png";

function setup(){
    var canvas = createCanvas(1500,1500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1800,20);

    ball = new Ball(500, 200, 0);
    ball2 = new Ball(560, 200, 0);
    ball3 = new Ball(620, 200, 0);
    ball4 = new Ball(680, 200, 0);
    ball5 = new Ball(740, 200, 0);

    rope = new Rope(ball.body,{x:500, y:200});
    rope2 = new Rope(ball2.body,{x:560, y:200});
    rope3 = new Rope(ball3.body,{x:620, y:200});
    rope4 = new Rope(ball4.body,{x:680, y:200});
    rope5 = new Rope(ball5.body,{x:740, y:200});
}

function draw(){
    background(0);    
    Engine.update(engine);
    ground.display();

    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();

    rope.display();    
    rope2.display();    
    rope3.display();    
    rope4.display();    
    rope5.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}