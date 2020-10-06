export const initialState = {
    todos: [
        {
            todo: 'use a reducer',
            completed: false,
            id: 123
        },
        {
            todo: 'More Stuff',
            completed: false,
            id: 1234
        },
        {
            todo: 'Look even more stuff',
            completed: false,
            id: 1235
        }

    ]
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodoItem = {
                todo: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                ...state,
                todos:[...state.todos, newTodoItem]
            };
        case "TODO_COMPLETED":
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id){
                        return {...item, completed: !item.completed}
                    }
                    else{
                        return item
                    }
                })
            };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter((item) => !item.completed)
                }
        default:
            return state;
    }
};
