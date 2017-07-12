
var lukas;
var beer;
var techno;
var burp;
var mainSong;
var rainbow;
var giggle;
var lvl1 = 10;
var pill;
var points = 0; 
var score = "Score : " +  points + ".";
var drinkSound ,
     myCallback = function() {
           console.info("sound finished");
       };

function preload(){
  drinkSound = loadSound("drink.mp3");
  giggle = loadSound("giggle.mp3");
  pill = loadImage("pill.png");
  mainSong = loadSound("main.mp3");
  beerImage = loadImage("beer.png");
  img = loadImage("player.png");
  burp = loadSound("burp.mp3");
  rainbow = loadGif("rainbow.gif");
  techno = loadSound("techno.mp3");
}

function playTechno(){
	if(!techno.isPlaying()){
		techno.play();
	}
	var body = document.getElementsByTagName('body')[0];
	body.style.backgroundImage = "url('rave.jpg')";
}
function setup() {
  createCanvas(800,400);
  lukas = new Lukas();
  beer = new Beer();
  mainSong.play();
  
}

function end (){

}
function draw() {
  background(0,0,0); 

  if(points >= lvl1){
  	
  	if(rainbow.loaded()){
  		background(rainbow);
  		rainbow.play();
  	}
  	beerImage = pill;
  	drinkSound = giggle;
  	mainSong.stop();
  	playTechno();
  }

  fill(255);

  textAlign(CENTER);
  text("HARTNIKORAMA",width/2, 20);
  textAlign(RIGHT,TOP);
  text("Score : " + points, 750, 350);
  drawSprites();

  if(beer != null){
  	if(lukas.collide(beer)){
  		drinkSound.play();
  		beer.remove();
  		beer = null;
  		beer = new Beer();
  		increaseScore();

  	}
  }
  
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
   lukas.setSpeed(3.0, 0);
  }
  else if (keyCode == DOWN_ARROW) {
   lukas.setSpeed(3.0, 90);
  }
  else if (keyCode == LEFT_ARROW) {
   lukas.setSpeed(3.0, 180);
  }
  else if (keyCode == UP_ARROW) {
   lukas.setSpeed(3.0, 270);
  }
  else if (key == ' ') {
   lukas.setSpeed(0, 0);
  }
  return false;
}

function Beer(){

	var x = Math.floor(Math.random() * 600) + 50
	var y = Math.floor(Math.random() * 300) + 60  
	beer = createSprite(x,y);
	beer.addImage(beerImage);
	return beer;
}

function Lukas(){
	sprite = createSprite(120,120);
	sprite.addImage(img);


	return sprite;
}

function increaseScore(){
	points++;
	console.log("inc");
	if (points % 3 == 0 && points < lvl1){
		burp.play();
	}
	
}