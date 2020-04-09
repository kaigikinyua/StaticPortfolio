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
    plane.style.transform="rotate(40deg)"
    context.drawImage(plane,planeCordinates.x,planeCordinates.y,200,140);
    planeCordinates.x-=0
    planeCordinates.y-=1
    if(planeCordinates.x+plane.width>canvas.style.width || canvas.style.width-(plane.width+canvas.style.width)){
        planeCordinates.x+=2
    }
    if(planeCordinates.y+plane.height>canvas.style.height || canvas.style.height-(planeCordinates.y+plane.height)<0){
        planeCordinates.y+=2
    }
    planeControls()
    requestAnimationFrame(moveSky)
}

function moveSky(){
    context.clearRect(0, 0, 500, 700);
    drawPlane();
}
function addPower(){}
function deductPower(){}

function moveUp(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.translate(plane.width*0.5,plane.height*0.5)
    context.rotate(2*0.01745)
    context.translate(-plane.width*0.5,-plane.height*0.5)
    drawPlane()
}
function moveDown(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    plane.style.transform="rotate(-30deg)"
}

function planeControls(){
    document.addEventListener('keydown',function(e){
        switch(e.keyCode){
            case 38:
                requestAnimationFrame(moveUp)
                break;
            case 40:
                requestAnimationFrame(moveDown)
                break;
        }
    });
}