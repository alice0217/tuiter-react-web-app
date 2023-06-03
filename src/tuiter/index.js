import {Route, Routes} from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import ListsScreen from "./lists-screen";

import React from "react";
import whoReducer from "./reducers/who-reducer"; // import the reducer
import {configureStore} from "@reduxjs/toolkit"; // import configureStore
import {Provider} from "react-redux";            // import the Provider component

import tuitsReducer from "./reducers/tuits-reducer"; // import the new tuits reducer

const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer}}); // configure the
// store

function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <Nav/>
                <div className="row">
                    <div className="col-xl-2 col-lg-1 col-md-3 col-sm-2 col-2">
                        <NavigationSidebar/>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-9 col-sm-10 col-10">
                        <Routes>
                            <Route path="/home" element={<HomeScreen/>}/>
                            <Route path="/explore" element={<ExploreScreen/>}/>
                            <Route path="/bookmarks" element={<BookmarksScreen/>}/>
                            <Route path="/lists" element={<ListsScreen/>}/>
                            <Route path="/profile" element={<ProfileScreen/>}/>
                            <Route path="/notifications" element={<h1>Notifications</h1>}/>
                        </Routes>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter;