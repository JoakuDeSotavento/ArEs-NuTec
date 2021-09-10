// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.

// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet; 
let poses = []; 
let mysound;
let n;
let p;

function preload() {
		soundFormats('mp3'); 
		mysound = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user263752/visual1173311/h6634d9c2643695298405a4011b644354/Escena_dos.mp3');
}



function setup() {
  createCanvas(700, 500);
  
  video = createCapture(VIDEO);
  video.size(width, height);

  poseNet = ml5.poseNet(video, modelReady);
  
  poseNet.on('pose', function(results) {
    poses = results;
  });
  video.hide();
	mysound.play(n,p);
	
}



function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  
  

 tint(50, 70, 80);
	
 image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  //drawKeypoints();
 //drawSkeleton();
  
  drawJoints();

}


function drawJoints(){

  
for (let i = 0; i < poses.length; i++) { // go through all the detected skeletons
    
    console.log(poses); // print the content of each detected skeleton
  
   // let OneJoint = poses[i].pose; // go into the "pose" array
    
  if(poses[i].pose.rightEye.confidence >0.5){
    rectMode(CENTER);
		noStroke();
		fill(random(0,250),random(0,250),random(0,250));
    rect(poses[i].pose.rightEye.x, poses[i].pose.rightEye.y, random(10,50),random(10,50)); // extrapolate the coordinates
    rect(poses[i].pose.leftEye.x, poses[i].pose.leftEye.y, random(10,50),random(10,50));
    }
	if(poses[i].pose.leftWrist.confidence >0.5){
    rectMode(CENTER);
		noStroke();
		fill(random(0,250),random(0,250),random(0,250));
    rect(poses[i].pose.rightWrist.x, poses[i].pose.rightWrist.y, random(10,50),random(10,50)); // extrapolate the coordinates
    rect(poses[i].pose.leftWrist.x, poses[i].pose.leftWrist.y, random(10,50),random(10,50));
    }
	

	
}
}