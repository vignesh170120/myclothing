import { createSlice } from "@reduxjs/toolkit";

import { getCategories } from "./api";
import { initialState } from "./types";

const categoriesSlice = createSlice({
    name:'category',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending,(state)=>{state.isLoading=true})
        .addCase(getCategories.rejected,(state,action)=>{ state.isLoading=false
            state.isError = action.error.message})
        .addCase(getCategories.fulfilled,(state,action)=>{
                state.isLoading=false
        state.categoryData=action.payload
            })
    }

})
export default categoriesSlice.reducer;