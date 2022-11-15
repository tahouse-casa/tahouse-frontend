import { Container, Title } from "./stylesFooter"
import { ItemFooter } from "../../components/itemFooter/itemFooter"
export const Footer = () => {
return (
    <Container>
        <Title>Bonplad</Title>
        <ItemFooter name="Sobre nosotros"/>
        <ItemFooter name="Nuestra"/>
        <ItemFooter name="Paises"/>
        <ItemFooter name="Categorias"/>
    </Container>
)
}