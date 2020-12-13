//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;
var feed,addfood;
var fedtime,lastfed;
var foodObj;

function preload()
{
  //load images here
  happyDogImg = loadImage("images/dogImg.png");
  dogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(1000,600);
  dog = createSprite(750,250,30,30);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  foodObj = new Food();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);

  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addfood = createButton("Add Food");
  addfood.position(800,95);
  addfood.mousePressed(addFood);
}




function readStock(data){
  foodS = data.val();
}



//function to add foodstock and last fed time
function feedDog(){
  dog.addImage(happyDogImg);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food: foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

//function to add food in database
function addFood(){
   foodS++;
   database.ref('/').update({
     Food:foodS

   })
}

function draw() {  

  background(46,139,87)
  foodObj.display();
  
  
  drawSprites();
  //add styles here

  fedtime = database.ref("FeedTime");
  fedtime.on("value",function(data){
    lastfed = data.val();
  })

  fill(255,255,254);
  textSize(15);
  if(lastfed>=12){
    text("Last fed : " + lastfed%12 + " PM" , 350,30);
  }else if(lastfed===0){
    text("Last Fed : 12 AM",350,30);
  }else{
    text("Last Fed : " + lastfed + " PM",350,30);
  }

  
}
