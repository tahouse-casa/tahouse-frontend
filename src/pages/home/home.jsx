import {useContext} from "react"
import { Navbar } from "../../components/Navbar/Navbar"
import { TopNavbar } from "../../components/TopNavBar/TopNavBar"
import { Searcher } from "../../components/searcher/searcher"
import { Carrousel } from "../../containers/carrousel/carrousel"
import { ShoppingGuide } from "../../containers/shoppingGuide/shoppingGuide"
import { Footer } from "../../containers/footer/footer"
import { Promotion } from "../../components/promotion/Promotion"
import { AppContext } from "../../context";
//css
import { Container, Title, Containerfeatured,
         ContainerSearcher } from "./stylesHome"

export const Home = () => {

    const { data} = useContext(AppContext)

    const featuredProperties = data?.slice(0,5)

    return (
        <Container>
            <TopNavbar/>
            <Navbar />
            <ContainerSearcher>
                <Title aling={'center'}>Encuentra el hogar de tus sueños</Title>
                <Searcher />
            </ContainerSearcher>
                <Containerfeatured>
                    <Title alingLeft>Inmuebles Destacados</Title>
                    <Carrousel data={featuredProperties}/>
            </Containerfeatured>
             <Promotion/>
             <ShoppingGuide/>
            <Footer/>
        </Container>
    )
} 