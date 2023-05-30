const TodoItem = (
    {
        todo = {
            done: true,
            title: 'Buy milk',
            status: 'COMPLETED'
        }
    }) => {
    return (
        //each todo item is rendered as a li
        <li className="list-group-item">
            <input type="checkbox"
                   defaultChecked={todo.done}/>
            &nbsp;
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default TodoItem;

