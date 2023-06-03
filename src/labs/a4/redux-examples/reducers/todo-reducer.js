import {createSlice} from "@reduxjs/toolkit";

const initialTodos = [
    {_id: "123", do: "Accelerate the world's transition to sustainable energy", done: false},
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];
const todosSlice = createSlice({
                                   name: 'todos',
                                   initialState: initialTodos,
                                   reducers: {
                                       // mutate current state into new state, e.g.,
                                       // pushing new object._id set to current date
                                       // do set to "do" object sent through action obj
                                       // commonly referred to as the "payload"
                                       addTodo(state, action) {
                                           state.push({
                                                          _id: (new Date().getTime()),
                                                          do: action.payload.do, done: false
                                                      })
                                       },
                                       deleteTodo(state, action) {
                                           const index = action.payload; // assume
                                           // action.payload is the index of the item
                                           state.splice(index, 1);
                                       },
                                       todoDoneToggle(state, action) {
                                           // find a todo item whose id is the same as
                                           // action.payload_id.
                                           // find takes a predicate
                                           // find the todo-item whose id is the same as the
                                           //  action object id
                                           const todo = state.find((todo) => todo._id === action.payload._id);
                                           todo.done = !todo.done; // become the opposite of
                                           // what done was
                                       }
                                   }
                               });

export const {addTodo, deleteTodo, todoDoneToggle} = todosSlice.actions;
export default todosSlice.reducer