// Daniel Shiffman
// https://thecodingtrain.com/challenges/86-cube-wave-by-bees-and-bombs
// https://youtu.be/H81Tdrmz2LA
// https://beesandbombs.tumblr.com/post/149654056864/cube-wave

let angle = 0;
let w = 8;
let ma;
let maxD;

let frames = 144;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 0, 200, 200);
}

function keyPressed() {
  if (key == " ") {
    const options = {
      units: "frames",
      delay: 0
    }
    saveGif("beesandbombs.gif", frames, options);
  }
}

function draw() {
  background(129, 74, 105);
  ortho(-400, 400, 400, -400, 0, 600);
  rotateX(-ma);
  rotateY(-QUARTER_PI);

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 3, height / 3);
      let offset = map(d, 0, maxD, -PI * 4, PI * 4);
      let a = angle + offset * 0.5;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial();
      box(w, h, w);
      //rect(x - width / 2 + w / 2, 0, w - 2, h);
      pop();
    }
  }

  angle -= TWO_PI / frames;
}
