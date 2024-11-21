import styled from "styled-components";
import { Button } from "../../../Pages/productPage/styled";


export const CartButton = styled(Button)`
  background-color: #3498db;
  width:100%;
 &:disabled{
  background-color: #d6d6d6; 
  
  color: #888;
  cursor: not-allowed;
  opacity: 0.6;}
 
 
`