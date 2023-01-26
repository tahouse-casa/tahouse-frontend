import { useContext, useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../context";
import logo from "../../assets/logo-bg.png";
import { Container, Logo, LogoText } from "./logoDesktopStyle";

export const LogoDesktop = () => {
  const { setValueInput, valueInput } = useContext(AppContext);

  const [ismobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container
      onClick={() => {
        setValueInput(!valueInput);
      }}
    >
      <Logo src={logo} alt="TaHouse" />
      <LogoText>TaHouse</LogoText>
    </Container>
  );
};
