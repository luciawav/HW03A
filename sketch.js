let circleSizeS = 12; // Diameter of each smallcircle
let circleSizeL = 25; // Diameter of each largecircle

let spacingXS = 47; // Horizontal spacing between smallcircle
let spacingYS = 50; // Vertical spacing between smallcircle

let spacingXL = 93; // Horizontal spacing between largecircle
let spacingYL = 101; // Vertical spacing between largecircle



function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  noStroke();
  fill(222,200,42);
  rect(0,0,677,910);
  //rect


  fill(0);
  for (let x = circleSizeS / 2; x < 700; x += spacingXS) {
    for (let y = circleSizeS / 2; y < 900; y += spacingYS) {
      ellipse(x, y, circleSizeS, circleSizeS);
    }
  }//small 
  
  for (let i = circleSizeL/2 ; i < 700; i += spacingXL) {
    for (let j = 0 ; j < 900; j += spacingYL) {
      ellipse(i,j, circleSizeL, circleSizeL);
    }
  }//large 1 regular
 
  translate(43, 51);
  for (let i = circleSizeL/2 ; i < 600; i += spacingXL) {
    for (let j = 0 ; j < 817; j += spacingYL) {
      ellipse(i,j, circleSizeL, circleSizeL);
    }
  }//large 2 


 
}
