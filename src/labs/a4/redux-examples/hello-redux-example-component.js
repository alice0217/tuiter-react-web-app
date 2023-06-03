import React from "react";
// import useSelector hook
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
    // now the store/state has two sub-states: hello and todos
    // access message through state.hello.
    const message = useSelector((state) => state.hello.message);
    return(<h3>{message}</h3>);
}

export default HelloReduxExampleComponent;