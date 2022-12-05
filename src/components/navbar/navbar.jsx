import React from "react";
import { Container, Enlace, LogoContainer, Navbars } from "./stylesNavbar";
import Inicio from "../../assets/Inicio.svg";
import Favoritos from "../../assets/Favoritos.svg";
import Administrar from "../../assets/Administrar.svg";
import Perfil from "../../assets/Perfil.svg";


export function Navbar() {
  return (
    <Container>
      <Navbars>
        <LogoContainer>
          <img src={Inicio} alt="InicioLogo" />
          <Enlace href="">Inicio</Enlace>
        </LogoContainer>
        <LogoContainer>
          <img src={Favoritos} alt="InicioLogo" />
          <Enlace href="">Favoritos</Enlace>
        </LogoContainer>
        <LogoContainer>
          <img src={Administrar} alt="InicioLogo" />
          <Enlace href="">Administrar</Enlace>
        </LogoContainer>
        <LogoContainer>
          <img src={Perfil} alt="InicioLogo" />
          <Enlace href="">Perfil</Enlace>
        </LogoContainer>
      </Navbars>
    </Container>
  );
}
