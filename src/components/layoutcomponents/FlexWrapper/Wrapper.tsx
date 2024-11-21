import styled from "styled-components";

interface FlexWrapperProps {
    width?: string;
    backgroundColor?:string;
    margin?:string
  }
  
  export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    padding:0px;
    flex-wrap: wrap;
    justify-content:space-around;
    width: ${({ width }) => width ? width : "100%"};
    background-color: ${({backgroundColor})=>backgroundColor?backgroundColor:"#FFFFFF"};
    transition: background-color 0.3s ease;
    margin:${({margin})=>margin?margin:"0px"}
    @media (max-width: 768px) {
    width:100vw;
    padding:0px;
    }
  `
  


 