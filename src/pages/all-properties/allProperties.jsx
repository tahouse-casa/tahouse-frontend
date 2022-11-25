import { useState} from "react"
import { Container, ContainerListOfProperties, Title,
     ContainerSearcher, Pagination, ButtonPag} from "./stylesLallProperties"
import { Navbar } from "../../components/navbar/navbar"
import { Footer } from "../../containers/footer/footer"
import { Cart } from "../../components/carts/cart"
import { Searcher } from "../../components/searcher/searcher"
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
//import { AppContext } from "../../context";
import {usePagination} from '../../hooks/usePagination'

export const AllProperties = () => {
    const [numberProp, setNumberProp] = useState(null)

    const paginacion = usePagination('/properties', numberProp, setNumberProp)
//change display data.length
    const {
        dataPaginada,
        numberPagination,
        setPage
    } = paginacion
    return (
        <Container>
            <Navbar/>
            <ContainerSearcher>
                <Title >Encuentra el hogar de tus sueños</Title>
                <Searcher />
            </ContainerSearcher>
            <Title>Todas las propiedades</Title>
            <ContainerListOfProperties changeDisplay={dataPaginada?.length}>
            {dataPaginada.length > 0 && (dataPaginada.map((element, index)=>(
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
            <Pagination>
        <BsChevronDoubleLeft onClick={() => setPage(0)} style={{cursor: 'pointer'}}/>
        {numberPagination.map((number, i) => (
          <ButtonPag onClick={() => {
            setNumberProp(number)
            }}
            key={i}>
            {number.valor}
          </ButtonPag>
        ))}
      <BsChevronDoubleRight onClick={() => {
            setNumberProp(numberPagination[numberPagination.length - 1])
            setPage(numberPagination[numberPagination.length - 1].offset)
    }} 
      style={{cursor: 'pointer'}}
      />
      </Pagination>
            <Footer/>
        </Container>
    )
}