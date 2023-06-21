import {Route, Routes} from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import ListsScreen from "./lists-screen";
import MoreScreen from "./more-screen";
import NotificationsScreen from "./notifications-screen";
import MessagesScreen from "./messages-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";

import React from "react";
import whoReducer from "./reducers/who-reducer"; // import the reducer
import {combineReducers, configureStore} from "@reduxjs/toolkit"; // import configureStore
import {Provider} from "react-redux"; // import the Provider component
import tuitsReducer from "./reducers/tuits-reducer"; // import the new tuits reducer
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
                                        who: whoReducer,
                                        tuits: tuitsReducer,
                                        user: authReducer,
                                    });

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
                                        reducer: persistedReducer,
                                        devTools: process.env.NODE_ENV !== 'production',
                                        middleware: [thunk]
                                    })

export const persistor = persistStore(store);

// const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer, user:
// authReducer}}); // configure the // store

function Tuiter() {
    return (
        <Provider store={store}>
            {/*<AuthContext>*/}
            <div>
                <Nav/>
                <div className="row">
                    <div className="col-xl-2 col-lg-1 col-md-3 col-sm-2 col-2">
                        <NavigationSidebar/>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-9 col-sm-10 col-10">
                        <Routes>
                            <Route path="/login" element={<LoginScreen/>}/>
                            <Route path="/register" element={<RegisterScreen/>}/>
                            <Route path="/profile" element={<ProfileScreen/>}/>
                            <Route path="/home" element={<HomeScreen/>}/>
                            <Route path="/explore" element={<ExploreScreen/>}/>
                            <Route path="/notifications" element={<NotificationsScreen/>}/>
                            <Route path="/messages" element={<MessagesScreen/>}/>
                            <Route path="/bookmarks" element={<BookmarksScreen/>}/>
                            <Route path="/lists" element={<ListsScreen/>}/>
                            <Route path="/more" element={<MoreScreen/>}/>
                        </Routes>
                    </div>
                    <div className="col-lg-3 d-none d-lg-block">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
            {/*</AuthContext>*/}
        </Provider>
    );
}

export default Tuiter;