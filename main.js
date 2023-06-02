function preload() {

}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();


}

function draw(){
    image(video, 230,150,250,250);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);
    circle(590,50,80);
    circle(50,430,80);
    circle(590,430,80);
    fill(0,128,0);
    stroke(0,128,0);
    rect(120,40,400,20);
    rect(120,430,400,20);
    rect(580,110,20,250);
    rect(43,110,20,250);
   
}
function take_snapshot(){
    save('Your_pic.png')
}