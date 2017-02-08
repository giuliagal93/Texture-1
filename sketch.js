function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 100);
  frameRate(5);
  noStroke();


}

function draw() {

  var a = 20;
  var sat = 0;



  if (mouseIsPressed) {
    sat = 70;
  } else {
    sat = 0;
  }


  // ciclo griglia triangoli a testa in giù
  for (var x = 0; x < 620; x += 20) {
    for (var y = 0; y < 620; y += 40) {



      // triangoli testa in giù - 1
      var hue = 100 * random() + 25;
      var lum = random() * 100 + 30;

      fill(hue, sat, lum);

      beginShape();
      vertex(x, y);
      vertex(x + a, y);
      vertex(x + a / 2, y + a);
      endShape(CLOSE);

      // triangoli testa in giù - 2
      var huedue = 100 * random() + 15;
      var lumdue = random() * 100 + 30

      fill(huedue, sat, lumdue);

      beginShape();
      vertex(x - a / 2, y + a);
      vertex(x + a / 2, y + a);
      vertex(x, y + 2 * a);
      endShape(CLOSE);
    }
  }

  // ciclo griglia triangoli a testa in su
  for (var x2 = -20; x2 < 620; x2 += 20) {
    for (var y2 = 0; y2 < 620; y2 += (20) * 2) {



      // triangoli testa in su - 1
      var huetre = 100 * random() + 35;
      var lumtre = random() * 100 + 30;

      fill(huetre, sat, lumtre);

      beginShape();
      vertex(x2, y2);
      vertex(x2 + a / 2, y2 + a);
      vertex(x2 - a / 2, y2 + a);
      endShape(CLOSE);

      // triangoli testa in su - 2
      var lumquat = random() * 100 + 30
      var huequat = 100 * random() + 15;

      fill(huequat, sat, lumquat);


      beginShape();
      vertex(x2, y2);
      vertex(x2 + a / 2, y2 - a);
      vertex(x2 + a, y2);
      endShape(CLOSE)
    }
  }
  fill(255);
  rect((width / 2) - 90, (height / 2) - 20, 180, 40);
  textSize(12);
  textFont("Helvetica");
  s = "C L I C K F O R C O L O R";
  fill(0);
  text(s, (width / 2) - 73, (height / 2) - 5, 200, 30);

}