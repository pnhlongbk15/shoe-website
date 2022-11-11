import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { usersApi } from '~/API/usersApi'

export const signIn = createAsyncThunk('user/signIn', async ({ email, password }) => {
        const currentUser = await usersApi.signIn(email, password);
        return currentUser;
})

export const register = createAsyncThunk('user/register', async ({ email, password, username: displayName }) => {
        const currentUser = await usersApi.register(email, password, displayName);
        return currentUser;
})

export const userSlice = createSlice({
        name: 'user',
        initialState: {
                isLogin: false,
                currentUser: null,
                error: null
        },
        reducers: {
                logout: (state) => {
                        state.isLogin = false;
                        state.currentUser = null;
                        state.error = null;
                }
        },
        extraReducers: {
                [register.fulfilled]: (state, action) => {
                        state.isLogin = true;
                        state.currentUser = action.payload;
                },
                [signIn.rejected]: (state, action) => {
                        state.error = action.payload;
                },

                [signIn.fulfilled]: (state, action) => {
                        state.isLogin = true;
                        state.currentUser = action.payload;
                },
                [signIn.rejected]: (state, action) => {
                        state.error = action.payload;
                }
        }
})

const { actions } = userSlice;

export const { logout } = actions;
