import React from "react";

const ToDoList = ({ todoItems }) => {
    return(
        <div>
            <ul>
                {todoItems.map((todoItems) => {
                    return <li key ={todoItems.id}>{todoItems.name}</li>
                })
                }
            </ul>
        </div>
    )
}

export default ToDoList;