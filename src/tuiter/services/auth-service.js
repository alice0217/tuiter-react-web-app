import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;

const api = axios.create({withCredentials: true});

// login: ${USERS_URL}/login
// logout: ${USERS_URL}/logout
// profile: ${USERS_URL}/profile
// updateUser: ${USERS_URL}/${user._id}
// register: ${USERS_URL}/register

export const login = async({username, password}) => {
    const response = await api.post(USERS_URL, {username, password});
    return response.data;
};

export const logout = async () => {
    const response = await api.post(USERS_URL);
    return response.data;
}

export const profile = async () => {
    const response = await api.post(USERS_URL);
    return response.data;
}

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
}

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
    return response.data;
};
