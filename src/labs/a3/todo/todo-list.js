import TodoItem from "./todo-item";
import todos from "./todos.json";
// TodoItem function takes an object parameter
// The properties of the object is done, title, status.
const TodoList = () => {
    return(
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {
                    // the map function is used to iterate over an array
                    // todos is mapped where each todo is rendered by TodoItem
                    todos.map(todo => {
                        return(<TodoItem key={todo._id} todo={todo}/>);
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;