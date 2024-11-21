import { motion } from "framer-motion";
import styled from "styled-components";

export const ProductPageContainer = styled.div`
 display: grid;
 grid-template-columns: 50% 50%;
 justify-content:space-between;
  padding: 1rem;
  background-color: #f8f8f8;
  min-height: 100vh;
  padding-top: 8%;
  width:97%;
  font-family: Arial, sans-serif;
  @media (max-width: 768px) {
  display:flex;
  width:90%;
  flex-direction: column;
  align-items: center;
  }
`

export const ProductImage = styled(motion.img)`
 width:300px;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
   width: 100%;
  }
`

export const ProductTitle = styled(motion.h1)`
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`

export const ProductDescription = styled(motion.p)`
  font-size: 1rem;
  font-weight:bold;
  color: #555;
  text-align: justify;
  margin: 0 0 2rem;
  max-width: 500px;

`

export const PriceTag = styled(motion.span)`
  font-size: 1.5rem;
  color: #e67e22;
  font-weight: bold;
`

export const ButtonContainer = styled.div`
  display: grid;
  gap: 1rem;
`
export const BuyContainer = styled.div`
display:flex;

`

export const Button = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const BuyButton = styled(Button)`
  background-color:#3498db;
  
`



export const IncButton = styled(Button)`
  background-color:transparent;
  color:black;
`
export const DecButton = styled(Button)`
  background-color:transparent;
  color:black;
`
export const ProductSide = styled.div`

display:flex;
padding-top:4rem;
flex-direction:column;
border-right:1px solid black;
align-items:center;
@media(max-width:768px){
border:none;
margin-top:13%;
padding-top:2rem;
width:99%;
}

`
export const DetailSide = styled.div`

display:flex;
flex-direction:column;
padding-top:7rem;
align-items:center;
@media(max-width:768px){
padding:3px
}
`
