export const CREATE_TODO = "CREATE_TODO";

export function createTodo(todo, callback) {

    return {
        type: CREATE_TODO,
        payload: todo
    }
}