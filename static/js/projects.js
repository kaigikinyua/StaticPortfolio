const debug=true
var baseUrl="http://127.0.0.1:5500/";

var projects=[]
var currProjectImages=[]

if(debug==false){
    var base="https://kaigikinyua.github.io/StaticPortfolio/"
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
    console.log(project["project"][0]["title"])
    console.log(project["project"][1]["link"])
    console.log(project["project"][2]["description"])
    console.log(project["project"][3]["images"])
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
    viewImages.classList.add("link")
    viewImages.innerHTML="<i class='fa fa-image' data-project="+project["project"][0]["title"]+"></i>"
    viewImages.addEventListener('click',(e)=>{
       // console.log(e.target.dataset["project"]);
        showProjectImages(e.target.dataset["project"]);
    });
    plinks.appendChild(extraLink)
    plinks.appendChild(viewImages)
    newProject.appendChild(plinks)
    //final append
    page.appendChild(newProject)
}


function showProjectImages(projectName){
    //search project name in projects
    var imgNum=0
    projects.forEach(proj=>{
        if(proj["project"][0]["title"]==projectName){
            console.log(proj["project"][3]["images"])
            imgNum=proj["project"][3]["images"].length
            var projTitle=document.getElementById("project_title");
            projTitle.innerHTML="<h3 class='title'>"+projectName+"</h3>"
            var projectImages=document.getElementById("projectImages");
            proj["project"][3]["images"].forEach(img=>{
                var image=document.createElement("img")
                image.src=img["image"]
                image.classList.add("projectImage");
                projectImages.appendChild(image)
            });
        }
    })

}


//services
//service fetch
function fetchData(url,fn){
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