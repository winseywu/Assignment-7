let kardRM;
let enemyAudio;

function preload(){
  kardRM = loadImage("KARD red moon.jpg");
}



// buttons and Container
let container;
let button1;
let button2;
let slider;


function setup() {
  createCanvas(windowWidth, windowHeight);
    
    button1 = createButton ('PLAY');
    button2 = createButton ('Pause');
    slider = createSlider (0,176,0);

    
    button1.class ('button-class');
    button2.class ('button-class');
    
    container = createDiv()
    container.child(button1);
    container.child(button2);


    container.position(width/2-200/2, height/1.1);
  
}

function draw() {
  background(220);
  
  startPage()
  
}

function startPage(){
  imageMode(CENTER);
  image(kardRM, width/2,height/2)
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  container.position(width/2-300/2, height/2);
}