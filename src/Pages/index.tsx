import { lazy } from "react";
import { ROUTES } from "../const/routes";




const Abouts = lazy(()=> import ('./About'))
const Home = lazy(()=>import('./Home'))
const Cart = lazy (()=>import('./cart'))
const   Products = lazy(()=>import('./productPage'))

const route =[
{path:ROUTES.HOME, element:<Home/>},
{ path:ROUTES.ABOUT , element:<Abouts/>},
{path:ROUTES.CART,element:<Cart/>},
{path:ROUTES.Products, element:<Products/>}
]

export default route;