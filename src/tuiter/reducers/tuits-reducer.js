import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json";
import {
    createTuitThunk,
    deleteTuitThunk,
    findTuitsThunk,
    updateTuitThunk
} from "../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

//user info
const currentUser = {
    "username": "NASA",
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
        initialState, // same as initialState
        extraReducers: { // define asynchronous reducers
            [updateTuitThunk.fulfilled]: // when server update is done
                (state, {payload}) => { // payload contains updated tuit
                    state.loading = false // clear loading flag
                    const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id) // find
                    // index of updated tuit in array
                    state.tuits[tuitNdx] = {...state.tuits[tuitNdx], ...payload} // merge old
                    // tuit with updated tuit
                },
            // push to state.tuits
            [createTuitThunk.fulfilled]: // when server responds
                (state, {payload}) => { // payload contains new tuit
                    state.loading = false // clear loading flag
                    state.tuits.push(payload) // append new tuit to tuits array
                },
            [deleteTuitThunk.fulfilled]: // handle successful response
                (state, {payload}) => { // server response successful
                    state.loading = false; // payload from action contains tuit ID to
                    state.tuits = state.tuits.filter(t => t._id !== payload) // remove, turn off
                    console.log("here");
                    // loading flag, filter out tuit whose ID matches tuit to remove, we're
                    // ignoring pending and rejected thunks
                },
            [findTuitsThunk.pending]: // if request is not yet fulfilled ...
                (state) => {
                    state.loading = true // set loading true so UI can display spinner
                    state.tuits = [] // empty tuits since we are still fetching them
                },
            [findTuitsThunk.fulfilled]: // when we get response, request is fulfilled
                (state, {payload}) => { // we extract/destruct payload from action object
                    state.loading = false // turn off loading flag since we have the data
                    state.tuits = payload // payload has tuits from server and update redux state
                },
            [findTuitsThunk.rejected]: // if request times out, or responds with error
                (state, action) => {
                    state.loading = false; // reset loading flag
                    state.error = action.error; // report error
                }
        },
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