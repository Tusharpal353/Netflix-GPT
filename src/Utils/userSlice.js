import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:null,
    reducers:{

        //action
        addUser:(state,action)=>{
            return action.payload;
        },
        //action
        removeUser:(state,action) =>{
            return null;
        }
    },
})

export const {addUser,removeUser} = userSlice.actions;
export const userReducer= userSlice.reducer;