var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("8552f811e95b998d9505c43a9828c6d6.jpg");
  bg2 = loadImage("1598630974_e_0u5a9826-1.webp")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {

  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  



  if(score === 4) {
    clear()
    background(bg2)
    fill("black")
    textSize(20);
    text("YOU GOT ALL THE ANSWERS RIGHT , YOU ENTERED THE CSK FAMILY",250, 200);
  }

  drawSprites()

}