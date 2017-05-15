var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//this will call the draw function every 10 miliseconds
setInterval(draw, 10);

/**
 * This vunction will be used to draw everything on the canvas
 */
function draw(){
	//clear the canvas before each new frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawScore();
	drawLives();
	drawPaddle();
	drawBricks();
	collisionDetection();
}