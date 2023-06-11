import React from "react";
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";
import {useSelector} from "react-redux";

function HomeScreen() {
    return (
        <>
            <h1>Home</h1>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
}

export default HomeScreen;