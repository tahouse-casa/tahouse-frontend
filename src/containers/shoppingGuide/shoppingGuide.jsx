import { useState } from "react";
import Image1 from "../../assets/foto17.jpg";
import Image2 from "../../assets/foto19.jpg";
import {Guide} from '../guide/guide'
import {
  Container,
  Section,
  Image,
  InfoContainer,
  Paragraph,
  Button,
} from "./stylesShoppingGuide";

export const ShoppingGuide = () => {
  const [inView, setInview] = useState(false)
  return (
    <Container>
      <Guide inView={inView} setInview={setInview}/>
      <Section>
        <Image src={Image1} alt="rooms" />
        <InfoContainer>
          <Paragraph>¿Que necesito para comprar?</Paragraph>
          <Button onClick={()=>setInview(true)}>Guia de compra</Button>
        </InfoContainer>
      </Section>

      <Section>
        <InfoContainer>
          <Paragraph>¿Que necesito para comprar?</Paragraph>
          <Button onClick={()=>setInview(true)}>Guia de compra</Button>
        </InfoContainer>
        <Image src={Image2} alt="" />
      </Section>
    </Container>
  );
}