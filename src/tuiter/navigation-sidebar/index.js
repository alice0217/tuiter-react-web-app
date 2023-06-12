// import the React.js library. All React components must at least import this one library

// React.js function components can only return a single HTML element

import React from "react";
import {Link, useLocation} from "react-router-dom";
import {AiFillHome, AiFillMinusCircle, AiOutlineUnorderedList} from 'react-icons/ai';
import {FaBell, FaBookmark, FaEnvelope, FaHashtag, FaTwitter, FaRegistered} from "react-icons/fa";

import {FiLogIn} from "react-icons/fi";
import {BsFillPersonFill} from "react-icons/bs";

import {useSelector} from "react-redux";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists",
                   "more"];

    // Map each link to an icon to render later
    const linkIcons = {
        home: AiFillHome,
        explore: FaHashtag,
        notifications: FaBell,
        messages: FaEnvelope,
        bookmarks: FaBookmark,
        lists: AiOutlineUnorderedList,
        more: AiFillMinusCircle
    };

    const loggedInUser = localStorage.getItem("user");

    return (
        <div className="list-group">
            {/*Renders the twitter icon in the top*/}
            <Link className={'list-group-item'} key={"twitter-icon"}><FaTwitter/></Link>
            {!loggedInUser && <Link className={"list-group-item"} to={"/tuiter/login"}>
                <div className="d-flex align-items-center">
                    <FiLogIn/>{/* Render the icon component */}
                    &nbsp;
                    <span className="d-none d-xl-flex">Login</span>
                </div>
            </Link>}
            {!loggedInUser && <Link className={"list-group-item"}
                                   to={"/tuiter/register"}>
                <div className="d-flex align-items-center">
                    <FaRegistered/>{/* Render the icon component */}
                    &nbsp;
                    <span className="d-none d-xl-flex">Register</span>
                </div>
            </Link>}
            {loggedInUser && <Link className={"list-group-item"}
                                  to={"/tuiter/profile"}>
                <div className="d-flex align-items-center">
                    <BsFillPersonFill/>{/* Render the icon component */}
                    &nbsp;
                    <span className="d-none d-xl-flex">Profile</span>
                </div>
            </Link>}
            {/* active is a variable */}
            {links.map((link) => {
                const Icon = linkIcons[link]; // Get the corresponding icon component
                return (
                    <Link
                        to={`/tuiter/${link}`}
                        className={`list-group-item text-capitalize ${active === link ? "active"
                                                                                      : ""}`}
                        key={link}>
                        <div className="d-flex align-items-center">
                            <Icon/> {/* Render the icon component */}
                            &nbsp;
                            <span className="d-none d-xl-flex">{link}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};
export default NavigationSidebar;