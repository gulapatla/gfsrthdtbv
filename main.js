noseX = 0;
noseY = 0;
marioX = 0;
marioY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover= loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();


}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('Game_console');
	

	canvas.parent('canvas');
	poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);    
	
}

function draw() {
	game();
}



function modelLoaded() {
console.log('Model Loaded!');
}

function gotPoses(results)
{
if(results.length > 0)
{
	console.log(results);
  noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y;

}
}

function draw() {
background("#D3D3D3");
if(noseX < 300)
{
  marioX = marioX - 1;
}
if(noseX > 300)
{
  marioX = marioX + 1;
}
if(noseY < 150)
{
  marioY = marioY - 1;
}
image(img,marioX, marioY, 40,70);
}







