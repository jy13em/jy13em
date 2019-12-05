let picture = []
var videoScale = 16;
var cols, rows;
 

function preload(){
    picture[0] = loadImage('pic/pic1.png');
    picture[1] = loadImage('pic/pic2.jpg');
    picture[2] = loadImage('pic/pic3.jpg');
    picture[3] = loadImage('pic/pic4.jpg');
    picture[4] = loadImage('pic/pic5.jpg');
}

function setup() {
//  var r = floor(random(0, picture.length));
  createCanvas(window.innerWidth, window.innerHeight);
  cols = picture[0].width/videoScale;
  rows = picture[0].height/videoScale;
  
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();
}

function draw() {
  background(0);
  video.loadPixels();
  
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      var loc = ((cols - i - 1) + j * cols) * 4;
      var p = video.pixels[loc   ]; 
      var g = video.pixels[loc + 1];
      var b = video.pixels[loc + 2];
      
      var sz = map((p+g+b)/3, 0, 255, 0, videoScale);
      rectMode(CENTER);
      fill(227,141,20);
      noStroke();
      var x = i*videoScale;
      var y = j*videoScale;
      image(picture[0], x + videoScale/2, y + videoScale/2, sz, sz);
    }
  }
}