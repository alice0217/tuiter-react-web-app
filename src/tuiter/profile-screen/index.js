import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {logoutThunk, profileThunk, updateUserThunk} from "../services/auth-thunks";

function ProfileScreen() {
    const {currentUser} = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser || {firstName: "", lastName: ""});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => {
        dispatch(updateUserThunk(profile));
    };
    useEffect(() => {
        async function fetchData() {
            await dispatch(profileThunk());
        }
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        setProfile(currentUser);
    }, [currentUser]);

    return (
        <div>
            <h1>Profile</h1>
            {profile && (
                <div>
                    <div className={"mt-2"}>
                        <label>First Name</label>
                        <input className={"form-control"} type={"text"} value={profile.firstName}
                               onChange={(event) => {
                                   const newProfile = {
                                       ...profile, firstName: event.target.value,
                                   }
                                   setProfile(newProfile);
                               }}/>
                    </div>

                    <div className={"mt-2"}>
                        <label>Last Name</label>
                        <input className={"form-control"} type={"text"} value={profile.lastName}
                               onChange={(event) => {
                                   const newProfile = {
                                       ...profile, lastName: event.target.value,
                                   };
                                   setProfile(newProfile);
                               }}/>
                    </div>

                    <button className={"btn btn-primary mt-2"} onClick={() => {
                        dispatch(logoutThunk());
                        navigate("/tuiter/login");
                    }}>Logout
                    </button>
                    <button className={"btn btn-primary mt-2 float-end"} onClick={save}>Save
                    </button>
                </div>
            )}
        </div>
    );

}

export default ProfileScreen;