import { createSlice } from "@reduxjs/toolkit";




const Auth=createSlice({
    name:"Auth",
    initialState:{
        loading:false,
        isLogin:null,
        error:{
            error:false,
            message:null
        }
    },
    reducers: {
        logIn:(state,{payload})=>{
            state.isLogin=payload;
        },
        logOut:(state)=>{
            state.isLogin=null;
        }

    },
})
export const {logIn,logOut}=Auth.actions;
export default Auth.reducer;
