window.onload= async ()=>{
    //setInterval(increment,1000);
    for(var i=0;i<100;i++){
        increment();
        await sleep(90);
    }  
}
function increment(){
    var dom_inc=document.querySelectorAll('.increment');
    dom_inc.forEach(element => {
        var val=parseInt(element.innerHTML)
        val+=parseInt(element.dataset.inc)
        element.innerHTML=val
    });
}
function sleep(time){
    return new Promise(resolve=>setTimeout(resolve,time));
}


function tabsActionListener(){
    var buttons=document.querySelectorAll('tab-button')
    buttons.forEach(button=>{
        button.addEventListener('click',e=>{
            changeTab(e);
        })
    })
}
function changeTab(e){
    var tab=e.target.dataset.tab
    var tabActivate=document.getElementById(tab);
    tabActivate.classList.toggle('active')
    activateTabButton(e)
}
function activateTabButton(e){
    
}