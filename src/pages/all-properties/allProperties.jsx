import { useContext} from "react"
import { Container, ContainerListOfProperties, Title, ContainerSearcher } from "./stylesLallProperties"
import { Navbar } from "../../components/navbar/navbar"
import { Footer } from "../../containers/footer/footer"
import { Cart } from "../../components/carts/cart"
import { Searcher } from "../../components/searcher/searcher"
import { AppContext } from "../../context";

export const AllProperties = () => {

    const {data} = useContext(AppContext)

    return (
        <Container>
            <Navbar/>
            <ContainerSearcher>
                <Title >Encuentra el hogar de tus sueños</Title>
                <Searcher />
            </ContainerSearcher>
            <Title>Todas las propiedades</Title>
            <ContainerListOfProperties changeDisplay={data?.length}>
            {data.length > 0 && (data.map((element, index)=>(
                                <Cart key={index}
                                     id={element.id}
                                     img={element.urlImage}
                                     price={element.price}
                                     time={element.createdAt}
                                     address={element.address}
                                     country={element.country}
                                     city={element.city}
                                     featured={false}/>
                        ))) 
                        } 
            </ContainerListOfProperties>
            <Footer/>
        </Container>
    )
}