let distMouse = 50;
let cols;
let rows;
let size = 20;
let offset = 4;
let blocks = [];

/* LAV SENERE HVIS TID
let progress = 0; // Progress of the loading bar
let maxProgress = 100; // Maximum progress value
let loadingSpeed = 1.5; // Speed of progress increase
*/

function setup() {
  let container = document.getElementById("sketch-container");
  let w = container.clientWidth;
  let h = container.clientHeight;

  let cnv = createCanvas(w, h);
  cnv.parent("sketch-container");
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;

  for (let i = 0; i < cols; i++) {
    blocks[i] = [];
    for (let j = 0; j < rows; j++) {
      blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }
}
