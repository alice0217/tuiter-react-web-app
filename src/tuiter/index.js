import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
    return (
        <div>
            <Nav />
            <div className="row">
                <div className="col-xl-2 col-lg-1 col-md-3 col-sm-2 col-2">
                    <NavigationSidebar />
                </div>
                <div className="col-xl-7 col-lg-7 col-md-9 col-sm-10 col-10">
                    <Routes>
                        <Route path="/home" element={<HomeScreen/>} />
                        <Route path="/explore" element={<ExploreScreen/>} />
                        <Route path="/bookmarks" element={<BookmarksScreen/>} />
                        <Route path="/profile" element={<ProfileScreen/>}/>
                        <Route path="/notifications" element={<h1>Notifications</h1>}/>
                    </Routes>
                </div>
                <div className="col-lg-3 d-none d-lg-block wd-right-column">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    );
}
export default Tuiter;