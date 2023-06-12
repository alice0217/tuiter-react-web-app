import React, {useState} from "react";
import {AiOutlineGif, AiOutlinePicture} from "react-icons/ai";
import {BiBold, BiItalic} from "react-icons/bi";
import {BsEmojiSmile} from "react-icons/bs";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {MdFormatListBulleted} from "react-icons/md";
import {TbCalendarStats} from "react-icons/tb";

// import {createTuit} from "../reducers/tuits-reducer"
import {createTuitThunk, findTuitsThunk} from "../services/tuits-thunks";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {profileThunk} from "../services/auth-thunks";

const WhatsHappening = () => {
    let [topic, setTopic] = useState("");
    let [title, setTitle] = useState("");
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            console.log("logged in");
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    const loggedInUser = localStorage.getItem("user");
    const parsedLoggedInUser = JSON.parse(loggedInUser);


    const tuitClickHandler = () => {
        if (!parsedLoggedInUser) {
            alert("You need to log in first to make a tuit.");
        }
        const newTuit = {
            _id: (new Date()).getTime() + "",
            topic: topic,
            time: parsedLoggedInUser.time,
            title: title,
            username: parsedLoggedInUser.username,
            handle: parsedLoggedInUser.handle,
            tuit: whatsHappening,
            // no need to pass image because payload is too big
        };
        dispatch(createTuitThunk(newTuit));
        setTopic("");
        setTitle("");
        setWhatsHappening("")
    }

    return (
        <div className={"row"}>
            <div className={"col-auto"}>
                <img src={parsedLoggedInUser ?  localStorage.getItem("icon") : "/images/placeholder.jpg"}
                     style={{display: "block"}} width={60} height={60}
                     className={"rounded-circle"}/>
            </div>

            <div className={"col-10"}>
                <div className={"d-flex align-items-center justify-content-center w-100"}>
                    <input value={topic} placeholder={"Topic"} type={"text"}
                              className={"form-control border-0"} style={{ marginRight: "10px" }}
                              onChange={(event) => setTopic(event.target.value)}>
                    </input>
                    <input value={title} placeholder={"Title"} type={"text"}
                              className={"form-control border-0"}
                              onChange={(event) => setTitle(event.target.value)}>
                    </input>
                </div>

                <textarea value={whatsHappening} placeholder={"What's happening?"}
                          className={"form-control border-0 mt-2"}
                          onChange={(event) => setWhatsHappening(event.target.value)}>
                {/*    event.target.value is what the user types/inputs then reset
                 whatsHappening */}
                </textarea>
                <div>
                    <button className={"rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3"
                                       + " fw-bold"} onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className={"text-primary fs-2"}>
                        <AiOutlinePicture className={"me-3 wd-whats-happening-button"}/>
                        <AiOutlineGif className={"me-3 wd-whats-happening-button"}/>
                        <MdFormatListBulleted className={"me-3 wd-whats-happening-button"}/>
                        <BsEmojiSmile className={"me-3 wd-whats-happening-button"}/>
                        <TbCalendarStats className={"me-3 wd-whats-happening-button"}/>
                        <HiOutlineLocationMarker className={"me-3 wd-whats-happening-button"}/>
                        <BiBold className={"me-3 wd-whats-happening-button"}/>
                        <BiItalic className={"me-3 wd-whats-happening-button"}/>
                    </div>
                </div>
            </div>
            <div className={"col-12"}>
                <hr/>
            </div>
        </div>
    );
}

export default WhatsHappening;