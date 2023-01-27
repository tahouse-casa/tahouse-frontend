import { useContext, useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../context";
import logo from "../../assets/logo-bg.png";
import { Logo, Linke, LogoText, Container } from "./stylesLogo";

export const LogoComponent = () => {
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
    <Container>
      <Linke>
        {ismobile ? (
          <LogoText
            onClick={() => {
              setValueInput(!valueInput);
            }}
          >
            <Logo src={logo} alt="logo" />
            <LogoText>TaHouse</LogoText>
          </LogoText>
        ) : null}
      </Linke>
    </Container>
  );
};
