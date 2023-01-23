import { Container, Title } from "./stylesFooter";
import { ItemFooter } from "../../components/itemFooter/itemFooter";
export const Footer = () => {
  return (
    <Container>
      <Title>Ta House</Title>
      <ItemFooter name="Sobre Nosotros" />
      <ItemFooter name="Nuestra Trayectoria" />
      <ItemFooter name="Paises" />
      <ItemFooter name="Categorias" />
    </Container>
  );
};
