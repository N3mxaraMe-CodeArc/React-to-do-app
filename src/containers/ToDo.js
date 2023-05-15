import React, { Component } from 'react';
import ToDoList from '../component/ToDoList';

class ToDo extends Component {
    
    constructor(props){
        super(props);

        this.state ={
            todoItems : [],
            newTodo : ''
        }
    }

    render() {
        const {todoItems ,newTodo} = this.state;

        return (
            <div>
                <h1>TODO</h1>

                <h2>Add Your Task</h2>

                <input value={newTodo}onChange={(event) =>{
                    this.setState({
                        newTodo: event.target.value
                    })
                }} />
                <button onClick={() =>{
                    this.setState({
                        todoItems : [...todoItems,{
                            id : newTodo,
                            name : newTodo
                        }]
                    })
                }}>Add</button>

                <h2>Todays Task List</h2>

                <ToDoList todoItems={todoItems}/>


            </div>
        )
    }
}

export default ToDo;