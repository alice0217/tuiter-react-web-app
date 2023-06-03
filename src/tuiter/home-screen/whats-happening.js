import React, {useState} from "react";
import {AiOutlineGif} from "react-icons/ai";
import {BiBold, BiItalic} from "react-icons/bi";
import {BsEmojiSmile} from "react-icons/bs";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {MdFormatListBulleted} from "react-icons/md";
import {TbCalendarStats} from "react-icons/tb";
import {AiOutlinePicture} from "react-icons/ai";

import {createTuit} from "../reducers/tuits-reducer"
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    // the initial state of whatsHappening will be an empty string
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit));
        setWhatsHappening("")
    }
    return (
        <div className={"row"}>
            <div className={"col-auto"}>
                <img src={"/images/nasa.png"} width={60} height={60} className={"rounded-circle"}/>
            </div>

            <div className={"col-10"}>
                <textarea value={whatsHappening} placeholder={"What's happening?"}
                className={"form-control border-0"}
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
            <div className={"col-12"}><hr/></div>
        </div>
    );
}

export default WhatsHappening;