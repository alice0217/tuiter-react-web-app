import axios from "axios";
const TUITS_API = "http://localhost:4000/api/tuits"; // tuits server

// returns new tuit's data
export const createTuit = async (tuit) => {
    // post `tuit` data
    const response = await axios.post(TUITS_API, tuit);
    return response.data;
}

// returns an array of JSON objects
// async and await keywords: response will be set when the request resolves from the server
export const findTuits = async () => { // async tags this function as asynchronous
    const response = await axios.get(TUITS_API); // send HTTP GET request to TUITS_API
    return response.data; // extract JSON array from response from server
}

export const deleteTuit = async (tid) => { // send HTTP DELETE request to server
    console.log("delete");
    // given tuit is the tuit to be deleted
    const response = await axios.delete(`${TUITS_API}${tid}`) // append tuit's ID to URL
    // data contains response's status we'll ignore for now
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}
