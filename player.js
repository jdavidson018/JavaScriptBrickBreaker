var score = 0;
var lives = 3;

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
    if(score == brickRowCount * brickColumnCount){
    	alert("WINNER!!!!");
		document.location.reload();
    }
}

function drawLives(){
	ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}