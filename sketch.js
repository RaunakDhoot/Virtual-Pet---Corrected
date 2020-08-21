var dog;
var dogImage;
var happyDog;
var Database;
var foodS;
var foodStock;
var happyDogImage;

function preload()
{
  dogImage = loadImage("dog.png")
  happyDogImage = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,40,40)
  happyDog = createSprite(250,250,40,40)
  happyDog.visible = false
  dog.addImage("dog.png",dogImage)
  dog.scale = 0.5
  Database = firebase.database();
  foodStock = Database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.visible = false
   happyDog.visible = true
  happyDog.addImage("dogImg1.png",happyDogImage)
  happyDog.scale = 0.5
  
  }

text(foodStock,200,200)
textSize(50)


}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  Database.ref('/').update({
    foodS:x
  })
}



