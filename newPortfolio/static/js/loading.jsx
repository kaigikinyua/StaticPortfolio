let loadingPage=document.getElementById('loadingPage')
class Loading extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="loadingComponent" id="loadingComponent">
                <div className="img">
                    <img src="./static/images/loading.png" alt="" className="src"/>
                </div>
                <div className="loading">
                    <div id="loading_bar"></div>
                    <div id="loading_text"></div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Loading/>,loadingPage)
var max=99,i=0;
setInterval(()=>{incrementLoading()},10)
function incrementLoading(){
 var loading_bar=document.getElementById('loading_bar')
 var loading_text=document.getElementById('loading_text')
 if(i<max){
     loading_bar.style.width=`${i}%`
     loading_text.innerHTML=`${i}%`
     i+=3
 }   
}

window.onload=function(){
    //hide Loading component
    loadingPage.style.display="none;"
    console.log("page loaded")
}
console.log(window.onload)