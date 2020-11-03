let kardRM;
let enemyAudio;

function preload(){
  kardRM = loadImage("KARD red moon.jpg");
  enemyAudio = loadSound("KARD ENEMY.mp3")
}



// buttons and Container
let container;
let button1;
let button2;
let slider1;
let slider2;

function setup() {
  createCanvas(windowWidth, windowHeight);
    
    button1 = createButton ('PLAY');
    button2 = createButton ('STOP');
    
    button1.class ('button-class');
    button2.class ('button-class');
  
    button1.mousePressed(playSong);
    button2.mousePressed(stopSong)
  
    container = createDiv()
    container.child(button1);
    container.child(button2);

    container.position(width/2-200/2, height/1.4);
  
    slider1 = createSlider (0,1,0.5, 0.01);
    slider2 = createSlider (0,255,155);
  
    slider1.class ('slider-class')
    slider2.class ('slider-class')
  
    slider1.position (width/2 - 250/2, height/1.25);
    slider2.position (width/2 - 250/2, height/5);
}

function draw() {
  background(220);
  
  startPage();
  
  textAlign(CENTER);
  
  textSize(20)
  
  fill(0, 100, slider2.value())
  text('Volume:', width/2 - 175, height/1.22);
  text('Color:', width/2 - 165, height/5 + 10);
}

function startPage(){
  
  fill(slider2.value(),0,0)
  rect(0, 0, windowWidth, windowHeight);
  
  imageMode(CENTER);
  image(kardRM, width/2,height/2)
  
  enemyAudio.setVolume(slider1.value());
}

function playSong(){
  
  enemyAudio.play();
  enemyAudio.setVolume(slider1.value());
}

function stopSong(){
  
  enemyAudio.pause();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  container.position(width/2-200/2, height/1.4);
  
  text('Volume:', width/2 - 175, height/1.22);
  text('Color:', width/2 - 165, height/5 + 10);
  
  slider1.position (width/2 - 250/2, height/1.25);
  slider2.position (width/2 - 250/2, height/5);
}