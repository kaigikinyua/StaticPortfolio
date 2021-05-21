class TodoContainer extends React.Component{
    constructor(props,context){
        super(props,context)
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
                </div>
            </div>
        )
    }
}

class TodoTile extends React.Component{
    constructor(props,context){
        super(props,context)
        this.deleteTodo=this.deleteTodo.bind(this)
    }
    deleteTodo(){}
    render(){
        return(
            <div className={this.state.expired?"todoTile expired":"todoTile"}>
                <h3>{this.props.todo}</h3>
                <button className="icn_btn">Delete</button>
            </div>
        )
    }
}