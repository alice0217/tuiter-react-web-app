import React from "react";
// import tuitsArray from './tuits.json';
import TuitSummaryItem from "./tuit-summary-item";
import {useSelector} from "react-redux"; // get tuits from the store instead

const TuitSummaryList = () => {
    const {tuits} = useSelector(state => state.tuits);
    // syntax: takes the state object from the Redux store as an argument and returns the
    // "tuits" property from that state object
    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                              <TuitSummaryItem
                                  key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default TuitSummaryList;

