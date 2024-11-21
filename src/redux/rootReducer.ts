import { combineReducers } from '@reduxjs/toolkit'
import productReducer from './slices/products/reducer'
import categoriesReducer from "./slices/categories/reducer"


const rootReducer = combineReducers({
  products: productReducer,
  categories:  categoriesReducer
})

export default rootReducer
