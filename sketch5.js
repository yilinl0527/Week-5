let mazeNodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  let destinations = shuffle(["win.html", "gameover.html", "gameover.html"]);
  mazeNodes.push({ x: width * 0.2, y: height * 0.5, size: 60, speedX: 8, speedY: 0, color: color(150, 50, 200), targetPage: destinations[0] });
  mazeNodes.push({ x: width * 0.8, y: height * 0.5, size: 60, speedX: -8, speedY: 0, color: color(200, 100, 255), targetPage: destinations[1] });
  mazeNodes.push({ x: width * 0.5, y: height * 0.8, size: 80, speedX: random(-3,3), speedY: random(-3,3), color: color(100, 20, 150), targetPage: destinations[2] });
}

function draw() {
  background(50, 0, 50);
  for (let node of mazeNodes) {
    node.x += node.speedX; node.y += node.speedY;
    if (node.x < 0 || node.x > width) node.speedX *= -1;
    if (node.y < 0 || node.y > height) node.speedY *= -1;
    fill(node.color);
    ellipse(node.x, node.y, node.size * 1.5, node.size / 1.5);
  }
}

function mousePressed() {
  for (let node of mazeNodes) {
    if (dist(mouseX, mouseY, node.x, node.y) < node.size) {
      window.location.href = node.targetPage;
    }
  }
}