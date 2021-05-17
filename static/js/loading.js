const changeThemeButton=document.getElementById('changeTheme')
changeThemeButton.addEventListener('click',(e)=>{changeTheme()})
var currTheme="light"

function changeTheme(){
    var themeCss=document.getElementById("theme")
    if(currTheme=="light"){
        themeCss.href="./static/css/theme/dark_theme.css"
        currTheme="dark"
    }
    else{
        themeCss.href="./static/css/theme/light_theme.css"
        currTheme="light"
    }
    saveTheme(currTheme)
}
function saveTheme(theme){
    try{
        localStorage.setItem("theme",theme)
    }catch(e){
        console.log("cannot save theme")
    }
}
function loadTheme(){
    const themeLoc={"light":"./static/css/theme/light_theme.css","dark":"/static/css/theme/dark_theme.css"}
    var theme="light"
    try{
        theme=localStorage.getItem("theme")
        if(theme=="light" || theme=="dark"){
            var themeCss=document.getElementById("theme")
            themeCss.href=themeLoc[theme]
            console.log(themeLoc[theme])
        }else{
            saveTheme("light")
        }
    }catch(e){
        console.log("theme was not set")
    }
    return theme
}




const loadingComponent=`
    <div class="loadingComponent" id="loadingComponent">
    <div class="img">
        <img src="./static/images/loading.png" alt="" class="src"/>
    </div>
    <div class="loading">
        <div id="loading_bar"></div>
        <div id="loading_text"></div>
    </div>
    </div>

`
var max=99,i=0
function addLoadingComponent(){
    var body=document.querySelector('body')
    var lsection=document.createElement("section")
    lsection.innerHTML=loadingComponent
    lsection.classList.add("loadingPage")
    lsection.id="loadingPage"
    body.appendChild(lsection)
}
function removeLoadingComponent(){
    let loadingPage=document.getElementById('loadingPage')
    loadingPage.style.display="none"
    loadingPage.style.overflow="hidden"
    loadingPage.style.height="0px"
    //console.log(loadingPage)
    //loadingPage.remove()
}
function incrementLoading(){
    var loading_bar=document.getElementById('loading_bar')
    var loading_text=document.getElementById('loading_text')
    console.log("incrementing")
    if(i<max){
        loading_bar.style.width=`${i}%`
        loading_text.innerHTML=`${i}%`
        i+=3
    }   
}
addLoadingComponent()
var loading=setInterval(()=>{
    incrementLoading()
},100);
window.onload=()=>{
    setTimeout(()=>{
        loadTheme()
    },3000)
    setTimeout(()=>{
        clearInterval(loading)
        i=97
        incrementLoading()
        removeLoadingComponent()
    },2000)
}
