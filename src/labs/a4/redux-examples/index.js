import React from "react";
// import component that consumes the data
import HelloReduxExampleComponent from "./hello-redux-example-component";
// import reducer that generates the data
import hello from "../redux-examples/reducers/hello"
import todos from "./reducers/todo-reducer";
// import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
// import Provider to deliver the data
import {Provider} from "react-redux";
import Todos from "./todos-component";

// Create data storage
// const store = createStore(hello);
const store = configureStore({reducer: {hello, todos}}); // combine all reducers into a single
// store

const ReduxExamples = () => {
    return (
        // Provider delivers data to child element
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                {/*Component consumes the data*/}
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
}

export default ReduxExamples;