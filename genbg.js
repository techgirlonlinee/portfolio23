function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(180);
  strokeCap(SQUARE);

  for (let i = 0; i < 10; i++) {
    const x1 = random(width);
    const y1 = random(height);
    const x2 = random(width);
    const y2 = random(height);

    // const weight = random(10, 200);

    stroke(0);
    line(x1, y1, x2, y2);
  }
}
