import React from 'react'

export default function Todo(props) {
    return (
        <div
         className={`item${props.item.completed ? 'completed' : ''}`}
          onClick={() => props.toggleTodoCompleted(props.item.id)}
          >
          <p>{props.item.todo}</p>
        </div>
    )

}