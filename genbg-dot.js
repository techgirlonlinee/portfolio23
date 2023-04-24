function setup() {
  createCanvas(windowWidth, windowHeight); // create canvas that covers the entire window
  frameRate(90);
  noStroke(); // remove stroke from shapes
  fill(0, 0, 0); // set fill color to red
}

function draw() {
  setTimeout(function () {
    // generate a random position for the circle
    let minDiameter = 10;
    let maxDiameter = 180;
    let x, y; // declare variables before the loop
    for (let i = 0; i < 10; i++) {
      x = random(width);
      y = random(height);
      diameter = random(minDiameter, maxDiameter);
      // draw a circle at the random position
      circle(x, y, diameter); // change 50 to set the diameter of the circle
    }
  }, 200); // 2000 milliseconds = 2 seconds
}
