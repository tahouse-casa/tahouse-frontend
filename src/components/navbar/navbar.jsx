import { useContext } from "react";
import { Container, Enlace, LogoContainer, Navbars, Img } from "./stylesNavbar";
import Inicio from "../../assets/Inicio.svg";
import Favoritos from "../../assets/Favoritos.svg";
import Administrar from "../../assets/Administrar.svg";
import Perfil from "../../assets/Perfil.svg";
import { AppContext } from "../../context";
export const Navbar = () => {
  const { setJWT } = useContext(AppContext);
  return (
    <Container>
      <Navbars>
        <LogoContainer>
          <Enlace to="/">
            <Img src={Inicio} alt="InicioLogo" />
            Inicio
          </Enlace>
        </LogoContainer>
        <LogoContainer>
          <Enlace to="/favorites-properties">
            <Img src={Favoritos} alt="InicioLogo" />
            Favoritos
          </Enlace>
        </LogoContainer>
        <LogoContainer>
          <Enlace to="/administration/properties">
            <Img src={Administrar} alt="InicioLogo" />
            Administrar
          </Enlace>
        </LogoContainer>
        <LogoContainer
          onClick={() => {
            localStorage.setItem("JWT", "");
            setJWT(null);
          }}
        >
          <Enlace to="/">
            <Img src={Perfil} alt="InicioLogo" />
            Perfil
          </Enlace>
        </LogoContainer>
      </Navbars>
    </Container>
  );
};
