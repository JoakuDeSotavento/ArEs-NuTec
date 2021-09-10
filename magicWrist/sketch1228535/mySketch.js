// Copyright (c) 2019 ml5
//
// This software is released under the MIT License
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
let mySound;


function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user264956/visual1173413/h6f147fed59259b2d533b0387582a1c02/LENTO_40s.mp3');
}



function setup() {
  createCanvas(640, 480, WEBGL);
  video = createCapture(VIDEO);
  video.size(width, height);
	
	mySound.play();	
	
	

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, {outputStride:8, quantBytes:4}, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
	
	
  // Hide the video element, and just show the canvas
  video.hide();
	
	
}

function modelReady() {
  select('#status').html('Model Loaded');
}


function draw() {
	translate(-width/2, -height/2, 25);
	background(0);
	//tint(100, 100, 100, 300);

  image(video, 0, 0, width, height);
	//filter(GRAY);
  strokeWeight(2);
	
	
	

  // We can call both functions to draw all keypoints and the skeletons
  //drawKeypoints();
 //drawSkeleton();
  
  drawJoints();

  // For one pose only (use a for loop for multiple poses!)
  if (poses.length > 0) {
    const pose = poses[0].pose;
		
		noStroke();
		
		
		/////////////////////////// WRIST
		// Triangle of the left wrist 1
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
    const leftWrist = pose.leftWrist;
		triangle(leftWrist.x,leftWrist.y, 490, 0, 500, 0);
		
		// Triangle of the left wrist 2
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(leftWrist.x,leftWrist.y, 510, 0, 520, 0);
		
		// Triangle of the left wrist 1 bottom
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(leftWrist.x,leftWrist.y, 490, 480, 500, 480);
		
		// Triangle of the left wrist 2 bottom
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(leftWrist.x,leftWrist.y, 510, 480, 520, 480);
		
		// Triangle of the right wrist 1
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
    const rightWrist = pose.rightWrist;
		triangle(rightWrist.x,rightWrist.y, 140, 0, 150, 0);
		
		// Triangle of the right wrist 2
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(rightWrist.x,rightWrist.y, 120, 0, 130, 0);
		
  	// Triangle of the right wrist 1 bottom
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(rightWrist.x,rightWrist.y, 140, 480, 150, 480);
		
		// Triangle of the right wrist 2 bottom
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(rightWrist.x,rightWrist.y, 120, 480, 130, 480);
		
	
		////////////////////////////NOSE
		const nose = pose.nose;
		
		
		/////////////////////////// ELBOW
		// Triangle of the left elbow 1
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
    const leftElbow = pose.leftElbow;
		triangle(leftElbow.x,leftElbow.y, 440, 0, 450, 0);
		
		// Triangle of the left elbow 2
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(leftElbow.x,leftElbow.y, 460, 0, 470, 0);
		
		// Triangle of the left elbow 1 bottom
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(leftElbow.x,leftElbow.y, 440, 480, 450, 480);
		
		// Triangle of the left elbow 2 bottom
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(leftElbow.x,leftElbow.y, 460, 480, 470, 480);
		
		// Triangle of the right elbow 1
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
    const rightElbow = pose.rightElbow;
		triangle(rightElbow.x,rightElbow.y, 190, 0, 200, 0);
		
		// Triangle of the right elbow 2
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(rightElbow.x,rightElbow.y, 170, 0, 180, 0);
		
		// Triangle of the right elbow 1 bottom
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(rightElbow.x,rightElbow.y, 190, 480, 200, 480);
		
		// Triangle of the right elbow 2 bottom
		//fill(0, 0, 0, 255);
		fill(random(140,160),random(140,160),random(140,160));
		triangle(rightElbow.x,rightElbow.y, 170, 480, 180, 480);
		
		
			/////////////////////////// ANOTHER TRIANGLES
		/////// RIGHT
		fill(random(140,160),random(140,160),random(140,160));
		triangle(100,0, 110, 0, 105, 480);
		
		fill(random(140,160),random(140,160),random(140,160));
		triangle(80,0, 90, 0, 85, 480);
		
		fill(random(140,160),random(140,160),random(140,160));
		triangle(60,0, 70, 0, 65, 480);
		
		fill(random(140,160),random(140,160),random(140,160));
		triangle(40,0, 50, 0, 45, 480);
		
		/////// LEFT
		
		fill(random(140,160),random(140,160),random(140,160));
		triangle(530,0, 540, 0, 535, 480);
		
		fill(random(140,160),random(140,160),random(140,160));
		triangle(550,0, 560, 0, 555, 480);
		
		fill(random(140,160),random(140,160),random(140,160));
		triangle(570,0, 580, 0, 575, 480);
		
		fill(random(140,160),random(140,160),random(140,160));
		triangle(590, 0, 600, 0, 595, 480);
		
		
	}
	
	function drawJoints(){

  
for (let i = 0; i < poses.length; i++) { // go through all the detected skeletons
    
    //console.log(poses); // print the content of each detected skeleton
   console.log(poses[i].pose.nose.x); // print the content of each detected skeleton
		if(poses[i].pose.nose.x < 320){//Izquierda
			mySound.setVolume(0.5)
		}else{ //Derecha
			mySound.setVolume(1)
		}
   // let OneJoint = poses[i].pose; // go into the "pose" array
    
  /*if(poses[i].pose.rightEye.confidence >0.5){
    rectMode(CENTER);
		noStroke();
		fill(random(0,10),random(0,10),random(0,10));
    rect(poses[i].pose.rightEye.x, poses[i].pose.rightEye.y, random(10,50),random(10,50)); // extrapolate the coordinates
    rect(poses[i].pose.leftEye.x, poses[i].pose.leftEye.y, random(10,50),random(10,50));
    }*/
	if(poses[i].pose.leftWrist.confidence >0.5){
    rectMode(CENTER);
		noStroke();
		fill(random(140,160),random(140,160),random(140,160));
    rect(poses[i].pose.rightWrist.x, poses[i].pose.rightWrist.y, random(10,100),random(10,100)); // extrapolate the coordinates
    rect(poses[i].pose.leftWrist.x, poses[i].pose.leftWrist.y, random(10,100),random(10,100));
    }
	//userStartAudio();
   // monoSynth.play(n,0.5,0,p);
    /*
    if(poses[i].pose.rightEye.x<233){n=1720}
    if(poses[i].pose.rightEye.x>233 && poses[i].pose.rightEye.x<466){n=700}
    if(poses[i].pose.rightEye.x>466){n=260}
	*/
	 if(poses[i].pose.rightWrist.y<100){p=1}
    if(poses[i].pose.rightWrist.y>100 && poses[i].pose.rightWrist.y<200){p=3}
    if(poses[i].pose.rightWrist.y>200 && poses[i].pose.rightWrist.y<300){p=5}
	
	 if(poses[i].pose.leftWrist.y<100){p=0.2}
    if(poses[i].pose.leftWrist.y>100 && poses[i].pose.leftWrist.y<200){p=0.5}
    if(poses[i].pose.leftWrist.y>200 && poses[i].pose.leftWrist.y<300){p=0.7}
	
/*
    if(poses[i].pose.rightEye.x>300 && poses[i].pose.rightEye.x<300){n=170}  
    if(poses[i].pose.rightEye.x>400){n=65}
	*/

}}}