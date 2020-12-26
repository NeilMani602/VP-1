var dog, happyDog
var database
var foodS,foodStock

function preload()
{
  dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(50,50,250,250);
  dog.addImage("dog",dogImg.png);
  happyDog = createSprite(50,50,250,250);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  drawSprites();
  if(keyWentDown(UP_Arrow)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

    database.ref('/').update({
      Food:x
    })
}



