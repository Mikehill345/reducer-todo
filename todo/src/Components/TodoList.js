import React from "react";
import Todo from './todo';


export default function TodoList(props) {
    return (
        <div>
            {props.todos.map((item) => (
                <Todo
                 key={item.id} 
                 item={item}
                toggleTodoCompleted={props.toggleTodoCompleted} />
            ))}
            <button onClick={props.clearTodo}>Clear Completed Tasks</button>
        </div>
    );
}