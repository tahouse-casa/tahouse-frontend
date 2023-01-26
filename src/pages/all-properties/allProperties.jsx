import { useState } from "react";
import {
  Container,
  ContainerListOfProperties,
  Title,
  ContainerSearcher,
  Pagination,
  ButtonPag,
} from "./stylesLallProperties";
import { Footer } from "../../containers/footer/footer";
import { Cart } from "../../components/carts/cart";
import { Searcher } from "../../components/searcher/searcher";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { Navbar } from "../../components/navbar/navbar";
import { usePagination } from "../../hooks/usePagination";
import { Loader } from "../../components/loader/loader";
export const AllProperties = () => {
  const [numberProp, setNumberProp] = useState(null);

  const paginacion = usePagination("/properties", numberProp, setNumberProp);
  const { dataPaginada, numberPagination, setPage, loading } = paginacion;
  return (
    <>
      {!loading ? (
        <Container>
          <Navbar />
          <ContainerSearcher>
            <Title>Encuentra el hogar de tus sueños</Title>
            <Searcher />
          </ContainerSearcher>
          <Title>Todas las propiedades</Title>
          <ContainerListOfProperties changeDisplay={dataPaginada?.length}>
            {dataPaginada.length > 0 &&
              dataPaginada.map((element, index) => (
                <Cart
                  key={index}
                  id={element.id}
                  img={element.urlImage}
                  price={element.price}
                  address={element.address}
                  country={element.country}
                  baths={element.bathrooms}
                  environments={element.rooms}
                  rooms={element.rooms}
                  meters={element.meters}
                  city={element.city}
                  featured={false}
                />
              ))}
          </ContainerListOfProperties>
          <Pagination>
            <BsChevronDoubleLeft
              onClick={() => setPage(0)}
              style={{ cursor: "pointer" }}
            />
            {numberPagination.map((number, i) => (
              <ButtonPag
                onClick={() => {
                  setNumberProp(number);
                }}
                key={i}
              >
                {number.valor}
              </ButtonPag>
            ))}
            <BsChevronDoubleRight
              onClick={() => {
                setNumberProp(numberPagination[numberPagination.length - 1]);
                setPage(numberPagination[numberPagination.length - 1].offset);
              }}
              style={{ cursor: "pointer" }}
            />
          </Pagination>
          <Footer />
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};
