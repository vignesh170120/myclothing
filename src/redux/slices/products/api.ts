import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEndPoint from "../../../const/apiEndpoint";
import axios from "axios";

const getProducts = createAsyncThunk('Products/Getproducts', async ()=>{
    const BaseUrl = process.env.REACT_APP_BASE_URL
    const response = await axios.get(`${BaseUrl}${apiEndPoint.products}`)
    return response.data
})

export {getProducts}

