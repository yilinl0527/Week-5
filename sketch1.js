let mazeNodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  let destinations = shuffle(["level2.html", "gameover.html", "gameover.html"]);
  mazeNodes.push({ x: width * 0.3, y: height * 0.5, size: 80, speedX: 0, speedY: 0, color: color(200, 50, 50), targetPage: destinations[0] });
  mazeNodes.push({ x: width * 0.7, y: height * 0.3, size: 60, speedX: random(-3, 3), speedY: random(-3, 3), color: color(255, 100, 100), targetPage: destinations[1] });
  mazeNodes.push({ x: width * 0.5, y: height * 0.8, size: 90, speedX: random(-1, 1), speedY: 0, color: color(150, 20, 20), targetPage: destinations[2] });
}

function draw() {
  background(50, 0, 0);
  for (let node of mazeNodes) {
    node.x += node.speedX;
    node.y += node.speedY;
    if (node.x < 0 || node.x > width) node.speedX *= -1;
    if (node.y < 0 || node.y > height) node.speedY *= -1;
    fill(node.color);
    rect(node.x, node.y, node.size, node.size);
  }
}

function mousePressed() {
  for (let node of mazeNodes) {
    if (dist(mouseX, mouseY, node.x, node.y) < node.size / 2) {
      window.location.href = node.targetPage;
    }
  }
}