let mazeNodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  let destinations = shuffle(["level4.html", "gameover.html", "gameover.html"]);
  mazeNodes.push({ x: width * 0.5, y: height * 0.2, size: 90, speedX: 0, speedY: 5, color: color(50, 100, 200), targetPage: destinations[0] });
  mazeNodes.push({ x: width * 0.2, y: height * 0.7, size: 50, speedX: random(-6, 6), speedY: random(-6, 6), color: color(100, 150, 255), targetPage: destinations[1] });
  mazeNodes.push({ x: width * 0.8, y: height * 0.5, size: 120, speedX: 0, speedY: 0, color: color(20, 50, 150), targetPage: destinations[2] });
}

function draw() {
  background(0, 0, 50);
  for (let node of mazeNodes) {
    node.x += node.speedX; node.y += node.speedY;
    if (node.x < 0 || node.x > width) node.speedX *= -1;
    if (node.y < 0 || node.y > height) node.speedY *= -1;
    fill(node.color);
    circle(node.x, node.y, node.size);
  }
}

function mousePressed() {
  for (let node of mazeNodes) {
    if (dist(mouseX, mouseY, node.x, node.y) < node.size / 2) {
      window.location.href = node.targetPage;
    }
  }
}