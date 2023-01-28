import { useContext, useState } from "react";
import { useEffect } from "react";
import {
  Container,
  Enlace,
  LogoContainer,
  Navbars,
  LogOut,
  LogIn,
} from "./stylesNavbar";
import { AppContext } from "../../context";
import { LogoDesktop } from "../logo/logoDesktop";

//icons
import {
  MdOutlineHome,
  MdFavoriteBorder,
  MdOutlineAssignment,
  MdOutlineAccountCircle,
} from "react-icons/md";

export const Navbar = () => {
  const { setJWT } = useContext(AppContext);

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    handleResize();
  }, []);

  const style = {
    fontSize: "1.5rem",
    marginRight: "0.5rem",
  };

  return (
    <Container>
      <Navbars>
        {!mobile ? <LogoDesktop /> : null}
        <LogoContainer>
          <Enlace to="/">
            <MdOutlineHome style={style} />
            Inicio
          </Enlace>
        </LogoContainer>
        <LogoContainer>
          <Enlace to="/favorites-properties">
            <MdFavoriteBorder style={style} />
            Favoritos
          </Enlace>
        </LogoContainer>
        <LogoContainer>
          <Enlace to="/administration/properties">
            <MdOutlineAssignment style={style} />
            Administrar
          </Enlace>
        </LogoContainer>
        {localStorage.getItem("JWT") === "" ? (
          <LogoContainer>
            <LogIn to="/login">
              <MdOutlineAccountCircle style={style} />
              Iniciar sesión
            </LogIn>
          </LogoContainer>
        ) : (
          <LogoContainer
            onClick={() => {
              localStorage.setItem("JWT", "");
              setJWT(null);
            }}
          >
            <LogOut to="/">
              <MdOutlineAccountCircle style={style} />
              Perfil
            </LogOut>
          </LogoContainer>
        )}
      </Navbars>
    </Container>
  );
};
