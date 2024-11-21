import { useEffect } from "react";
import Aos from "aos";
import {
  ContactContainer,
  ContactDetails,
  ContactInfo,
  ContactItem,
  ContactLabel,
  ContactTitle,
  Container,
  SubTitle,
  TextGrid,
  TextItem,
  Title,
} from "./styled";

function Abouts() {
  useEffect(() => {
    Aos.init({ duration: 900, once: false });
  }, []);

  return (
    <Container>
      <Title data-aos="fade-up">Our Story</Title>
      <SubTitle data-aos="fade-up" data-aos-delay="300">
        Redefining Fashion, One Outfit at a Time
      </SubTitle>
      <TextGrid>
        <TextItem data-aos="fade-up" data-aos-delay="500">
          <strong>Our Mission</strong>: Bringing style and quality to every
          wardrobe. Our clothing is crafted with the utmost care to make a
          statement of authenticity and elegance.
        </TextItem>
        <TextItem data-aos="fade-up" data-aos-delay="700">
          <strong>Our Values</strong>: We’re passionate about sustainability,
          inclusivity, and innovative designs that push the boundaries of
          fashion.
        </TextItem>
        <TextItem data-aos="fade-up" data-aos-delay="900">
          <strong>Quality Assurance</strong>: From fabrics to fits, each piece
          is rigorously tested for quality so that our customers feel the luxury
          in every stitch.
        </TextItem>
        <TextItem data-aos="fade-up" data-aos-delay="1100">
          <strong>Style For All</strong>: We believe fashion is for everyone,
          and our collections reflect the diversity and uniqueness of our
          customers.
        </TextItem>
      </TextGrid>

      <ContactContainer data-aos="zoom-in" data-aos-delay="1300">
        <ContactTitle>Contact Us@</ContactTitle>
        <ContactDetails>
          <ContactItem>
            <ContactLabel>Address:</ContactLabel>
            <ContactInfo>123 New Colony, CH</ContactInfo>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Phone:</ContactLabel>
            <ContactInfo>(004) 456-7890</ContactInfo>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Email:</ContactLabel>
            <ContactInfo>NTRA@clothingcompany.com</ContactInfo>
          </ContactItem>
          <ContactItem>
            <ContactLabel>Customer Support:</ContactLabel>
            <ContactInfo>supportNTRA@clothingcompany.com</ContactInfo>
          </ContactItem>
        </ContactDetails>
      </ContactContainer>
    </Container>
  );
}

export default Abouts;
