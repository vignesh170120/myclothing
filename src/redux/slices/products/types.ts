interface ProductProps {
	include(selectedProduct: string): unknown
	title: string
	id: string
	images: Array<string>
	price: string
	description: string
}

interface AddtoCartProps {
	title: string
	id: string
	images: Array<string>
	price: number | string
	description: string
	quantity: number
}

interface InitialProps {
	isLoading: boolean
	isError?: string
	productData: Array<ProductProps>
	increaseQuantity: number | undefined
	selectedProduct: string
	searchValue: string
	addToCart: Array<AddtoCartProps>
}

export const initialState: InitialProps = {
	isLoading: false,
	isError: "",
	productData: [],
	increaseQuantity: undefined,
	selectedProduct: "",
	searchValue: "",
	addToCart: [],
}
