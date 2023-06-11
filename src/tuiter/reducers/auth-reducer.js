import {createSlice} from "@reduxjs/toolkit";
import {
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk,
    updateUserThunk
} from "../services/auth-thunks";

const authSlice = createSlice({
                                  name: "auth",
                                  initialState: {
                                      currentUser: null
                                  },
                                  reducers: {},
                                  extraReducers: {
                                      [logoutThunk.fulfilled]:
                                          (state) => {
                                              state.currentUser = null;
                                          },
                                      [profileThunk.fulfilled]:
                                          (state, {payload}) => {
                                              state.currentUser = payload;
                                          },
                                      [updateUserThunk.fulfilled]:
                                          (state, {payload}) => {
                                              state.currentUser = payload;
                                          },
                                      // registerThunk is given {username, password}
                                      [registerThunk.fulfilled]:
                                          (state, {payload}) => {
                                              state.currentUser = payload;
                                          },
                                      // once logged in, state's currentUser = payload
                                      // loginThunk is given {username, password}
                                      [loginThunk.fulfilled]:
                                          (state, {payload}) => {
                                              state.currentUser = payload;
                                          },
                                  }
                              });
export default authSlice.reducer;