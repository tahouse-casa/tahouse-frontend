import { useContext, useState } from "react";
import { useEffect } from "react";
import { Container, Enlace, LogoContainer, Navbars, Img } from "./stylesNavbar";
import Inicio from "../../assets/Inicio.svg";
import Favoritos from "../../assets/Favoritos.svg";
import Administrar from "../../assets/Administrar.svg";
import Perfil from "../../assets/Perfil.svg";
import { AppContext } from "../../context";
import { LogoComponent } from "../logo/logo";
export const Navbar = () => {
  const { setJWT } = useContext(AppContext);

  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Navbars>
        {show ? <LogoComponent /> : null}
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
