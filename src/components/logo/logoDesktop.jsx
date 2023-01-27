import { useContext } from "react";
import { AppContext } from "../../context";
import logo from "../../assets/logo-bg.png";
import { Container, Logo, LogoText } from "./logoDesktopStyle";

export const LogoDesktop = () => {
  const { setValueInput, valueInput } = useContext(AppContext);

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
