// Array of all pictures
var img = 
	["images/archway.jpg", 
	"images/bathroom_tile.jpg", 
	"images/brick_wall.jpg", 
	"images/bust.jpg", 
	"images/card.jpg", 
	"images/card_collage.jpg", 
	"images/generic_asian_building.jpg", 
	"images/headphones.jpg", 
	"images/pastel_beachball.jpg", 
	"images/rainbow.jpg"];
	console.log(img.length)//testing if the array is reading properly
function choosePicture() {
	var randomNum =  Math.floor(Math.random() * img.length) + 1;
	console.log(img[randomNum]);//testing if the function runs properly
	document.getElementById("image_placeholder").src = img[randomNum];
}