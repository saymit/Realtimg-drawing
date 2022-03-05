nosex= 0;
nosey= 0;

leftWrist_X= 0;
rightWrist_X=0;

difference= 0;


function setup() {
    canvas= createCanvas(400,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(400,400);
    posenet= ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses);


}

function modelloaded(){
    console.log("poseNet is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex= results[0].pose.nose.x;
        nosey= results[0].pose.nose.y;
        console.log("nosex= " + nosex + " nosey= " + nosey);
        leftWrist_X= results[0].pose.leftWrist.x;
        rightWrist_X= results[0].pose.rightWrist.x;
        console.log("leftWrist_x= " + leftWrist_X +" rightWrist_x = " + rightWrist_X );
        difference=  Math.floor(leftWrist_X - rightWrist_X);


    }
}

function draw(){
    background("#d9f502");
    fill("#8206d4");
    stroke("black");
    square(nosex,nosey,difference);
    document.getElementById("square_size").innerHTML= "The size of the Square is " + difference;
}