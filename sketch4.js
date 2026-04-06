let mazeNodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  let destinations = shuffle(["level5.html", "gameover.html", "gameover.html"]);
  mazeNodes.push({ x: width * 0.3, y: height * 0.3, size: 80, speedX: random(-2, 2), speedY: random(-2, 2), color: color(50, 200, 50), targetPage: destinations[0] });
  mazeNodes.push({ x: width * 0.7, y: height * 0.7, size: 70, speedX: random(-5, 5), speedY: random(-5, 5), color: color(100, 255, 100), targetPage: destinations[1] });
  mazeNodes.push({ x: width * 0.5, y: height * 0.5, size: 100, speedX: 0, speedY: 0, color: color(20, 150, 20), targetPage: destinations[2] });
}

function draw() {
  background(0, 50, 0);
  for (let node of mazeNodes) {
    node.x += node.speedX; node.y += node.speedY;
    if (node.x < 0 || node.x > width) node.speedX *= -1;
    if (node.y < 0 || node.y > height) node.speedY *= -1;
    fill(node.color);
    drawPolygon(node.x, node.y, node.size / 2, 6);
  }
}

function mousePressed() {
  for (let node of mazeNodes) {
    if (dist(mouseX, mouseY, node.x, node.y) < node.size / 2) {
      window.location.href = node.targetPage;
    }
  }
}

function drawPolygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) vertex(x + cos(a) * radius, y + sin(a) * radius);
  endShape(CLOSE);
}