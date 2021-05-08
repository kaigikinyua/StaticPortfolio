class ProjectList extends React.Component{
    //props=>{project List}
    constructor(props,context){
        super(props,context)
        this.state={ showProject:false,pid:0}
        this.viewProject=this.viewProject.bind(this)
        this.closeProject=this.closeProject.bind(this)
    }
    viewProject(projectId){this.setState({showProject:true,pid:projectId})}
    closeProject(projectId){this.setState({showProject:false})}
    render(){
        var projectList=this.props.projectList.map((project,index)=>{
            return <Project projectName={project.projectName} smallDesc={project.smallDesc} pId={index} key={index.toString()}/>
        })
        console.log(projectList)
        return (
            <div className="container center projectList">
                {projectList}
                { this.state.showProject?<ViewProject pid={this.state.pid} projects={this.props.projeList}/>:""}
            </div>
        )
    }
}


class ViewProject extends React.Component{
    //props=>{projectid}
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="viewProject">

            </div>
        )
    }
}


class Project extends React.Component{
    //props =>{projectname,smalldesc,projectid}
    constructor(props,context){
        super(props,context);
    }
    render(){
        return(
            <div className="projectCard">
                <h3 className="title center">{this.props.projectName}</h3>
                <p>{this.props.smallDesc}</p>
                <button className="call_to_action">Read More</button>
            </div>
        )
    }
}
var projects=[
    {"projectName":"ProjectOne","smallDesc":"This is the project Description"},
    {"projectName":"ProjectOne","smallDesc":"This is the project Description"},
    {"projectName":"ProjectOne","smallDesc":"This is the project Description"},
    {"projectName":"ProjectOne","smallDesc":"This is the project Description"},
    {"projectName":"ProjectOne","smallDesc":"This is the project Description"},
    {"projectName":"ProjectOne","smallDesc":"This is the project Description"},
    {"projectName":"ProjectOne","smallDesc":"This is the project Description"},
    {"projectName":"ProjectOne","smallDesc":"This is the project Description"},
]

ReactDOM.render(<ProjectList projectList={projects}/>,document.getElementById("projectList"))