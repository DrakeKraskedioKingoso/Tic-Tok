var hr, mn, sc
var scAngle, mnAngle, hrAngle

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0); 
  translate(200, 200)
  rotate(-90)
  hr = hour()
  mn = minute()
  sc = second() 
  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr%12, 0, 12, 0, 360)
  push()
  stroke("red")
  rotate(mnAngle)
  strokeWeight(8)
  line(0, 0, 100, 0)
  pop()

  

  push()
  stroke("blue")
  rotate(hrAngle)
  strokeWeight(8)
  line(0, 0, 50, 0)
  pop()

  push()
  stroke("green")
  rotate(scAngle)
  strokeWeight(8)
  line(0, 0, 75, 0)
  pop()

  strokeWeight(8)
  noFill()
  stroke("green")
  arc(0, 0, 300, 300, 0, scAngle)

  
  stroke("red")
  arc(0, 0, 280, 280, 0, mnAngle)

  
  stroke("blue")
  arc(0, 0, 260, 260, 0, hrAngle)
}