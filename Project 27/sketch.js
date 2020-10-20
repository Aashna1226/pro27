
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobOb1, bobOb2, bobOb3, bobOb4, bobOb5, roofObject;
var rope1, rope2, rope3, rope4, rope5;
var world;



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObject= new Roof(width/2, height/4, width/7, 20);
	
	bobDiameter = 40;


	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobOb1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobOb2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobOb3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobOb4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobOb5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	rope1 = new Rope(bobOb1.body, roofObject.body,-bobDiameter*2,0);
	rope2 = new Rope(bobOb2.body, roofObject.body,-bobDiameter*1,0);
	rope3 = new Rope(bobOb3.body, roofObject.body,0,0);
	rope4 = new Rope(bobOb4.body, roofObject.body,-bobDiameter*1,0);
	rope5 = new Rope(bobOb5.body, roofObject.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(230);
	roofObject.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bobOb1.display();
	bobOb2.display();
	bobOb3.display();
	bobOb4.display();
	bobOb5.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobOb1.body,bobOb1.body.position,{x:-50,y:-45});
  
	}
}

/*function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position;
	roofBodyPosition=constraint.bodyB.position;

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}*/