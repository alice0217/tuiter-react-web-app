// import the React.js library. All React components must at least import this one library

// React.js function components can only return a single HTML element

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
    return (
        <div className="list-group">
            {/*active is a variable*/}
            {links.map((link) =>
                           <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                               {link}
                           </Link>
            )}
        </div>
    );
};
export default NavigationSidebar;