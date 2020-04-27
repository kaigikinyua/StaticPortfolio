window.onload=()=>{
    setTimeout(()=>{hide('loading')},2000)
}

function show(id){
    var elem=document.getElementById(id)
    elem.style.display="none"
}
function hide(id){
    var elem=document.getElementById(id)
    elem.style.display="none"
}
