let KB;
let KBA;

function preload(){
  
  KB = loadImage("KB.jpg");
  KBA = loadSound("Kill Bill Audio.mp3")
}



// buttons and Container
let container;
let button1;
let button2;
let button3;


function setup() {
  createCanvas(windowWidth, windowHeight);
    
    button1 = createButton ('!st song');
    button2 = createButton ('2nd song');
    button3 = createButton ('3rd song');

    
    button1.class ('button-class');
    button2.class ('button-class');
    button3.class ('button-class');
  
    button1.mousePressed(killBill())

    
    container = createDiv()
    container.child(button1);
    container.child(button2);
    container.child(button3);

    container.position(width/2-300/2, height/2);
  
}

function draw() {
  background(220);
  
}


function killBill(){
  
  image(KB, width/4, 0)
  KBA.play()
}





function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  container.position(width/2-300/2, height/2);
}