import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {registerThunk} from "../services/auth-thunks";

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [handle, setHandle] = useState("");
    const [image, setImage] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async () => {
        if (!firstName || !lastName || !username || !password || !handle) {
            alert("Please fill in all fields and select an image.");
            return;
        }
        try {
            await dispatch(registerThunk({firstName, lastName, username, password, handle, image}));
            navigate("/tuiter/profile");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div>
            <h1>Register</h1>
            <div className={"mt-2"}>
                <label>First Name</label>
                <input className={"form-control"} type={"text"} value={firstName}
                       onChange={(event) => setFirstName(event.target.value)}/>
            </div>
            <div className={"mt-2"}>
                <label>Last Name</label>
                <input className={"form-control"} type={"text"} value={lastName}
                       onChange={(event) => setLastName(event.target.value)}/>
            </div>
            <div className={"mt-2"}>
                <label>Username</label>
                <input className={"form-control"} type={"text"} value={username}
                       onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className={"mt-2"}>
                <label>Password</label>
                <input className={"form-control"} type={"password"} value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className={"mt-2"}>
                <label>Handle</label>
                <input className={"form-control"} type={"text"} value={handle}
                       onChange={(event) => setHandle(event.target.value)}/>
            </div>
            <div className={"mt-2"}>
                <label>Image</label>
                <input type="file" className="form-control" id="file-upload" accept="image/*"
                       onChange={(event) => {
                           const image = event.target.files[0];
                           const reader = new FileReader();
                           reader.readAsDataURL(image);
                           reader.addEventListener("load", () => {
                               localStorage.setItem("icon", reader.result);
                               setImage("");
                               // setImage(reader.result+"");
                           })
                           }
                       }/>
            </div>
            <button className={"btn btn-primary mt-2"} onClick={handleRegister}>Register</button>

        </div>);
}

export default RegisterScreen;