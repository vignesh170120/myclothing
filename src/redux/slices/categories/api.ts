import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndPoint from "../../../const/apiEndpoint";
import axios from "axios";

const getCategories = createAsyncThunk('categories/Getcategories', async()=>{
    const BaseUrl = process.env.REACT_APP_BASE_URL
    const response = await axios.get(`${BaseUrl}${apiEndPoint.categories}`)
    return response.data
})

export {getCategories}