import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser :[],
    isAuthenticated:false,
}

const userSlice = createSlice({
    name:"user", 
    initialState,
    reducers:{
        signInSuccess:(state,action)=>{
            state.currentUser = action.payload,
            state.isAuthenticated = true
        },
        signOut:(state)=>{
            state.currentUser = null,
            state.isAuthenticated = false
        }
    }
})


export const {signInSuccess,signOut} = userSlice.actions
export default userSlice.reducer