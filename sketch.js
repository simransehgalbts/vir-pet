//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

  database = firebase.database;
  createCanvas(500, 500);
  foodStock = database.ref('food');
  foodStock.on("value",readStock)
}

function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}

  drawSprites();
  text("note:press up arrow key to feed drago milk!")
  readStock();
  writeStock();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



