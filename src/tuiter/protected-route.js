import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {profileThunk} from "./services/auth-thunks";

function ProtectedRoute({children}) {
    const [loading, setLoading] = useState(true); // while loading, hide body content
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => { // on component load
        const load = async () => {
            const {payload} = await dispatch(profileThunk()); // fetch profile from server
            if (!payload) { // if there's no one logged in
                navigate("/tuiter/login"); // navigate to login screen
            }
            setLoading(false);
        };
        load();
    }, []);
    return (
        <div className={`${loading ? "d-none" : ""}`}>
            {children}
        </div>
    );
}

export default ProtectedRoute;