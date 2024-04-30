/** This function loads resources that will be used later. */
let font;
let font2;
function preload() {
  font = loadFont("assets/Jacquard12Charted-Regular.ttf");
  font2= loadFont("assets/Cormorant-Italic-VariableFont_wght.ttf")
}

function setup() {
  createCanvas(400, 400);
  fill('red');
  textFont(font);
  textSize(36);
 

  
}

function draw() {
  background(220);
  text('hello',10,50);

  //textFont(font2);
  //text('help me!!',20,60)
  //fill('yellow');

}
