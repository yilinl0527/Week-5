function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(20, 0, 0);
  fill(255, 50, 50);
  textSize(80);
  text("DEADZONE", width/2, height/2 - 50);
  textSize(24);
  text("You guessed wrong.", width/2, height/2 + 20);
  fill(100, 0, 0);
  rect(width/2, height/2 + 120, 200, 60, 10);
  fill(255);
  textSize(20);
  text("RESTART GAME", width/2, height/2 + 120);
}

function mousePressed() {
  if (mouseX > width/2 - 100 && mouseX < width/2 + 100 && 
      mouseY > height/2 + 90 && mouseY < height/2 + 150) {
    window.location.href = "index.html";
  }
}
