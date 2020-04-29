const debug=false
var baseUrl="http://192.168.0.134:5500/";

var projects=[]

//project images
var currProjectImages=[]
var currImageNum=0

if(debug==false){
    var baseUrl="https://kaigikinyua.github.io/StaticPortfolio/"
}

window.onload=()=>{
    getProjects();
    setTimeout(()=>{hide('loading')},2000)
}

//projects page UI
//get projects
function getProjects(){
    var url=baseUrl+"projects.json"
    fetchData(url,(data)=>{
       // console.log("fetching projects")
        if(data!=undefined && data!=null){
            projects=data["projects"]
            projects.forEach(project => {
                addProject(project)
            });
        }else{
            console.log(data)
        }
    })
}

function addProject(project){
    //console.log(project["project"][0]["title"])
    //console.log(project["project"][1]["link"])
    //console.log(project["project"][2]["description"])
    //console.log(project["project"][3]["images"])
    var page=document.getElementById("myprojects")
    var newProject=document.createElement("div")
    newProject.classList.add("project");
    //project title
    var project_title=document.createElement("div")
    project_title.innerHTML="<h3 class='title'>"+project["project"][0]["title"]+"</h3>"
    newProject.appendChild(project_title)
    //project descriptions
    var project_desc=document.createElement("div")
    project_desc.classList.add("description");
    project["project"][2]["description"].forEach(desc=>{
        var paragraph=document.createElement("p")
        paragraph.innerHTML=desc["paragraph"]
        project_desc.appendChild(paragraph)
    })
    newProject.appendChild(project_desc)

    //actions
    
    var plinks=document.createElement("div");
    plinks.classList.add("projectlinks");
    var extraLink=document.createElement("a")
    extraLink.href=project["project"][1]["link"]
    if(project["project"][1]["type"]=="documentation"){
        extraLink.innerHTML="<button class='link'><i class='fa fa-file'></i><small>Documentation</small></button>"
        plinks.appendChild(extraLink)
    }else if(project["project"][1]["type"]=="view"){
        extraLink.innerHTML="<button class='link'><i class='fa fab-facebook'></i><small>Images</small></button>"
        plinks.appendChild(extraLink)
    }//upgrade latter 
    var viewImages=document.createElement("button")
    viewImages.dataset["project"]=project["project"][0]["title"]
    viewImages.classList.add("link")
    viewImages.innerHTML="<i class='fa fa-image' data-project="+project["project"][0]["title"]+"></i><small data-project="+project["project"][0]["title"]+">Images</small>"
    viewImages.addEventListener('click',(e)=>{
        showProjectImages(e.target.dataset["project"]);
    });
    plinks.appendChild(extraLink)
    plinks.appendChild(viewImages)
    newProject.appendChild(plinks)
    //final append
    page.appendChild(newProject)
}


function clearProjectImages(){
    var images=document.querySelectorAll("div.imageCover")
    images.forEach(active=>{
        active.parentNode.removeChild(active)
    })
}
function showProjectImages(projectName){
    //search project name in projects
    clearProjectImages()
    projects.forEach(proj=>{
        if(proj["project"][0]["title"]==projectName){
            console.log(proj["project"][3]["images"])
            currProjectImages=proj["project"][3]["images"]
            console.log(currProjectImages)
            imgNum=proj["project"][3]["images"].length
            var projTitle=document.getElementById("project_title");
            projTitle.innerHTML="<h3 class='title'>"+projectName+"</h3>"
            var projectImages=document.getElementById("projectImages");
            var index=0;
            proj["project"][3]["images"].forEach(img=>{
                var imageCover=document.createElement("div");
                imageCover.classList.add("imageCover");
                if(index==0){
                    imageCover.classList.add('activeSlide');
                }else{
                    imageCover.classList.add('deactiveSlide');
                }index+=1;

                var image=new Image()//document.createElement("img")
                image.src=img["image"]
                image.classList.add("projectImage");
                
                var imageLoading=document.createElement("div")
                imageLoading.classList="imageLoading"
                imageCover.appendChild(imageLoading)
                imageCover.appendChild(image)
                image.onload=()=>{
                    var imageLoaders=document.querySelectorAll("div.imageLoading");
                    imageLoaders.forEach(loader=>{
                        loader.style.display="none"
                        console.log("remove")
                    })
                    
                }
                projectImages.appendChild(imageCover)
                
            });
            var imageSlidder=document.getElementById('project_slidder')
            imageSlidder.style.display="block"
            //projectImages.style.width=imgNum+"00%";
        }
    })

}

function imageCounter(){
    console.log(currImageNum+"/"+currProjectImages.length)
}
function removeAciveClass(){
    var active=document.querySelectorAll("div.imageCover")
    active.forEach(elem=>{
        elem.classList.remove("activeSlide")
        elem.classList.add("deactiveSlide")
    })
}
function nextImage(){
    if(currImageNum<currProjectImages.length-1 && currImageNum>-1){ 
        removeAciveClass()
        var imageCovers =document.querySelectorAll("div.imageCover");
        if(currImageNum+1<currProjectImages.length){
            imageCovers[currImageNum+1].classList.remove("deactiveSlide");
            imageCovers[currImageNum+1].classList.add("activeSlide")
            currImageNum+=1
        }else{
            currImageNum=currImageNum.length-1
            imageCovers[currImageNum].classList.remove("deactiveSlide");
            imageCovers[currImageNum].classList.add("activeSlide")
        }
        imageCounter()
    }
}
function prevImage(){
    if(currImageNum>0){
        removeAciveClass()
        var imageCovers=document.querySelectorAll("div.imageCover")
        if(currImageNum-1>0){
            imageCovers[currImageNum-1].classList.remove("deactiveSlide");
            imageCovers[currImageNum-1].classList.add("aciveSlide")
            currImageNum-=1

        }else{
            currImageNum=0
            imageCovers[currImageNum].classList.remove("deactiveSlide");
            imageCovers[currImageNum].classList.add("aciveSlide")
        }
        imageCounter()
     }
}


//services
//service fetch
function fetchData(url,fn){
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>fn(data))
    .catch(error=>{
        errorMessage("Error fetching data "+error);
    });
}
//open new tab
function newTab(url){

}

//messages
//display error message
function errorMessage(message){
    console.log(message);
}