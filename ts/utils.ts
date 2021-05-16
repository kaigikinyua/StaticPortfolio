var Dev=true;
function getRequest(url:string,callback:Function){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{callback(data)})
    .catch(e=>{
        Notif.devError(`Failed get Request\n url:${url} error:${e}`)
        Notif.userError("Sorry there was an error while loading the data")
    })    
}

class Notif{
    static devError(message:string){if(Dev){console.log(message)}}
    static userError(message:string){
        Notif.notifComponent('error',message)
    }
    static success(message:string){
        Notif.notifComponent('success',message)
    }
    static notifComponent(componentClass:string,message:string){
        var notif=document.createElement('div')
        notif.id="notif"
        notif.classList.add(componentClass)
        var cancel=document.createElement('div')
        cancel.classList.add('notif_cancel')
        cancel.innerHTML='<i class="fa fa-cancel"></i>'
        cancel.addEventListener('click',(e)=>{notif.setAttribute('display','none');document.removeChild(notif)})
        notif.innerHTML=`<p>${message}</p>${cancel}`
    }
}
class Theme{
    static theme='light'
    static saveTheme(){
        try{localStorage.setItem('theme',Theme.theme)}
        catch(e){
            Notif.userError("Could not save theme setting")
            Notif.devError(`Could not save theme\nerror:${e}`)
        }
    }
    static getTheme(){
        var theme:string|null=''
        try{ theme=localStorage.getItem('theme')}
        catch(e){
            theme=Theme.theme
            Notif.devError(`Could not load theme\nError:${e}`)
        }
        return theme
    }
    static changeTheme(){
        var themes_location="./static/css/global/theme/"
        var filenames={dark:"dark_theme.css",light:"light_theme.css"}
        var t=Theme.getTheme()
        if(t==='light'){
            themes_location+=filenames.dark
            Theme.theme='dark'
        }else{
            themes_location+=filenames.light
            Theme.theme='light'
        }
        var theme_link=document.getElementById('theme')
        theme_link?.setAttribute('href',themes_location)
    }
}
export{ Dev,getRequest,Notif,Theme}