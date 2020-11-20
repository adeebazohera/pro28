
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree1, stone,ground, chain1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13,mango14;
var world,boy;
function preload(){
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    
	ground = new Ground(600,490,1200,15);

    tree1 = new tree(940,535);
	
	mango1 = new Mango(850,160,50);
	mango2 = new Mango(850,100,50);
	mango3 = new Mango(770,160,50);
	mango4 = new Mango(940,120,50);
	mango5 = new Mango(1025,150,50);
	mango6 = new Mango(1110,170,50);
	mango7 = new Mango(885,70,50);
	mango8 = new Mango(895,190,50);
	mango9 = new Mango(800,195,50);
	mango10 = new Mango(960,160,50);
	mango11 = new Mango(980,40,50);
	mango12 = new Mango(1140,200,50);
	mango13 = new Mango(1000,85,50);
	mango14 = new Mango(1060,115,50);

	//boy = new Boy(225,420,270,270);
	
	stone = new Stone(180,343,50);
	
	chain1 = new Chain(stone.body,{x:180,y:343});
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(43, 215, 255);
  image(boy ,150,250,200,300);
  
  ground.display();
  tree1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  
 

  stone.display();
  chain1.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
  detectollision(stone,mango13);
  detectollision(stone,mango14);
  
 // drawSprites();
  //text(mouseX+" , "+mouseY, mouseX, mouseY);
  textSize(18);
  text("Press space to get a second chance!!",50,80);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain1.fly();
}
function detectollision(lstone,lmango){
	stoneBodyPos = lstone.body.position;
	mangoBodyPos = lmango.body.position;
	
	var distance = dist(stoneBodyPos.x,stoneBodyPos.y,mangoBodyPos.x,mangoBodyPos.y);
	if(distance <= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
	if(keyCode == 32){
		chain1.attach(stone.body);
	}
}




