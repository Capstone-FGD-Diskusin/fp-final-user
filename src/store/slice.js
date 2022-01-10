import { createSlice } from '@reduxjs/toolkit'

const username = ""
const password = ""
const fileRegis = ""
const usernameRegis = ""
const passwordRegis = ""
const emailRegis = ""
const addressRegis =""
const phoneRegis = ""
const token =""

export const slice =  createSlice({
    name : "dataUser",
    initialState:{
        username : username,
        password : password,
        fileRegis : fileRegis,
        usernameRegis : usernameRegis,
        passwordRegis : passwordRegis,
        emailRegis : emailRegis,
        addressRegis : addressRegis,
        phoneRegis : phoneRegis,
        token : token,
    },

    reducers:{

        setUsername : (state, action) => {
            // console.log("dalem reducers username",action.payload);
            state.username = action.payload
        },

        setPassword : (state, action) => {
            // console.log("dalem reducers passwrod",action.payload);
            state.password = action.payload
        },
        setFileRegis : (state, action) => {
            state.fileRegis = action.payload
        },
        setUsernameRegis : (state, action) => {
            state.usernameRegis = action.payload
        },
        setPasswordRegis : (state, action) => {
            state.passwordRegis = action.payload
        },
        setEmailRegis : (state, action) => {
            state.emailRegis = action.payload
        },
        setAddressRegis : (state, action) => {
            state.addressRegis = action.payload
        },
        setPhoneRegis : (state, action) => {
            state.phoneRegis = action.payload
        },
        setToken : (state,action) => {
            console.log("dalem reducers setToken",action.payload);
            state.token=action.payload
        },
    }
})

export const {
    setToken,
    setUsername, 
    setPassword, 
    setFileRegis, 
    setUsernameRegis, 
    setPasswordRegis,
    setEmailRegis, 
    setAddressRegis, 
    setPhoneRegis
} = slice.actions;

export default slice.reducer;