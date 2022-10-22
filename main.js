const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const circleArray = [];
const circleAmount = 1;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.up = getRandomBoolean(50);
    this.right = getRandomBoolean(50);
    this.color = "lightcoral";
    this.speed = 1;
  }
}

for (let i = 0; i < circleAmount; i++) {
  circleArray.push(
    new Circle(
      getRandomArbitrary(0, canvas.clientWidth),
      getRandomArbitrary(0, canvas.clientHeight),
      getRandomArbitrary(25, 100)
    )
  );
}

function draw() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  circleArray.forEach((circle) => {
    drawCircle(circle.x, circle.y, circle.radius, circle.color);
  });
}

function frame() {
  circleArray.forEach((circle) => {
    switch (circle.x) {
      case 0:
        circle.right = true;
        break;
      case canvas.width:
        circle.right = false;
        break;
    }

    switch (circle.y) {
      case 0:
        circle.up = true;
        break;
      case canvas.height:
        circle.up = false;
        break;
    }

    switch (circle.right) {
      case true:
        circle.x += circle.speed;
        break;
      case false:
        circle.x -= circle.speed;
        break;
    }

    switch (circle.up) {
      case true:
        circle.y += circle.speed;
        break;
      case false:
        circle.y -= circle.speed;
        break;
    }
  });

  draw();
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomBoolean(prop) {
  return Math.random() < prop / 100;
}

function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.lineWidth = 16;
  ctx.fill();
  ctx.stroke();
}

draw();
setInterval(frame, 5);
window.addEventListener("resize", draw);
