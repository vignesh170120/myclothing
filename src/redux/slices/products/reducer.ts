import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "./api"
import { initialState } from "./types"

const ProductSlice = createSlice({
	name: "Product",
	initialState,
	reducers: {
		quantity: (state, action) => {
			state.increaseQuantity = action.payload
		},
		selectProduct: (state, action) => {
			state.selectedProduct = action.payload
		},
		selectValue: (state, action) => {
			state.searchValue = action.payload
		},
		addCart: (state, action) => {
			state.addToCart = action.payload
		},
		removeFromCart(state, action) {
			state.addToCart = state.addToCart.filter(
				(item) => item.id !== action.payload
			)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.isLoading = true
			})

			.addCase(getProducts.fulfilled, (state, action) => {
				state.isLoading = false
				state.productData = action.payload
			})

			.addCase(getProducts.rejected, (state, action) => {
				state.isLoading = false
				state.isError = action.error.message
			})
	},
})
export const { quantity } = ProductSlice.actions
export const { selectProduct, addCart, removeFromCart,selectValue } = ProductSlice.actions

export default ProductSlice.reducer
