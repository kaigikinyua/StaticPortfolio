class ProjectList extends React.Component{
    //props=>{project List}
    constructor(props,context){
        super(props,context)
        this.state={ showProject:false,pid:0}
        this.viewProject=this.viewProject.bind(this)
        this.closeProject=this.closeProject.bind(this)
    }
    viewProject(projectId){
        //console.log(projectId)
        this.setState({showProject:true,pid:projectId})
    }
    closeProject(projectId){
        this.setState({showProject:false})
    }
    render(){
        var projectList=this.props.projectList.map((project,index)=>{
            return <Project projectName={project.projectName} smallDesc={project.smallDesc} pId={index} key={index.toString()} openProject={this.viewProject}/>
        })
        console.log(projectList)
        return (
            <div className="container center projectList">
                {projectList}
                { this.state.showProject?<ViewProject pid={this.state.pid} projectList={this.props.projectList} cancel={this.closeProject}/>:""}
            </div>
        )
    }
}
class ViewProject extends React.Component{
    //props=>{projectid}
    constructor(props,context){
        super(props,context)
        this.cancelProject=this.cancelProject.bind(this)
    }
    cancelProject(){
        this.props.cancel(this.props.pid)
    }
    render(){
        console.log(this.props.projectList[0])
        var project=this.props.projectList[this.props.pid]
        var siteLink=project.siteLink?<a href={project.siteLink}><button className="call_to_action"><i className="fa fa-link"></i> Website</button></a>:""
        var github=project.github?<a href={project.github}><button className="call_to_action"><i className="fab fa-github"></i> GitHub</button></a>:""
        var parElements=project.paragraphs.map((p,index)=>{
            return <Paragraph title={p.title} paragraphs={p.content}/>
        })
        var images=project.images.map((p,index)=>{
            return <Image imgsrc={p.src}/>
        })
        var languages=project.languages.map((p,index)=>{
            return <Language language={p.language} bg={p.bg}/>
        })
        return(
            <div className="viewProject">
                <div className="viewProjectContainer center">
                    <div className="appbar dual">
                        <div>
                            <h3 className="title">{project.projectName}</h3>
                        </div>
                        <div className="actions">
                            {/*render conditionaly if the github repo is available*/}
                            {github}
                            {siteLink}
                            <button className="cancel" onClick={this.cancelProject}>
                                <i className="fa fa-plus"></i>
                            </button>
                            {/* add github link in projects varisble*/}
                        </div>
                    </div>
                    <div className="projectContent">
                        <div className="languages">
                            {languages}
                        </div>
                        {parElements}
                        {images}
                    </div>
                </div>
            </div>
        )
    }
}
class Paragraph extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        var paragraphs=this.props.paragraphs.map((p,index)=>{
            return <p>{p}</p>
        })
        return (
            <div className="paragraph">
                <h3 className="title">{this.props.title}</h3>
                <div>
                    {paragraphs}
                </div>
            </div>
        )
    }
}
class Image extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="image">
                <img src={this.props.imgsrc} alt="" className="projectImage"/>
            </div>
        )
    }
}
class Language extends React.Component{
    constructor(props,context){
        super(props,context)
        //console.log(this.props.bg)
    }
    render(){
        return (
            <div className="language">
                <div className="l_avatar" style={{background:this.props.bg}}></div>
                <small>{this.props.language}</small>
            </div>
        )
    }
}

class Project extends React.Component{
    //props =>{projectname,smalldesc,projectid}
    constructor(props,context){
        super(props,context);
        this.readMore=this.readMore.bind(this)
    }
    readMore(){
        this.props.openProject(this.props.pId)
    }
    render(){
        return(
            <div className="projectCard">
                <h3 className="title center">{this.props.projectName}</h3>
                <p>{this.props.smallDesc}</p>
                <button className="call_to_action" onClick={this.readMore}>Read More</button>
            </div>
        )
    }
}
var projects=[
    {   "projectName":"ProjectOne","smallDesc":"This is the project Description",
        "paragraphs":[
            {"title":"Project One","paragraph":"Hello WOrld this is the most used programming language quote"},
            {"title":"Project One","paragraph":"Hello WOrld this is the most used programming language quote"}
        ],
        "images":[
            {"src":"./static/images/loading.png"},
            {"src":"./static/images/loading.png"},
            {"src":"./static/images/loading.png"},
            {"src":"./static/images/loading.png"}
        ],
        "languages":[
            {"language":"HTML5","bg":"crimson"},
            {"language":"CSS3","bg":"lightblue"},
            {"language":"JavaScript","bg":"yellow"},
            {"language":"HTML5","bg":"crimson"},
            {"language":"CSS3","bg":"lightblue"},
            {"language":"JavaScript","bg":"yellow"},
            {"language":"HTML5","bg":"crimson"},
            {"language":"CSS3","bg":"lightblue"},
            {"language":"JavaScript","bg":"yellow"},
            {"language":"HTML5","bg":"crimson"},
            {"language":"CSS3","bg":"lightblue"},
            {"language":"JavaScript","bg":"yellow"},
        ]
    },
]
//projects=getProjects()
const myprojects=async ()=>{
    var x=await getProjects()
    console.log(x)
    ReactDOM.render(<ProjectList projectList={x}/>,document.getElementById("projectList"))
}
myprojects()
async function getProjects(fn){
    var response=await fetch("http://localhost:5500/projects.json")
    var data= await response.json()
    return data
}
//console.log(fetchProjects)
