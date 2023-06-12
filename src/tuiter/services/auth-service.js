import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;

const api = axios.create({withCredentials: true});

export const login = async({username, password}) => {
    const response = await api.post(`${USERS_URL}/login`, {username, password});
    return response.data;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    localStorage.clear();
    return response.data;
}

export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
}

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};

export const register = async ({
                                   firstName,
                                   lastName,
                                   username,
                                   password,
                                   handle,
                                   image,
                               }) => {
    const response = await api.post(USERS_URL, {
        firstName,
        lastName,
        username,
        password,
        handle,
        image,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
};
