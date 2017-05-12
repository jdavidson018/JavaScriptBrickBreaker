var score = 0;
var lives = 3;

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
    if(score == brickRowCount * brickColumnCount){
    	for(c = 0; c < brickColumnCount; c++){
			for(r = 0; r < brickRowCount; r++){
				bricks[c][r].status = 1;
			}
		}
    	drawBricks();

    }
    if(score == brickRowCount * brickColumnCount * 2){
    	alert("WINNER!!!!");
		document.location.reload();
    }
}

function drawLives(){
	ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}