
var block1,block2,block3,block4,block5,block6,block7,block8;
var playerbar,ball,ground;
var edges;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13;
var block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26;
var block27, block28, block29, block30, block31, block32, block33, block34, block35, block36, block37, block38, block39;
var blocklayer2,blocklayer1,blocklayer3,blocklayer4;
var blocklayer1grp, blocklayer2grp, blocklayer3grp, blocklayer4grp;

function preload()
{
  ballimg = loadImage("ball.PNG");
}

function setup() {
  createCanvas(800,650);
  //create blocks
  //block layer 1

//for( var i = (starting position of x);i = (the extend in x);i = i + (gap/distance between 2 objects))
//blocklayer1 = createSprite(i,30,50,50)
//if you want it to be a loop in horizontal line otherwise i in place of y position shold be done.
  
  /*for loops - blocklayer1
  for(var i=30;i<=750;i = i+60)
  {
    blocklayer1 = createSprite(i,30,50,50);
    blocklayer1.shapeColor = "pink"
  }*/
  
  //indivituals - block layer 1
  block1 = createSprite(30,30,50,50);
  block1.shapeColor = "pink";
  block2 = createSprite(90,30,50,50);
  block2.shapeColor = "pink";
  block3 = createSprite(150,30,50,50);
  block3.shapeColor = "pink";
  block4 = createSprite(210,30,50,50);
  block4.shapeColor = "pink";
  block5 = createSprite(270,30,50,50);
  block5.shapeColor = "pink";
  block6 = createSprite(330,30,50,50);
  block6.shapeColor = "pink";
  block7 = createSprite(390,30,50,50);
  block7.shapeColor = "pink";
  block8 = createSprite(450,30,50,50);
  block8.shapeColor = "pink";
  block9 = createSprite(510,30,50,50);
  block9.shapeColor = "pink";
  block10 = createSprite(570,30,50,50);
  block10.shapeColor = "pink";
  block11 = createSprite(630,30,50,50);
  block11.shapeColor = "pink";
  block12 = createSprite(690,30,50,50);
  block12.shapeColor = "pink";
  block13 = createSprite(750,30,50,50);
  block13.shapeColor = "pink";
  
  /*for loop - block layer 2
  for(var i=30;i<=750;i = i+60)
  {
    blocklayer2 = createSprite(i,90,50,50);
    blocklayer2.shapeColor = "red"
  }*/

  //block layer 2
  block14 = createSprite(30,90,50,50);
  block14.shapeColor = "green";
  block15 = createSprite(90,90,50,50);
  block15.shapeColor = "green";
  block16 = createSprite(150,90,50,50);
  block16.shapeColor = "green";
  block17 = createSprite(210,90,50,50);
  block17.shapeColor = "green";
  block18 = createSprite(270,90,50,50);
  block18.shapeColor = "green";
  block19 = createSprite(330,90,50,50);
  block19.shapeColor = "green";
  block20 = createSprite(390,90,50,50);
  block20.shapeColor = "green";
  block21 = createSprite(450,90,50,50);
  block21.shapeColor = "green";
  block22 = createSprite(510,90,50,50);
  block22.shapeColor = "green";
  block23 = createSprite(570,90,50,50);
  block23.shapeColor = "green";
  block24 = createSprite(630,90,50,50);
  block24.shapeColor = "green";
  block25 = createSprite(690,90,50,50);
  block25.shapeColor = "green";
  block26 = createSprite(750,90,50,50);
  block26.shapeColor = "green";

  //for loop - block layer 3
  /*for(var i=30;i<=750;i = i+60)
  {
    blocklayer3 = createSprite(i,150,50,50);
    blocklayer3.shapeColor = "blue"
  }*/

  //block layer 3
  block27 = createSprite(30,150,50,50);
  block27.shapeColor = "purple";
  block28 = createSprite(90,150,50,50);
  block28.shapeColor = "purple";
  block29 = createSprite(150,150,50,50);
  block29.shapeColor = "purple";
  block30 = createSprite(210,150,50,50);
  block30.shapeColor = "purple";
  block31 = createSprite(270,150,50,50);
  block31.shapeColor = "purple";
  block32 = createSprite(330,150,50,50);
  block32.shapeColor = "purple";
  block33 = createSprite(390,150,50,50);
  block33.shapeColor = "purple";
  block34 = createSprite(450,150,50,50);
  block34.shapeColor = "purple";
  block35 = createSprite(510,150,50,50);
  block35.shapeColor = "purple";
  block36 = createSprite(570,150,50,50);
  block36.shapeColor = "purple";
  block37 = createSprite(630,150,50,50);
  block37.shapeColor = "purple";
  block38 = createSprite(690,150,50,50);
  block38.shapeColor = "purple";
  block39 = createSprite(750,150,50,50);
  block39.shapeColor = "purple";

  
  /*block layer 4
  for loop - block layer 4
  for(var i=30;i<=750;i = i+60)
  {
    blocklayer4 = createSprite(i,210,50,50);
    blocklayer4.shapeColor = "green"
  }*/

  //block layer 4
  block1 = createSprite(30,210,50,50);
  block1.shapeColor = "orange";
  block2 = createSprite(90,210,50,50);
  block2.shapeColor = "orange";
  block3 = createSprite(150,210,50,50);
  block3.shapeColor = "orange";
  block4 = createSprite(210,210,50,50);
  block4.shapeColor = "orange";
  block5 = createSprite(270,210,50,50);
  block5.shapeColor = "orange";
  block6 = createSprite(330,210,50,50);
  block6.shapeColor = "orange";
  block7 = createSprite(390,210,50,50);
  block7.shapeColor = "orange";
  block8 = createSprite(450,210,50,50);
  block8.shapeColor = "orange";
  block9 = createSprite(510,210,50,50);
  block9.shapeColor = "orange";
  block10 = createSprite(570,210,50,50);
  block10.shapeColor = "orange";
  block11 = createSprite(630,210,50,50);
  block11.shapeColor = "orange";
  block12 = createSprite(690,210,50,50);
  block12.shapeColor = "orange";
  block13 = createSprite(750,210,50,50);
  block13.shapeColor = "orange";

  //create a ball
  ball = createSprite(30,300,10,30);
  ball.addImage(ballimg);
  ball.shapeColor = "blue";
  ball.velocityX = 4;
  ball.velocityY = -5;

  //create a player bar
  playerbar = createSprite(300,550,200,20);
  playerbar.shapeColor = "purple"

  //create a ground/base
  ground = createSprite(200,600,5220,20);
  ground.shapeColor = "red";

  //groups - blocks
  blocklayer1grp = new Group();
  blocklayer2grp = new Group();
  blocklayer3grp = new Group();

}

