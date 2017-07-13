
var lukas;
var beer;
var techno;
var needleImage;
var burp;
var mainSong;
var rainbow;
var giggle;
var lvl1 = 10;
var pill;
var health = 100;
var points = 0; 
var score = "Score : " +  points + ".";
var drinkSound;
var cell;


function preload(){
  drinkSound = loadSound("sound/drink.mp3");
  cell = loadImage("img/cell.jpg");
  giggle = loadSound("sound/giggle.mp3");
  needleImage = loadImage("img/drugged.png");
  pill = loadImage("img/pill.png");
  mainSong = loadSound("sound/main.mp3");
  beerImage = loadImage("img/beer.png");
  img = loadImage("img/player.png");
  burp = loadSound("sound/burp.mp3");
  rainbow = loadGif("img/rainbow.gif");
  techno = loadSound("sound/techno.mp3");
}

function setup() {
  createCanvas(800,400);
  lukas = new Lukas();
  beer = new Beer();
  needle = new Needle();
  needle.visible = false;
  mainSong.play();
  
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
  if(beer != null){
  	if(lukas.collide(beer)){
  		drinkSound.play();
  		beer.remove();
  		beer = null;
  		beer = new Beer();
  		increaseScore();
  	}
  }
  if((needle != null && points > lvl1)){
  		if(lukas.collide(needle)){
  			needle.remove();
  			needle = null;
  			needle = new Needle();
  			decreaseHealth();
  		}
  	} 
  if((health <= 0)){
    gameOver();
  } 

  drawSprites();

  //text on screen  
  fill(255);
  textAlign(CENTER);
  text("HARTNIKORAMA, BEERS INCREASE SCORE, NEEDLES DECREASE HEALTH",width/2, 20);
  textAlign(RIGHT,TOP);
  text("Score : " + points, 750, 350);
  textAlign(LEFT,BOTTOM);
  text("Health : " + health, 30, 370);
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

function increaseScore(){
	points++;
	console.log("inc");
	if (points % 3 == 0 && points < lvl1){
		burp.play();
	}
}

function getRandomX(){
	return Math.floor(Math.random() * 600) + 50
}

function getRandomY(){
	return Math.floor(Math.random() * 300) + 60
}

function decreaseHealth(){
	health -= 10;
}

function playTechno(){
  if(!techno.isPlaying()){
    techno.play();
  }
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = "url('img/rave.jpg')";
}

function gameOver(){
  fill(255,0,0);
  background(cell);
  textAlign(CENTER, CENTER);
  text("GAME OVER", width/2,height/2);
  this.allSprites.remove();

  

}