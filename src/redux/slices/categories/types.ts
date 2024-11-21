interface CategoryProps{
    name:string,
    id:string,
    images: string,
    price:string

}

interface InitialProps{
    isLoading:boolean,
    isError?:string,
    categoryData:Array<CategoryProps>
}

export const initialState:InitialProps = {
    isLoading:false,
    isError:"",
    categoryData:[]
}