import { useContext } from "react";
import { Container, Enlace, LogoContainer, Navbars, Img } from "./stylesNavbar";
import Inicio from "../../assets/Inicio.svg";
import Favoritos from "../../assets/Favoritos.svg";
import Administrar from "../../assets/Administrar.svg";
import Perfil from "../../assets/Perfil.svg";
import { AppContext } from "../../context";
export const Navbar = () => {
  const {setJWT} = useContext(AppContext)
  return (
    <Container>
      <Navbars>
        <LogoContainer>
          <Img src={Inicio} alt="InicioLogo" />
          <Enlace to="/">Inicio</Enlace>
        </LogoContainer>
        <LogoContainer>
          <Img src={Favoritos} alt="InicioLogo" />
          <Enlace to="/">Favoritos</Enlace>
        </LogoContainer>
        <LogoContainer>
          <Img src={Administrar} alt="InicioLogo" />
          <Enlace to="/administration/properties">Administrar</Enlace>
        </LogoContainer>
        <LogoContainer onClick={()=> {
          localStorage.setItem('JWT', '')
          setJWT(null)
          }}>
          <Img src={Perfil} alt="InicioLogo" />
          <Enlace to="/">Perfil</Enlace>
        </LogoContainer>
      </Navbars>
    </Container>
  );
}