import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 10%;
  background-color: #f8f8f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding: 20px 5%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: #777;
  margin-bottom: 40px;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const TextItem = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  font-weight: 300;
  padding: 0 10px;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 40px 10%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 20px 5%;
  }
`;

export const ContactTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
`;


export const ContactLabel = styled.span`
  font-weight: bold;
  color: #ddd;
`;

export const ContactInfo = styled.span`
  color: #bbb;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
