class TodosContainer extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={addTodoFormDisplay:false}
        this.showAddTodo=this.showAddTodo.bind(this)
        this.hideAddTodo=this.hideAddTodo.bind(this)
        this.addNewTodo=this.addNewTodo.bind(this)
        this.addSubTask=this.addSubTask.bind(this)
        this.todoDone=this.todoDone.bind(this)
    }
    showAddTodo(){this.setState({addTodoFormDisplay:true})}
    hideAddTodo(){this.setState({addTodoFormDisplay:false})}
    addNewTodo(todo){
        this.props.todos.push(todo)
        //save todos
    }
    addSubTask(todoIndex,subtask){
        this.props.todos[todoIndex].subTasks.push({task:subtask,done:false})
        console.log(this.props.todos[todoIndex])
    }
    todoDone(todoIndex){
        this.props.todos[todoIndex].done=true
    }
    render(){
        var todoTiles=this.props.todos.map((todo,index)=>{
            console.log(todo)
            return <TodoTile todo={todo} index={index} key={index.toString()} addSubTask={this.addSubTask} onMarkDone={this.todoDone}/>
        })
        return (
            <div className="todosList">
                <div className="appbar">
                    <h3>Todo List</h3>
                    <div className="actions">
                        <button className="icon_btn" onClick={this.showAddTodo}><i className="fa fa-plus"></i></button>
                        <button className="icon_btn"><i className="fa fa-list"></i></button>
                    </div>
                </div>
                {/*<AddTodoForm addTodo={this.addNewTodo} hideAddTodo={this.hideAddTodo}/>*/}
                {todoTiles}
                {this.state.addTodoFormDisplay?<AddTodoForm addTodo={this.addNewTodo} hideAddTodo={this.hideAddTodo}/>:""}
            </div>
        )
    }
}

class TodoTile extends React.Component{
    constructor(props,context){
        super(props,context)
        this.deleteTodo=this.deleteTodo.bind(this)
        this.state={expired:false,showSubTodoForm:false,subTodoList:false,done:this.props.todo.done}
        this.displaySubTodoForm=this.displaySubTodoForm.bind(this)
        this.hideSubTodoForm=this.hideSubTodoForm.bind(this)
        this.addSubTodo=this.addSubTodo.bind(this)
        this.listSubTodos=this.listSubTodos.bind(this)
        this.markDone=this.markDone.bind(this)
    }
    displaySubTodoForm(){this.setState({showSubTodoForm:true})}
    hideSubTodoForm(){this.setState({showSubTodoForm:false})}
    addSubTodo(subTask){this.props.addSubTask(this.props.index,subTask)}
    listSubTodos(){
        this.setState(prevState=>{
            prevState.subTodoList=!prevState.subTodoList
        })
    }
    markDone(){
        this.props.onMarkDone(this.props.index)
        this.setState({done:true})
    }
    deleteSubTodo(){}
    deleteTodo(){}
    render(){
        /*edit to add the new dealine system*/
        var time=`${this.props.todo.deadline.date}`
        var taskSubTasks=this.props.todo.subTasks.map((t,index)=>{
            return <SubTodoTile task={t} key={index.toString()}/>
        })
        var subTasks=this.props.todo.subTasks
        return(
            <div className="todoTile">
                <div className="todoText dual" onClick={subTasks.length>0?this.listSubTodos:console.log("Hello")}>
                    <h3>{this.props.todo.task}</h3>
                </div>
                <div className="info">
                    <div className={this.state.done?"state done":"state undone"}></div>
                    <div>{time}</div>
                    <div class="actions">
                        <button className="icn-btn" onClick={this.displaySubTodoForm}><i className="fa fa-plus"></i></button>
                        {this.state.done?"":<button className="icn-btn success" onClick={this.markDone}><i className="fa fa-check"></i></button>}
                        <button className="icn-btn danger"><i className="fa fa-trash"></i></button>
                    </div>
                </div>
                {this.state.subTodoList?taskSubTasks:""}
                {this.state.showSubTodoForm?<AddSubTodo cancel={this.hideSubTodoForm} add={this.addSubTodo}/>:""}
            </div>
        )
    }
}
class SubTodoTile extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="subTodoTile">
                <div className="info">
                    <div>{this.props.task.task}</div>
                    <div className="actions">
                        <button className="icn-btn"><i className="fa fa-check"></i></button>
                        <button className="icon-btn danger"><i className="fa fa-trash"></i></button>
                    </div>
                    <div className={this.props.task.done?"state done":"state undone"}></div>
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
        /*{task:"",subTasks:[{task:"",done:?}],deadline:{date:"dd/mm/yyy",time:"hh:mm"},done:?}*/
        var tododata={
            task:document.getElementById("new_todo").value,
            subTasks:[],
            deadline:{
                date:document.getElementById("new_todo_date").value,
                time:document.getElementById("new_todo_time").value,
            },
            routine:document.getElementById("routine").value,
            done:false
        }
        this.props.addTodo(tododata)
        this.props.hideAddTodo()
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
class AddSubTodo extends React.Component{
    constructor(props,context){
        super(props,context)
        this.cancel=this.cancel.bind(this)
        this.add=this.add.bind(this)    
    }
    cancel(){
        this.props.cancel()
    }
    add(){
        var subtodo=document.getElementById('subTodo').value
        this.props.add(subtodo)
        this.props.cancel()
    }
    render(){
        return(
            <div className="subTodoForm">
                <div className="field">
                    <label>Sub Task</label>
                    <input class="text" type="text" id="subTodo"/>
                    <div className="dual">
                        <button className="btn" onClick={this.add}>Submit</button>
                        <button className="btn" onClick={this.cancel}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

var todos=[
    /*task:"",subTasks:[{task:"",done:?}],deadline:{date:"dd/mm/yyy",time:"hh:mm"},done:?*/
    {task:"Buy a Graphics card",subTasks:[{task:"Sub task one",done:true}],deadline:{date:"10/10/2020",time:"00:00"},done:false},
    {task:"Buy a Ryzen CPU",subTasks:[],deadline:{date:"10/10/2020",time:"00:00"},done:false},
]
function getTodos(){
    var usersTodos
    if(localStorageAvailable()){usersTodos=localStorage.getItem('todos')}
    else{usersTodos=[]}
    return usersTodos
}
function saveTodos(todos){
    if(localStorageAvailable){
        localStorage.setItem('todos',todos)
    }else{
        console.error('Local storage not available')
    }
}
function localStorageAvailable(){
    try{if (localStorage){return true}}
    catch(e){/*display error*/}
    return false
}

ReactDOM.render(<TodosContainer todos={todos}/>,document.getElementById('app'))