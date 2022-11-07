// const { text } = require("express");

let socket = io();

function getRandomRGB() {
    return [
      Math.ceil(Math.random() * 255),
      Math.ceil(Math.random() * 255),
      Math.ceil(Math.random() * 255),
    ];
  }

//Listen for confirmation of connection
socket.on('connect', ()=>{
    console.log("Connected!");
});



function setup() {
    createCanvas(windowWidth, windowHeight);
   
   

    socket.on('dataAll', (obj)=>{
        console.log("DataAll message received!!!");
        console.log(obj);
        // drawPos(obj);
        drawPre(obj);
    });
}

function draw(){
    // background(getRandomRGB());
    textAlign(CENTER);
    textSize(92);
    fill(255);
    text("Click to Change", width/2, height/2); 
}

function mousePressed(){
    let mousePre = {x: mouseX, y:mouseY};
    socket.emit('data', mousePre);
    }



// function mouseMoved() {
//     // fill(0);
//     // ellipse(mouseX, mouseY, 10,10);

//     let mousePos = {x: mouseX, y:mouseY};
//     socket.emit('data', mousePos);

// }


// function drawPos(posObj) {
//     fill(0);
//     ellipse(posObj.x, posObj.y, 10,10);
// }

function drawPre(preObj) { 
    background(getRandomRGB());
}