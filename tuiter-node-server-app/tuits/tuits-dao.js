// implements the four basic CRUD operations for the tuits collection written in terms of the low
// level Mongoose model operations

import tuitsModel from "./tuits-model.js";
export const findTuits = async () => await tuitsModel.find();
export const createTuit = async (tuit) => await tuitsModel.create(tuit);
export const deleteTuit = async (tid) => await tuitsModel.deleteOne({_id: tid});
export const updateTuit = async (tid, tuit) => await tuitsModel.updateOne({_id: tid}, {$set: tuit});