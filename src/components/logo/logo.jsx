import { useContext } from 'react'
import { AppContext } from "../../context";
import logo from '../../assets/logo-bg.png'
import { Logo, Linke, LogoText, Container} from './stylesLogo';

export const LogoComponent = () => {

    const {setValueInput, valueInput} = useContext(AppContext)
    return(
        <Container>
            <Linke>
                <Logo src={logo} alt="logo-taHouse.casa" onClick={()=>{
                        //setSearched && setSearched(false)
                        setValueInput && setValueInput({pais: valueInput.pais})
                }}/>
                <LogoText>TaHouse</LogoText>
            </Linke>

        </Container>
    )
}