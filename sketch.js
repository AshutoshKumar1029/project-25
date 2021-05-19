const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var side1, side2 ,side3;

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    side1 = new Box(600,675,250,20);
    side2 = new Box(485,550,20,250);
    side3 = new Box(715,550,20,250);
    paperObject = new Ball(200,600,20)
    ground = new Ground(400,height-5,800,20);

}

function draw(){
    background("lightgrey");
    Engine.update(engine);
    console.log(side1.position)
    paperObject.display();
    side1.display();
    side2.display();
    side3.display();
    
    
    ground.display();
}
function keyPressed(){
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:35,y:-75});
    }
}