function draw() {
  background("Yellow");
  textSize(20);
  text(mouseX + "," + mouseY, 400,50)
  
  //playerbar moment
  //(1) playerbar.x=world.mouseX
  playerbar.x=mouseX
  
  //bounce
  edges = createEdgeSprites();
  //block layer 1
  ball.bounceOff(playerbar);
  ball.bounceOff(edges);
  ball.bounceOff(block1);
  ball.bounceOff(block2);
  ball.bounceOff(block3);
  ball.bounceOff(block4);
  ball.bounceOff(block5);
  ball.bounceOff(block6);
  ball.bounceOff(block7);
  ball.bounceOff(block8);
  ball.bounceOff(block9);
  ball.bounceOff(block10);
  ball.bounceOff(block11);
  ball.bounceOff(block12);
  ball.bounceOff(block13);

  //block layer 2
  ball.bounceOff(block14);
  ball.bounceOff(block15);
  ball.bounceOff(block16);
  ball.bounceOff(block17);
  ball.bounceOff(block18);
  ball.bounceOff(block19);
  ball.bounceOff(block20);
  ball.bounceOff(block21);
  ball.bounceOff(block22);
  ball.bounceOff(block23);
  ball.bounceOff(block24);
  ball.bounceOff(block25);
  ball.bounceOff(block26);

  //block layer 3
  ball.bounceOff(block27);
  ball.bounceOff(block28);
  ball.bounceOff(block29);
  ball.bounceOff(block30);
  ball.bounceOff(block31);
  ball.bounceOff(block32);
  ball.bounceOff(block33);
  ball.bounceOff(block34);
  ball.bounceOff(block35);
  ball.bounceOff(block36);
  ball.bounceOff(block37);
  ball.bounceOff(block38);
  ball.bounceOff(block39);

  //callling the functions
  //serve();
  //reset();
  drawSprites();
}
function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}