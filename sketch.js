

var engine, world, dustbin, paper;
var gameState = 0
var count = 0
var score=0
var pyramid

function preload(){
	tomImage = loadImage("sprite_0.png")
	jerryImage = loadAnimation("sprite.png")
	tableImage = loadImage("table image.jpg")
	bg = loadImage("desert image.jpg")
	obstacleImage=loadImage("cactus.png")
	pyramidImage=loadImage("pyramid.png")
	happyImage=loadAnimation("jerry happy.png")
}

function setup(){
createCanvas(displayWidth,displayHeight);
rectMode(CENTER);




table = createSprite(0,displayHeight-100,displayWidth*10,10)
table.velocityX = -10
tom = createSprite(100,displayHeight-200)
jerry = createSprite(500,displayHeight-200)
jerry.addAnimation("run",jerryImage)
jerry.addAnimation("happy",happyImage)

jerry.scale=0.5
table.visible = false
tom.visible = false
jerry.visible = false

obstacleGroup = createGroup()

tom.addImage(tomImage)
//jerry.addImage(jerryImage)
//table.addImage(tableImage)

	
}

function draw() {
	jerry.velocityY = jerry.velocityY+0.5
	jerry.collide(table)
	if(gameState === 1){

	
	background(bg)
	
	if(keyDown("SPACE")){
		jerry.velocityY=-10

	}
	
	

	if(table.x<0){
		table.x = displayWidth/2
	}
	camera.position.x = jerry.x
	tom.visible = true
	jerry.visible = true
	table.visible = false
	
	tom.x = jerry.x-200
	if(frameCount%100 === 0){
		obstacle = createSprite(displayWidth -200, displayHeight -150,20,100)
		obstacle.addImage(obstacleImage)
		obstacle.velocityX = -10;
		obstacle.lifetime = displayWidth/10;
		obstacle.scale=0.1
		obstacleGroup.add(obstacle)
		
		score=score+1
	}
		

	

console.log(gameState)
if(obstacleGroup.isTouching(jerry)){
	gameState = 2

	obstacleGroup.destroyEach()
}

if(frameCount === 500){
	pyramid = createSprite(displayWidth-650, displayHeight -250)
	pyramid.addImage(pyramidImage)
	pyramid.scale=1
		
	if(jerry.isTouching(pyramid)){
		
		obstacleGroup.destroyEach()
		obstacleGroup.setVelocityXEach(0)
		gameState=3
	
		
	
	}
	
}


	}
	if(gameState === 2){
		background("red")
		table.visible = false
		tom.visible = false
		jerry.visible = false
		textSize (45)
		text("Tom Caught You",500,500)
		
	}
	if(gameState === 3){
		background("green")
		table.visible = false
		tom.visible = false
		jerry.visible = true
		jerry.changeAnimation("happy",happyImage)
		textSize (45)
		text("Jerry reached",500,500)
	
		
	}
if(gameState === 0){
	background("cyan")
	textSize(15)
	text("Press SPACE to start the game",displayWidth/2,200)
	text("press space to make jerry jump",displayWidth/2,300)
	text("press right arrow to move jerry",displayWidth/2,500)
	
if(keyDown("SPACE")){
	gameState = 1
	fill("cyan")

	
}

	

}
drawSprites()
text("SCORE:"+score,displayWidth/3,50)
}


	


	
	





	
	






