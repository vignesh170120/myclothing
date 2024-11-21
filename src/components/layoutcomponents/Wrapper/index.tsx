import styled from "styled-components";


interface WrapperProps {
  width?: string;
  backgroundColor?: string;
  margin?: string;
}

export const Wrapper = styled.div<WrapperProps>`
    display: grid;
    grid-template-columns: 24% 24% 24%;
    justify-content:space-around;
    width: ${({ width }) => width ? width : "100%"};
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : ""};
    transition: background-color 0.3s ease;
    margin:${({ margin }) => margin ? margin : "1%"};
    @media (max-width: 768px) {
      grid-template-columns: 100% ;
      width:99%;
      align-item:center;
      gap:0px;
      margin-top:3rem;
      margin-left:5%;
      
      
    };
  `
