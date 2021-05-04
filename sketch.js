var backgroundimg



function preload(){
 //load your images here 
 backgroundimg=loadAnimation("background0.png","backgrpund20.png")
  
}

function setup() {
  createCanvas(600, 600);
  background=createSprite(0,0,800,800);
  background.addImage("backgroundimg",background0);

  //add code here
  
}

function draw() {
   
  for(var i=60; i<390; i=i+60){
    balloonred=createSprite(50,i,20,20);
  }
  //add code here
  drawSprites();
}

