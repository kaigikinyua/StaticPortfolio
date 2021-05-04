var currloadValue:number=0
const maxOut:number=99
const parentHeightPercent=80
//dom elements
const loading_page=document.getElementById('loading_page') as HTMLDivElement
const domLoadingContainer=document.getElementById('loading_value') as HTMLDivElement
const loadingBar=document.getElementById('loading_bar') as HTMLDivElement
const pageLoading=setInterval(()=>{
    console.log("loading")
    incrementLoading()
},50)

window.onload=()=>{
    //best case scenario of disposing the animation is settingTimeOut to 3000
    setTimeout(()=>{finishLoading()},3000)
}
function startLoading(){
    console.log("start loading")
    loading_page.setAttribute('display','fixed')
    domLoadingContainer.innerHTML=`${currloadValue}%`
    pageLoading    
}
function incrementLoading(){
    if(currloadValue<maxOut){currloadValue+=1}
    domLoadingContainer.innerHTML=`${currloadValue}%`
    loadingBar.setAttribute('style',`bottom:-${maxOut-currloadValue}%;`)    
}
function finishLoading(){
    clearInterval(pageLoading)
    currloadValue=maxOut
    incrementLoading()
    setTimeout(()=>{
        //loading_page.setAttribute('style','display:none;')
        console.log("deleting loading page")
    },500)
}


startLoading()