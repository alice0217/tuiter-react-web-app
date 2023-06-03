import React, {useState} from "react"; // import useState to work with local state
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todo-reducer";

const Todos = () => {
    const todos
        = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''}); // create to-do local state variable

    const dispatch = useDispatch();
    // to-do object is passed to todoDoneToggle
    // therefore, payload=to-do obj
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo));
    }
    // index is passed to deleteToDo
    // therefore, payload=index
    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index));
    }

    // button
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo));
        setTodo({do: ''}) // clear local to-do state variable
    }
    // input field
    const todoChangeHandler = (event) => { // handle keystroke changes in input field
        const doValue = event.target.value; // get data from input field
        // object
        const newTodo = { // create new to-do object instance
            do: doValue // setting the to-do's do property
        };
        setTodo(newTodo); // change local state to-do variable
    }

    // todoChangeHandler: type in the input field, event handler catches value
    // create a new to-do and reset the local state which is set to empty initially
    // createTodoClickHandler: click button, dispatch action, reset local state

    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className={"list-group-item"}>
                    <button onClick={createTodoClickHandler}
                            className={"btn btn-primary w-25 float-end"}>
                        Create
                    </button>
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do} className={"form-control w-75"}
                    />
                </li>
                {
                    todos.map((todo, index) =>
                                  <li key={todo._id} className={"list-group-item"}>
                                      <button onClick={() => deleteTodoClickHandler(index)}
                                              className={"btn"
                                                         + " btn-danger float-end ms-2"}>Delete
                                      </button>
                                      <input type={"checkbox"} className={"me-2"} checked={todo.done}
                                      onChange={() => toggleTodoDone(todo)}/>
                                      {todo.do}
                                  </li>)
                }
            </ul>
        </>
    );
};
export default Todos;