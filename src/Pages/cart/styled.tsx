import styled from "styled-components"

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1.3fr;
	min-height: 90vh;
  gap: 4rem;
  padding: 4px;
	margin: 4rem;
  flex-grow: 1;

  @media (max-width: 1024px) {
    gap: 20px;
    padding: 20px;
    grid-template-columns: 2fr 1.5fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 15px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const ProductSide = styled.div`
  display: flex;
  flex-direction: column;
	height: fit-content;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const CartCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-grow: 1; /* Ensure cards grow to fill space */
  min-height: 120px; /* Minimum height for the cards */

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 10px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
`;

export const DetailSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: fit-content;

  @media (max-width: 1024px) {
    padding: 15px;
    gap: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 10px;
  }
`;

export const ItemImage = styled.img`
	width: 100px;
	height: auto;
	border-radius: 5px;
	cursor: pointer;

	@media (max-width: 1024px) {
		width: 80px;
	}

	@media (max-width: 768px) {
		width: 100%;
		max-width: 300px;
	}
`

export const ItemName = styled.h4`
	font-size: 1.2rem;
	color: #333;
	margin: 0;

	@media (max-width: 1024px) {
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
`

export const ItemPrice = styled.p`
	font-size: 1rem;
	color: #555;

	@media (max-width: 1024px) {
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`

export const PlaceOrderButton = styled.button<{ background?: string }>`
	background: ${({ background }) => background || "#ff4d4f"};
	color: white;
	padding: 10px 15px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 1rem;
	transition: background 0.3s ease, transform 0.3s ease;

	&:hover {
		background: ${({ background }) => background || "#e93d4d"};
		transform: scale(1.05);
	}

	@media (max-width: 1024px) {
		font-size: 0.9rem;
		padding: 8px 12px;
	}

	@media (max-width: 768px) {
		font-size: 0.8rem;
		padding: 6px 10px;
	}
`

export const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  h5 {
    font-size: 1.5rem;
    color: #666;

    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1rem;
    color: #333;

    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const Check = styled.input`
  transform: scale(1.5);
`;

export const ItemsDetailsWrap = styled.div`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0px;
    text-align: center;
    width: 80%;
  }
`;
