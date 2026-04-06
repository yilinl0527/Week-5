let mazeNodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  let destinations = shuffle(["level3.html", "gameover.html", "gameover.html"]);
  mazeNodes.push({ x: width * 0.2, y: height * 0.2, size: 70, speedX: random(-4, 4), speedY: random(-4, 4), color: color(200, 200, 50), targetPage: destinations[0] });
  mazeNodes.push({ x: width * 0.8, y: height * 0.8, size: 80, speedX: 0, speedY: 0, color: color(255, 255, 100), targetPage: destinations[1] });
  mazeNodes.push({ x: width * 0.5, y: height * 0.5, size: 60, speedX: 2, speedY: -2, color: color(150, 150, 20), targetPage: destinations[2] });
}

function draw() {
  background(50, 50, 0);
  for (let node of mazeNodes) {
    node.x += node.speedX; node.y += node.speedY;
    if (node.x < 0 || node.x > width) node.speedX *= -1;
    if (node.y < 0 || node.y > height) node.speedY *= -1;
    fill(node.color);
    drawPolygon(node.x, node.y, node.size / 2, 3);
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
  for (let a = -PI/2; a < TWO_PI - PI/2; a += angle) vertex(x + cos(a) * radius, y + sin(a) * radius);
  endShape(CLOSE);
}