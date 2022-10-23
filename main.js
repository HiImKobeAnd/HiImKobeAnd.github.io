const spaceBetweenRectangles = 50;

function setup() {
  createCanvas(windowHeight, windowHeight);
  background(0, 100, 200);
}

function draw() {
  for (let i = 0; i < 3; i++) {
    for (let l = 0; l < 3; l++) {
      circle(
        (height / 3) * i + height / 3 / 2,
        (height / 3) * l + height / 3 / 2,
        height / 3 - spaceBetweenRectangles
      );
    }
  }
}

function mousePressed() {
  if (
    dist(mouseX, mouseY, width / 3 + width / 3 / 2, width / 3 + width / 3 / 2) <
    (height / 3 - spaceBetweenRectangles) / 2
  ) {
    console.log("hello");
  }
}

function windowResized() {
  resizeCanvas(windowHeight, windowHeight);
  background(0, 100, 200);
  draw();
}
