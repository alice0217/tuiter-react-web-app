import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../services/tuits-thunks";
import {findTuits} from "../services/tuits-service";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuits); // grab tuits and loading flag
    // from reducer
    const dispatch = useDispatch();
    useEffect(() => { // invoke find tuits thunk to fetch tuits and
        dispatch(findTuitsThunk()) // put them in the reducer's store so we can
    }, []) // extract them with useSelector() and render the tuits here
    return (
      // <ul className={"list-group"}>
      //     {
      //         loading ? // if loading flag is true, then show a loading message while data is
      //         // still coming back from the server
      //         <li className="list-group-item">
      //             Loading...
      //         </li> : tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)
      //     }
      // </ul>
        <ul className={"list-group"}>
            {loading && <li className={"list-group-item"}>Loading...</li>}
            {tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)}
        </ul>
    );
}

// each thunk has various states that track their life cycle while requests
// are in flight such as, pending, fulfilled and rejected

export default TuitsList;