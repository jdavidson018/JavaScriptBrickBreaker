var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for(c = 0; c<brickColumnCount; c++){
	bricks[c] = [];
	for(r = 0; r<brickRowCount; r++){
		bricks[c][r] = {x: 0, y: 0, status: 1};
	}
}

function drawBricks(){
	for(c = 0; c < brickColumnCount; c++){
		for(r = 0; r < brickRowCount; r++){
			if(bricks[c][r].status == 1){
				var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(bricks[c][r].x, bricks[c][r].y, brickWidth, brickHeight);
				ctx.fillStyle = "black";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function collisionDetection(){
	for(c = 0; c < brickColumnCount; c++){
		for(r = 0; r < brickRowCount; r++){
			var b = bricks[c][r];
			if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight && b.status == 1){
				dy = -dy;
				bricks[c][r].status = 0;
				score++;
			}
		}
	}
}