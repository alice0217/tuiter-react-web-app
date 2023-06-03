import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json";

//user info
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

// template tuit but not including actual tuit content
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice(
    {
        name: "tuits",
        initialState: {tuits: tuits}, // use an object
        reducers: {
            // the action given is a tuit
            changeLikeCount(state, action) {
                // find the tuit first
                const tuit = state.tuits.find((tuit) => tuit._id === action.payload._id);
                tuit.liked = !tuit.liked;
                if (tuit.liked) {
                    tuit.likes += 1;
                } else {
                    tuit.likes -= 1;
                }
            },

            // action is the actual tuit, but in object format
            createTuit(state, action) {
                // unshift adds one or more elements to the beginning of an array and returns
                // the new length of the array
                state.tuits.unshift({
                                        ...action.payload,
                                        ...templateTuit,
                                        _id: (new Date()).getTime(),
                                    })
            },

            // action here is the id
            deleteTuit(state, action) {
                const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
                state.tuits.splice(index, 1); // remove it from the array
            }
        }
    }
);

export default tuitsSlice.reducer;
export const {createTuit, changeLikeCount, deleteTuit} = tuitsSlice.actions;