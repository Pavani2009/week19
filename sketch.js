var spaceImg, space;
var meteorImg, meteor, meteorsGroup;
var spaceshipImg, spaceship; 
var gameState = "play"

function preload() {
spaceImg = loadImage("space.jpg");
meteorImg = loadImage("meteor.jpg");
spaceshipImg = loadImage("spaceship.png");
}

function setup(){
createCanvas(600,600);
space = createSprite(300,300);
space.addImage("space",spaceImg);
space.velocityY = 1;

meteorsGroup = new Group();

spaceship = createSprite(200,200,50,50);
spaceship.addImage(spaceshipImg);
spaceship.scale = 0.3;
}



function draw() {
backround(200);

if(space.y > 400){
space.y = 300
}

if(keyDown("left_arrow")){
    spaceship.x = spaceship.x + 3;
}

if(keyDown("left_arrow")){
    spaceship.x = spaceship.x -3;
}

if(keyDown("space")){
    spaceship.velocityY = -3;
}
spaceship.velocityY = spaceship.velocityY + 0.8;

if(meteorsGroup.isTouching(spaceship)){
    spaceship.velocityY = 0;
}
spawnmeteor();
drawSprites();
}


function spawnmeteor(){

if( frameCount % 240 === 0){
    meteor = createSprite(200,-50);
    meteor.addImage(meteorImg);


    meteor.x= math.round(random(120,400));

    meteor.velocityY = 1;
    meteor.lifetime = 800;

    meteorsGroup.add(meteor);

}
}

