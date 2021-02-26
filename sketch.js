var canvas;
var music;
var brick1,brick2,brick3,brick4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(770,600);

    //create 4 different surfaces
    brick1 = createSprite(100,580,180,20);
    brick1.shapeColor = rgb(0,0,255);

    brick2 = createSprite(290,580,180,20);
    brick2.shapeColor = rgb(255,165,0);

    brick3 = createSprite(480,580,180,20);
    brick3.shapeColor = rgb(128,0,128);

    brick4 = createSprite(670,580,180,20);
    brick4.shapeColor = rgb(0,255,255);

    //create box sprite and give velocity
    box = createSprite(random(20,750),20,20,20);
    box.shapeColor = rgb(255,255,255);
    box.velocityX = 4;
    box.velocityY = 4;
}

function draw() {
    background(0);

    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(brick1.isTouching(box) && box.bounceOff(brick1)){
     box.shapeColor = rgb(0,0,255);
    }

    if(brick2.isTouching(box) && box.bounceOff(brick2)){
      box.shapeColor = rgb(255,165,0);
    }

    if(brick3.isTouching(box)){
        box.shapeColor = rgb(128,0,128)
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
      }

    if(brick4.isTouching(box) && box.bounceOff(brick4)){
        music.play();
        box.shapeColor = rgb(0,255,255);
      
    }

    
    

    drawSprites();


}
