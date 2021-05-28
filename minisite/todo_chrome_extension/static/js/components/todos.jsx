class TodosContainer extends React.Component{
    constructor(props,context){
        super(props,context)
        this.showAddTodo=this.showAddTodo.bind(this)
        this.hideAddTodo=this.hideAddTodo.bind(this)
        this.addNewTodo=this.addNewTodo.bind(this)
    }
    showAddTodo(){}
    hideAddTodo(){}
    addNewTodo(todo){
        console.log(todo)
    }
    render(){
        var todoTiles=this.props.todos.map((todo,index)=>{
            console.log(todo)
            return <TodoTile todo={todo} key={index.toString()}/>
        })
        return (
            <div className="todosList">
                <TodoAppBar/>
                <AddTodoForm addTodo={this.addNewTodo} hideAddTodo={this.hideAddTodo}/>
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
                <h3>Todo List</h3>
                <div className="actions">
                    <button className="icon_btn"><i className="fa fa-plus"></i></button>
                    <button className="icon_btn"><i className="fa fa-list"></i></button>
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
class AddTodoForm extends React.Component{
    constructor(props,context){
        super(props,context)
        this.newTodo=this.newTodo.bind(this)
    }
    newTodo(){
        var tododata={
            todo:document.getElementById("new_todo").value,
            date:document.getElementById("new_todo_date").value,
            time:document.getElementById("new_todo_time").value,
            routine:document.getElementById("routine").value
        }
        this.props.addTodo(tododata)
    }
    render(){
        return (
            <div className="addTodoForm">
                <div className="field">
                    <label>Todo</label>
                    <input id="new_todo" class="text" name="todo" placeholder="Your todo..."/>
                </div>
                <div className="field">
                    <label>Date</label>
                    <input id="new_todo_date" type="date" name="date" placeholder="Todo date DD-MM-YYYY"/>
                </div>
                <div className="field">
                    <lable>Time</lable>
                    <input id="new_todo_time" type="time" name="time" placeholder="Time HH:MM"/>
                </div>
                <div className="field">
                    <label>Routine</label>
                    <input id="routine" type="checkbox" value="1"/>
                </div>
                <button className="submit" onClick={this.newTodo}>Submit</button>
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
function addSubTodo({todoID}){

}
function localStorageAvailable(){
    try{if (localStorage){return true}}
    catch(e){/*display error*/}
    return false
}

ReactDOM.render(<TodosContainer todos={todos}/>,document.getElementById('app'))