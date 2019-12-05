let angle = 0;
//let cam;

let picture;

function preload(){
    picture = loadImage('pic/pic1.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //cam = createCapture(VIDEO);
  //cam.size(320, 240);
  //cam.hide();
}

function draw() {
    background(175);
    
    //shake cam
    //let camX = random(-5, 5);
    //let camY = random(-5, 5);
    //let camZ = random(-5, 5);
     //camera(camX, camY, camZ + (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0)
    
    //moving cam
    //let camX = map(mouseX, 0, width, -200, 200);
    //camera(camX, 0, (height/2) / tan(PI/6), camX, 0, 0, 0, 1, 0)
    
    //perspective view
    let fov = map(mouseX, 0, width, 0, PI);
    let cameraZ = (height / 2.0) / tan((PI / 3) / 2.0);
    perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);
   
    
    //new light
    //let dx = mouseX - width / 2;
    //let dy = mouseY - height / 2;
    //let v = createVector(dx, dy, 0);
    //v.div(100);
    ortho();
    ambientLight(100);
    directionalLight(255, 255, 255, 0, 1, 1);
    //pointLight(255, 255, 255, 0, -200, 200);

    for (let x = -500; x < 500; x += 50) {
    push();
    translate(x, 0, 0);
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1,2);
    noStroke();
    texture(picture);
    box(55);
    pop();
}
    
    translate(0, 300);
    rotateX(HALF_PI);
    ambientMaterial(255);
    //plane(500, 500);
    
    angle += 0.04;
}