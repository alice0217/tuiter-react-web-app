import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-service";

// exclusive to one user, log in, not making changes to the users database
export const loginThunk = createAsyncThunk(
    "auth/login", async (credentials) => {
        const user = await authService.login(credentials);
        return user;
    }
)

// exclusive to one user, check profile
export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        return await authService.profile();
    }
)

// exclusive to one user, logout
export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    }
)

// update a user from users
export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
    }
)

// add a user to users
export const registerThunk = createAsyncThunk(
    "user/registerUser",
    async ({ firstName, lastName, username, password, handle, image }) => {
        const userData = {
            firstName,
            lastName,
            username,
            password,
            handle,
            image,
        };
        console.log(firstName);
        await authService.register(userData);
        return userData;
    }
);
