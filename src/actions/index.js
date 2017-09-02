export const CREATE_TODO = "CREATE_TODO";

let id = 0;

export function createTodo(todo, callback) {
    todo.id = ++id;
    todo.completed = false;

    return {
        type: CREATE_TODO,
        payload: todo
    }
}