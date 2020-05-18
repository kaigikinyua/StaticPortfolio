const debug=true
var baseUrl="http://192.168.0.134:5500/";

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
   var html="<h3 class='title'>"+project.title+"</h3><p class='s_desc'>"+project.short_desc+"</p><a href='"+project.git+"'><div class='git_link'><i class='fab fa-github'></i></div></a>"
   project_UI.innerHTML=html
   project_UI.addEventListener('click',(e)=>{
    expandProject(project.title)
   })
   projectList.appendChild(project_UI) 
}


function expandProject(projectTitle){
    console.log(projectTitle)
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