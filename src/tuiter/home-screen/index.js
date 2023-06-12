import React, {useEffect, useState} from "react";
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";

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