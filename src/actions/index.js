export const CREATE_TODO = "CREATE_TODO";

export default function createTodo(todo) {

    return {
        type: CREATE_TODO,
        payload: todo
    }
}