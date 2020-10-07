const debug=false
var baseUrl="http://localhost:5500/";
//var baseUrl="http://127.0.0.1:5500/";
var projects=[]

//project images
var currProjectImages=[]
var currImageNum=0

if(debug==false){
    baseUrl="https://kaigikinyua.github.io/StaticPortfolio/"
}

window.onload=()=>{
    getProjects();
 //   setTimeout(()=>{hide('loading')},2000)
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
               addProject(project.project)
            });
        }else{
            console.log(data)
        }
    })
}
function addProject(project){
    console.log(project.title)
   var projectList=document.getElementById('projectList')
   var project_UI=document.createElement('div')
   project_UI.dataset.projectname=project.title
   project_UI.classList.add('project')
   var html="<div class='title'><h3>"+project.title+"</h3></div><div class='p_content'><p class='s_desc'>"+project.short_desc+"</p><div class='more'><button>Read More</button><a href='"+project.git+"'><div class='git_link'><i class='fab fa-github'></i></div></a> </div></div>"
   project_UI.innerHTML=html
   project_UI.addEventListener('click',(e)=>{
    expandProject(project.title)
   })
   projectList.appendChild(project_UI) 
}


function expandProject(projectTitle){
    clearPreviousProject()
    projects.forEach(project=>{
        if(project.project.title==projectTitle){
            console.log(projectTitle)
            project=project.project
            var pTitle=document.getElementById('e_projectTitle')
            var pStatusTxt=document.getElementById('status_txt')
            var pStatusCol=document.getElementById('status_circle')
            var pGitLink=document.getElementById('git_link')
            var projectDesc=document.getElementById('projectDesc')
            var pImages=document.getElementById('projectImages')
        
            pTitle.innerHTML=projectTitle
            pStatusTxt.innerHTML="Status:"+project.status
            pGitLink.href=project.git
            project.description.forEach(desc=>{
                var par=document.createElement('p')
                par.innerHTML=desc.paragraph
                projectDesc.appendChild(par)
            })
            project.images.forEach(image=>{
                var img=document.createElement('img')
                img.src=image.image
                pImages.appendChild(img)
            })

            if(project.status=="complete"){
                pStatusCol.style.background="lightgreen"
            }else{
                pStatusCol.style.background="yellow"
            }
            var expand=document.getElementById('expandProject')
            expand.style.display="block"
        }
    })
}

function clearPreviousProject(){
    var pTitle=document.getElementById('e_projectTitle')
    var pStatusTxt=document.getElementById('status_txt')
    var pStatusCol=document.getElementById('status_circle')
    var pGitLink=document.getElementById('git_link')
    var projectDesc=document.getElementById('projectDesc')
    var pImages=document.getElementById('projectImages')
    var previousProject=[pTitle,pStatusCol,pStatusTxt,pGitLink,projectDesc,pImages]
    previousProject.forEach(elem=>{
        elem.innerHTML=""
    })
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

function errorMessage(message){
    console.error(message);
}







class Project{
    projectName=""
    constructor(projectName){
        this.projectName=projectName
    }
    addProjectTile(projectName,projectShortDesc,gitLink){
        
    }
    viewProject(projectName){}

    //utilities
    getProjectData(){
        projects.forEach(project=>{
            if(project.project.title==this.projectName){
                return project
            }
        });
        return false
    }
    addHtml(elementID,data){
        var elm=document.getElementById(elementID)
        elm.innerHTML=data
        return elem
    }
}
