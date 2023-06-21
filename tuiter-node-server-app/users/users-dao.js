import usersModel from "./users-model.js";

export function findAllUsers() {
    return usersModel.find();
}

export function findUserByUsername(username) {
    return usersModel.findOne({username: username});
}w

export const findUserByCredentials = (username, password) => {
    return usersModel.findOne({username: username, password: password});
}

export const findUserById = (userId) => {
    return usersModel.findOne({_id: userId});
}

export const createUser = (user) => {
    return usersModel.create(user);
}

export const updateUser = (id, user) => {
    return usersModel.updateOne({_id: id}, {$set: user});
}

export const deleteUser = (id) => {
    return usersModel.deleteOne({_id: id});
}