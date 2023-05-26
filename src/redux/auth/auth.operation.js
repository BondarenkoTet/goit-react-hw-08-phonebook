import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk("auth/register", 
    async (credential, thunkAPI)=>{
    try{
        const res = await axios.post ("/users/signup", credential);
        setAuthHeader(res.data.token);
        return res.data;
    }catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk("auth/login",
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post("/users/login", credentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const logOut = createAsyncThunk("auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout");
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});
export const refreshUser = createAsyncThunk(
    'auth/current',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
    
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try {
            setAuthHeader(persistedToken);
            const res = await axios.get("/users/current");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);