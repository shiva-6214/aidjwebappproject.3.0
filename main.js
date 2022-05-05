peterpansong = "";
song2 = "";
leftWristY = 0;
rightWristY = 0;
leftWristX = 0;
rightWristX = 0;

function preload() {
    peterpansong = loadSound('music.mp3');
    song2 = loadSound('music2.mp3');
}

function setup() {
    canvas = createCanvas(500, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 500, 450);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Left Wrist Y = " + leftWristY + " " + "Right Wrist Y = " + rightWristY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Left Wrist X = " + leftWristX + " " + "Right Wrist X = " + rightWristX);
    }
}