//location variables
var x = canvas.width/2;
var y = canvas.height-30;

//how much the location will change with each frame
var dx = 2;
var dy = -2;

var ballRadius = 10;

/**
 * This function will draw the paddle
 */
function drawBall(){
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.closePath();
	moveBall();
}

/**
 * This function is called from the draw function
 * it will move the ball in each new 
 */
function moveBall(){
	//top of screen
	if(y + dy < ballRadius){
		dy = -dy;
	}
	//bottom of screen
	if(y + dy > canvas.height + ballRadius){
		lives--;
		if(lives ==0){
			alert("GAME OVER");
			document.location.reload();
		}else{
			x = canvas.width/2;
			y = canvas.height-30;
			dx = 2;
			dy = -2;
			paddleX = (canvas.width-paddleWidth)/2
		}

	}
	//paddle collision
	if(y + dy > canvas.height - ballRadius - paddleHeight){
		if(dx > 0){
			if(x > paddleX && x < paddleX + (paddleWidth/4)){
				dx = -1;
				dy = -3;
			}else if(x > paddleX + (paddleWidth/4) && x < paddleX + (paddleWidth*2)/4){
				dx = 1;
				dy = -3;
			}else if(x > paddleX + (paddleWidth*2)/4 && x < paddleX + (paddleWidth*3)/4){
				dx = 2;
				dy = -2;
			}else if(x > paddleX + (paddleWidth*3)/4 && x < paddleX + paddleWidth){
				dx = 3;
				dy = -1;
			}
		} else if(dx < 0){
			if(x > paddleX && x < paddleX + (paddleWidth/4)){
				dx = -3;
				dy = -1;
			}else if(x > paddleX + (paddleWidth/4) && x < paddleX + (paddleWidth*2)/4){
				dx = -2;
				dy = -2;
			}else if(x > paddleX + (paddleWidth*2)/4 && x < paddleX + (paddleWidth*3)/4){
				dx = -1;
				dy = -3;
			}else if(x > paddleX + (paddleWidth*3)/4 && x < paddleX + paddleWidth){
				dx = 1;
				dy = -3;
			}

		}
	}
	//left of screen
	if(x + dx < ballRadius){
		dx = -dx;
	}
	//right of screen
	if(x + dx > canvas.width - ballRadius){
		dx = -dx;
	}
	x += dx;
	y += dy;
}