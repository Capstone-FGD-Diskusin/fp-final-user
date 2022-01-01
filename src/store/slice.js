import { createSlice } from '@reduxjs/toolkit'

const username = ""
const password = ""

export const slice =  createSlice({
    name : "dataUser",
    initialState:{
        username : username,
        password : password
    },

    reducers:{

        setUsername : (state, action) => {
            console.log("dalem reducers username",action.payload);
            state.username = action.payload
            
        },

        setPassword : (state, action) => {
            console.log("dalem reducers passwrod",action.payload);
            state.password = action.payload
        }
    }
})

export const {setUsername, setPassword} = slice.actions;
export default slice.reducer;