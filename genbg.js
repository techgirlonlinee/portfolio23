function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(180);
  //   strokeWeight(24);
  strokeCap(SQUARE);

  // Generate random colors for the paint style background
  //   const colors = ["#fff", "#ff0000", "#00ff00", "#0000ff"];
  //   const colors = ["#000000"];

  // Draw random lines with random colors
  for (let i = 0; i < 10; i++) {
    const x1 = random(width);
    const y1 = random(height);
    const x2 = random(width);
    const y2 = random(height);
    // const color = colors[floor(random(colors.length))];
    // const weight = random(10, 200);

    // strokeWeight(weight);
    stroke(0);
    line(x1, y1, x2, y2);
  }
}
