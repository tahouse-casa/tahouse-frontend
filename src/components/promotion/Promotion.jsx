import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/foto2.jpeg";
import logo from '../../assets/logo-bg.png'
import { Container, Img , Centered, Logo, Bg, P, Button} from "./StylesPromotion";

export function Promotion() {
  return (
<Container>
  <Img src={image} alt="bg"/>
  <Bg></Bg>
  <Centered>
    <Logo src={logo} alt="bonpland" />
    <P>!Los mejores precios y descuentos los encontas en Bonpland!</P>
    <Link to="/all-properties">
    <Button>Ver mas Propiedades</Button>
    </Link>
  </Centered>
</Container>
  );
}
