import { Link } from "react-router-dom";
import { MdHomeWork, MdSupervisorAccount, MdLanguage } from "react-icons/md";
import { Container, TextIcon, Linear, ContainerItems } from "./stylesNavigateAdmin"
export const NavigateAdmin = ({active}) => {
    return (
        <Container>
            <Link to={'/administration/properties'} style={{textDecoration: 'none'}}>
                <ContainerItems>
                    <MdHomeWork size="20px" style={{background: 'transparent', fill: '#000000'}}/>
                    <TextIcon>INMUEBLES</TextIcon>
                    {active === 'inmuebles' && <Linear/>}
                </ContainerItems>
            </Link>
            <Link to={-1} style={{textDecoration: 'none'}}>
                <ContainerItems>
                    <MdSupervisorAccount size="20px" style={{background: 'transparent', fill: '#000'}}/>
                    <TextIcon>USUARIOS</TextIcon>
                    {active === 'usuarios' && <Linear/>}
                </ContainerItems>
            </Link>
            <Link to={'/administration/countries'} style={{textDecoration: 'none'}}>
                <ContainerItems>
                    <MdLanguage size="20px" style={{background: 'transparent', fill: '#000'}}/>
                    <TextIcon>PAÍSES</TextIcon>
                    {active === 'paises' && <Linear/>}
                </ContainerItems>
            </Link>
        </Container>
    )
}