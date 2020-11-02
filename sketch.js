// buttons and Container
let container;
let button1;
let button2;
let button3;
let button4;

function setup() {
  createCanvas(windowWidth, windowHeight);
    
    button1 = createButton ('the 1st button');
    button2 = createButton ('the 2nd button');
    button3 = createButton ('the 3rd button');
    button4 = createButton ('the 4th button');
    
    button1.class ('button-class');
    button2.class ('button-class');
    button3.class ('button-class');
    button4.class ('button-class');
    
    container = createDiv()
    container.id = ('button-container')
    
    
    container.child(button1);
    container.child(button2);
    container.child(button3);
    container.child(button4);
    
    container.position(width/2, height/2);
}

function draw() {
  background(220);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}