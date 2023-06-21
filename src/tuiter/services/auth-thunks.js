import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-service";

// exclusive to one user, log in, not making changes to the users database
export const loginThunk = createAsyncThunk(
    "user/login", async ({username, password}) => {
        return await authService.login({username, password});
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
    "auth/updateUser", async ({userId, user}) => {
        await authService.updateUser(userId, user);
        return user;
    }
)

export const registerThunk = createAsyncThunk(
    "auth/register", async ({
                                firstName,
                                lastName,
                                username,
                                password,
                                handle,
                                image,
                            }) => {
        return await authService.register({
                                              firstName,
                                              lastName,
                                              username,
                                              password,
                                              handle,
                                              image,
                                          });
    });