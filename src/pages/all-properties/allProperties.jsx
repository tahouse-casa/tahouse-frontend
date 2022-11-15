import { useState, useEffect} from "react"
import { Container, ContainerListOfProperties, Title } from "./stylesLallProperties"
import { Navbar } from "../../components/navbar/navbar"
import { Footer } from "../../containers/footer/footer"
import { Cart } from "../../components/carts/cart"

export const AllProperties = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/api/v1/properties")
        .then(res => res.json())
        .then(data=>{
            setData(data)
        })
    }, [])


    return (
        <Container>
            <Navbar/>
            <Title>Todas las propiedades</Title>
            <ContainerListOfProperties changeDisplay={data.length}>
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