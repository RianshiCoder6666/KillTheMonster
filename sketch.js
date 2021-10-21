const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("background.png");
}

function setup() {
  createCanvas(1366,625);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700,625,1400,20);

  hero = new Hero(500,800,250);
  rope = new Rope(hero.body,{x: 500,y: 50});
  monster = new Monster(1200,600,300);

  //tower1
  box1 = new Box(700, 100, 70, 70);
  box2 = new Box(700, 100, 70, 70);
  box3 = new Box(700, 100, 70, 70);
  box4 = new Box(700, 100, 70, 70);
  box5 = new Box(700, 100, 70, 70);
  box6 = new Box(700, 100, 70, 70);

  //tower2
  box7 = new Box(800, 200, 70, 70);
  box8 = new Box(800, 200, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);

  //tower3
  box13 = new Box(900, 200, 70, 70);
  box14 = new Box(900, 100, 70, 70);
  box15 = new Box(900, 200, 70, 70);
  box16 = new Box(900, 200, 70, 70);
  box17 = new Box(900, 200, 70, 70);
  box18 = new Box(900, 100, 70, 70);
  box19 = new Box(900, 200, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);

  fill(196,0,42);
  textSize(30);
  text("Drag the mouse to move the hero.",250,40);
  
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();

  hero.display();
  rope.display();
  monster.display();

  if(monster.body.position.x > 1366) {
    fill(196,0,42);
    textSize(40);
    text("Hero Wins!!",250,80);
  }
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY});
}


