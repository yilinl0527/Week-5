function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(255, 215, 0);
  fill(255);
  textSize(80);
  text("YOU ESCAPED!", width/2, height/2 - 50);
  fill(0);
  textSize(24);
  text("You beat the odds.", width/2, height/2 + 20);
  fill(255);
  rect(width/2, height/2 + 120, 200, 60, 10);
  fill(0);
  textSize(20);
  text("PLAY AGAIN", width/2, height/2 + 120);
}

function mousePressed() {
  if (mouseX > width/2 - 100 && mouseX < width/2 + 100 && 
      mouseY > height/2 + 90 && mouseY < height/2 + 150) {
    window.location.href = "index.html";
  }
}