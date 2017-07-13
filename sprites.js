function Needle(){
	sprite = createSprite(getRandomX(), getRandomY());
	sprite.addImage(needleImage);
	return sprite;
}

function Lukas(){
	sprite = createSprite(120,120);
	sprite.addImage(img);
	return sprite;
}

function Beer(){
	beer = createSprite(getRandomX(),getRandomY());
	beer.addImage(beerImage);
	return beer;
}