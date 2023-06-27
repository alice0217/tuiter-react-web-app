import {createAsyncThunk} from "@reduxjs/toolkit"; // import createAsyncThunk
import * as service from "./tuits-service"; // import all exported functions as service

export const findTuitsThunk = createAsyncThunk( // create thunk for findTuits
                                                "tuits/findTuits", // give unique name, thunk
                                                                   // invokes
                                                async () => await service.findTuits() // service
                                                                                      // function.
                                                                                      // Returned
                                                                                      // data goes
                                                                                      // in redux
                                                // action's payload
                                                // so that the TuitList React component implemented
                                                // in an earlier assignment can use the thunks to
                                                // retrieve the tuits when the component loads.
);

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',  // unique thunk identifier
    async (tuitId) => { // wraps
        await service.deleteTuit(tuitId) // service method
        return tuitId // return tuit ID, so we can remove tuit from reducer's store
    }
);

export const createTuitThunk = createAsyncThunk(
    "tuits/createTuit",
    async (tuit) => {
        return await service.createTuit(tuit)
    }
);

export const updateTuitThunk = createAsyncThunk( // create update tuit thunk
                                                 "tuits/updateTuit", // unique identifier
                                                 async (tuit) => {  // accepts updated tuit
                                                     // sends updated tuit to server with service
                                                     return await service.updateTuit(tuit);
                                                 }
);