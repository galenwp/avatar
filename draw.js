function mark(axis,i1,i2,q1,q2) {
  p1 = [i1*100,100]
  p2 = [i2*100,500]
  offset = 30
  p1o = [p1[0]-offset,100]
  p2o = [p2[0]-offset,500]
  if(axis === 1) {
    p1.reverse();
    p2.reverse();
    p1o.reverse();
    p2o.reverse();
  }
  grid = []
  for(i=0;i<=6;i++) {
    for(p=0;p<=6;p++) {
      grid.push([i*100,p*100])
    }
  }
  bezier(p1[0],p1[1],grid[q1][0],grid[q1][1],grid[q2][0],grid[q2][1],p2[0],p2[1])

  // offset
  if(axis === 0) {
    grid[q1][0] -= offset
    grid[q2][0] -= offset
  } else {
    grid[q1][1] -= offset
    grid[q2][1] -= offset
  }

  bezier(p1o[0],p1o[1],grid[q1][0],grid[q1][1],grid[q2][0],grid[q2][1],p2o[0],p2o[1])

  // // reflected
  // lp1 = [300,100]
  // lp2 = [300,400]
  // if(axis === 1) {
  //   lp1.reverse()
  //   lp2.reverse()
  // }
  // p1r = reflect(p1,lp1,lp2)
  // p2r = reflect(p2,lp1,lp2)
  // q1r = reflect(grid[q1],lp1,lp2)
  // q2r = reflect(grid[q2],lp1,lp2)
  //
  // bezier(p1r[0],p1r[1],q1r[0],q1r[1],q2r[0],q2r[1],p2r[0],p2r[1])
}

function reflect(p, p0, p1) {
    dx = p1[0] - p0[0];
    dy = p1[1] - p0[1];
    a = (dx * dx - dy * dy) / (dx * dx + dy * dy);
    b = 2 * dx * dy / (dx * dx + dy * dy);
    x = Math.round(a * (p[0] - p0[0]) + b * (p[1] - p0[1]) + p0[0]);
    y = Math.round(b * (p[0] - p0[0]) - a * (p[1] - p0[1]) + p0[1]);

    return [x,y];
}

function points() {
  strokeWeight(4)
  for(i=0; i<=6; i++) {
    for(p=0; p<=6; p++) {
      point(i*100,p*100)
    }
  }
}

function center(nested) {
  s = randomCeil(2)
  strokeWeight(s)
  d = randomCeil(400)
  for(i=0;i<nested;i++) {
    _d = d+(s*i*6)
    a1 = randomCeil(2*Math.PI)
    a2 = randomCeil(2*Math.PI)
    if(i === 0 && _d<100) {
      a1 = 2*Math.PI
      a2 = 2*Math.PI
      fill(255,255,255)
    }
    arc(300,300,_d,_d,a1,a2, HALF_PI)
    noFill()
  }
}

function randomCeil(floor) {
  return Math.ceil(Math.random()*floor);
}

function setup() {
  createCanvas(600, 600);
  frameRate(4)
  stroke(255);
  strokeWeight(2)
  noFill();
}

function draw() {
  background(0);
  points()
  center(randomCeil(1))
  noFill()
  strokeWeight(12)
  strokeCap(SQUARE)
  mark(Math.round(Math.random()),
    randomCeil(5),
    randomCeil(5),
    randomCeil(35),
    randomCeil(35)
  )
  //mark(0,1,3,7,3)
}
