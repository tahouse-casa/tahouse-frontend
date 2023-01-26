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

import { AiFillHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
  const { setJWT } = useContext(AppContext);

  const [mobile, setMobile] = useState(false);

  const [changeColor, setChangeColor] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
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
        {!mobile ? <LogoDesktop /> : null}
        <LogoContainer>
          <Enlace to="/">
            <AiFillHome
              style={{
                fontSize: "1.5rem",
                color: "black",
                marginRight: "0.5rem",
                backgroundColor: "transparent",
              }}
            />
            Inicio
          </Enlace>
        </LogoContainer>
        <LogoContainer>
          <Enlace to="/favorites-properties">
            <MdFavorite
              style={{
                fontSize: "1.5rem",
                color: "black",
                marginRight: "0.5rem",
                backgroundColor: "transparent",
              }}
            />
            Favoritos
          </Enlace>
        </LogoContainer>
        <LogoContainer>
          <Enlace to="/administration/properties">
            <RiAdminLine
              style={{
                fontSize: "1.5rem",
                color: "black",
                marginRight: "0.5rem",
                backgroundColor: "transparent",
              }}
            />
            Administrar
          </Enlace>
        </LogoContainer>
        {localStorage.getItem("JWT") === "" ? (
          <LogoContainer>
            <LogIn to="/login">
              <FaUserCircle
                style={{
                  fontSize: "1.3rem",
                  color: { color },
                  backgroundColor: "transparent",
                }}
              />
              iniciar sesión
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
              <FaUserCircle
                style={{
                  fontSize: "1.5rem",
                  marginRight: "0.5rem",
                  color: "black",
                  backgroundColor: "transparent",
                }}
              />
              Perfil
            </LogOut>
          </LogoContainer>
        )}
      </Navbars>
    </Container>
  );
};
