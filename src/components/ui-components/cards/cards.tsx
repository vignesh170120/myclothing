import styled from "styled-components";

interface cardprops {
  backgroundColor?: string;
  border?: boolean;
}

const Cards = styled.div<cardprops>`
  height:auto;
  width:100%;
  padding:10px;
  background-color:${({ backgroundColor }) => backgroundColor ? backgroundColor : "transparent"};
  border:${({ border }) => border ? "1px solid black" : "none"};
  border-radius:20px;
  &:hover {
		 background-color:#FFFFFF;
      box-shadow: 1px 4px 4px grey;
	}
   @media (max-width: 768px) {
width: 90%;
  }
`
export default Cards;
