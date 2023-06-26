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
                                      currentUser: JSON.parse(localStorage.getItem("currentUser")) || null
                                  },
                                  reducers: {},
                                  extraReducers: {
                                      // once logged in, state's currentUser = payload
                                      // loginThunk is given {username, password}
                                      [loginThunk.fulfilled]:
                                          (state, {payload}) => {
                                              state.currentUser = payload;
                                              localStorage.setItem("currentUser", JSON.stringify(payload));
                                          },
                                      [logoutThunk.fulfilled]:
                                          (state) => {
                                              state.currentUser = null;
                                              localStorage.removeItem("currentUser");
                                          },
                                      [profileThunk.fulfilled]:
                                          (state, {payload}) => {
                                              state.currentUser = payload;
                                              localStorage.setItem("currentUser", JSON.stringify(payload));
                                          },
                                      [updateUserThunk.fulfilled]:
                                          (state, {payload}) => {
                                              state.currentUser = payload;
                                              localStorage.setItem("currentUser", JSON.stringify(payload));
                                          },
                                      // registerThunk is given {username, password}
                                      [registerThunk.fulfilled]:
                                          (state, {payload}) => {
                                              state.currentUser = payload;
                                              localStorage.setItem("currentUser", JSON.stringify(payload));
                                          },
                                  }
                              });
export default authSlice.reducer;