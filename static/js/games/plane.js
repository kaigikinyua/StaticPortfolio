var canvas=document.getElementById("planes")
var context=canvas.getContext("2d")

var planeCordinates={"x":100,"y":400}
var planePower=50
var planePitch=0

var canvasWidth=0; 
var canvasHeight=0;

var plane=new Image()
plane.src="/static/images/plane.png"

window.onload=()=>{
    startGame()
    canvas.width=500
    canvas.height=700
}

function startGame(){
    requestAnimationFrame(moveSky)
}


function drawPlane(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(plane,planeCordinates.x,planeCordinates.y,200,140);
    planeCordinates.x-=0
    planeCordinates.y-=1
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    requestAnimationFrame(moveSky)
}

function moveSky(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    drawPlane();
}
function addPower(){}
function deductPower(){}

function moveUp(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    plane.style.transform="rotate(-30deg);"
}
function moveDown(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    plane.style.transform="rotate(-30deg)"
}

function planeControls(){
    document.addEventListener('keydown',function(e){
        switch(e.keyCode){
            case 38:
                console.log("up")
                break;
            case 40:
                console.log("down")
                break;
        }
    });
}