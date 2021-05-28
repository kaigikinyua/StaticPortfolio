class TodosContainer extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        var todoTiles=this.props.todos.map((todo,index)=>{
            console.log(todo)
            return <TodoTile todo={todo} key={index.toString()}/>
        })
        return (
            <div className="todosList">
                <TodoAppBar/>
                {todoTiles}
            </div>
        )
    }
}


class TodoAppBar extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="appbar">
                <h3>Todos</h3>
                <div className="actions">
                    <button className="icn_btn">Add</button>
                    <button className="icon_btn">Select</button>
                </div>
            </div>
        )
    }
}

class TodoTile extends React.Component{
    constructor(props,context){
        super(props,context)
        this.deleteTodo=this.deleteTodo.bind(this)
        this.state={expired:false}
    }
    deleteTodo(){}
    render(){
        /*edit to add the new dealine system*/
        var time=`${this.props.todo.deadline.hour}:${this.props.todo.deadline.minutes}, ${this.props.todo.deadline.day}`
        return(
            <div className="todoTile">
                <div className="todoText">
                    <h3>{this.props.todo.task}</h3>
                </div>
                <div className="info">
                    <div>{time}</div>
                    <div><i className="fa fa-plus"></i></div>
                    <div className="state"></div>
                </div>
            </div>
        )
    }
}
var todos=[
    /*task:"",subTasks:[{task:"",done:?}],deadline:{date:"dd/mm/yyy",time:"hh:mm"},done:?*/
    {task:"Buy a Graphics card",deadline:{day:6,month:"Jun",year:2021,hour:10,minutes:16},done:false},
    {task:"Buy a Ryzen CPU",deadline:{day:6,month:"Jun",year:2021,hour:15,minutes:30},done:false},
]
function getTodos(){
    var usersTodos
    if(localStorageAvailable()){usersTodos=localStorage.getItem('todos')}
    else{usersTodos=[]}
    return usersTodos
}
function saveNewTodo(todo){
    var todos=getTodos()
    todos.push(todo)
    localStorage.setItem('todos',todos)
}
function addSubTodo({todoID,}){

}
function localStorageAvailable(){
    try{if (localStorage){return true}}
    catch(e){/*display error*/}
    return false
}

ReactDOM.render(<TodosContainer todos={todos}/>,document.getElementById('app'))