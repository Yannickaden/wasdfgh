function preload(){

}

function setup(){
    canvas=createCanvas(650,450);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,230,150,220,200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    circle(50,400,80);
    circle(600,50,80);
    circle(600,400,80);
    fill(0,0,255);
    stroke(0,0,255);
    rect(90,40,470,20);
    rect(90,390,470,20);
    rect(40,90,20,270);
    rect(590,90,20,270);
}

function take_snapshot(){
    save('png.png');
}

