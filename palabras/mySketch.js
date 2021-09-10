//Cosas de PoseNet
let video;
let poseNet;
let poses = [];

//variables letras
var x = 0, y = 0;
var stepSize = 5.0;

var fontSizeMin = 1;
var angleDistortion = 0.0;
var counter = 0;

function setup() {
  // use full screen size 
  createCanvas(windowWidth, windowHeight);
	//Cosas de PoseNet
	video = createCapture(VIDEO);
	video.size(width, height);

	// Create a new poseNet method with a single detection
	poseNet = ml5.poseNet(video, modelReady);
	// This sets up an event that fills the global variable "poses"
	// with an array every time new poses are detected
	poseNet.on('pose', function(results) {
		poses = results;
	});
	// Hide the video element, and just show the canvas
	video.hide();

  smooth(); 

  textAlign(LEFT);
  fill(255,0,125,);

}

function draw() {
	// cosas de posenet
	// For one pose only (use a for loop for multiple poses!)
	if (poses.length > 0) {
		// video de fondo
		image(video, 0, 0, width, height*1.5);
		const pose = poses[0].pose;
		
		const nose = pose.nose;
		const left= pose.leftWrist;
		const right= pose.rightWrist;
		
 
		x= nose.x;
		y= nose.y;
			
  var d = dist(left.x,left.y, right.x,right.y);
    textFont('Arial Black');
    textSize(100)
		// textSize(fontSizeMin+d/2)
    // var newLetter = letters.charAt(counter);
		var T = 43;
    if (counter < T) {
			newLetter = "que";
		}
		else if (counter < T*2) {
			newLetter = "me";
		}	
		else if (counter < T*3) {
			// newLetter = "ABRIGUES con CALOR";
			newLetter = "ABRIGUES";
		}	
	  else if (counter < T*4) {
			newLetter = "con CALOR";
		}
		else if (counter < T*5.5) {
			newLetter = "que el resto";
		}
		else if (counter < T*7) {
			newLetter = "ya lo hago";
		}
		else if (counter < T*8) {
			newLetter = "YO";
		}
			
		else if (counter < T*9) {
			newLetter = "que";
		}
		else if (counter < T*10) {
			newLetter = "NUNCA";
		}
		
		else if (counter < T*11) {
			newLetter = "esté";
		}
			
		else if (counter < T*12) {
			newLetter = "SOLA";
		}
			else if (counter < T*13.5) {
			newLetter = "ED SEROLOD";
		}
		else {
			newLetter = "AV AL ASOC";
		}
		
			
			
			
			stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(0, 0); 

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0,0);
      pop();

      counter++;
			
			// if (counter > letters.length-1) counter = 0;
			if (counter > T*14.5) {
				counter = 0;
			}

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    }
  }
}

// haz bajo la manga
function modelReady() {
	select('#status').html('Model Loaded');
}

function keyPressed() {
  // angleDistortion ctrls arrowkeys up/down 
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}