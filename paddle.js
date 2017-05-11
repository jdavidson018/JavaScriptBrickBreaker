var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = ((canvas.width-paddleWidth)/2);

var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/**
 * This function will draw the ball
 * It is called everyframe to draw a new ball
 * after the last canvas is cleared
 */
function drawPaddle(){
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "blue";
	ctx.fill();
	ctx.closePath();
	movePaddle();
}

function movePaddle(){
	if(rightPressed && paddleX < canvas.width-paddleWidth){
		paddleX += 8;
	}else if(leftPressed && paddleX > 0){
		paddleX -= 8;
	}
}

function keyDownHandler(e){
	if(e.keyCode == 39){
		rightPressed = true;
	}else if(e.keyCode == 37){
		leftPressed = true;
	}
}

function keyUpHandler(e){
	if(e.keyCode == 39){
		rightPressed = false;
	}else if(e.keyCode == 37){
		leftPressed = false;
	}
}