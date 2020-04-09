slidder
landing
window.onload=()=>{
    slidder=document.getElementById("slidder")
    landing=document.getElementById("landing")
}

slidder.oninput=()=>{
    console.log(slidder.value)
    var scale=slidder.value/10
    if(scale<10){
        landing.style.transform="scale("+slidder.value+")"
    }else{
        landing.style.transform="scale("+scale+")"
    }
}