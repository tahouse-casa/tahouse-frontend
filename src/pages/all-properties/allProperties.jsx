import { useState, useEffect } from "react";
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
import { Navbar } from "../../components/Navbar/Navbar";

//import { AppContext } from "../../context";

export const AllProperties = () => {
  const [data, setData] = useState([]);
  const [dataPaginada, setDataPaginada] = useState([]);
  const [page, setPage] = useState(0);
  const [numberPagination, setNumberPagination] = useState([
    { valor: 1, offset: 0 },
    { valor: 2, offset: 8 },
  ]);
  const [blankData, setBlankData] = useState(false);

  useEffect(() => {
    fetchData("0");
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setDataPaginada(data.slice(page, page + 8));
  }, [page, data]);

  const viewPagination = (numero) => {
    const numeroOffset = numero.offset;
    if (!blankData) {
      const newNumber = numberPagination.length + 1;
      const newOffset =
        numberPagination[numberPagination.length - 1].offset + 8;
      setNumberPagination([
        ...numberPagination,
        {
          valor: newNumber,
          offset: newOffset,
        },
      ]);
      if (numero.valor !== "primer") {
        fetchData(numeroOffset);
      }
    }
    setPage(numeroOffset);
  };

  const fetchData = (offset) => {
    if (offset) {
      fetch(
        `${process.env.REACT_APP_API_URL}/properties?offset=${offset}&limit=8`
      )
        .then((res) => res.json())
        .then((datos) => {
          if (datos.length < 8) {
            setNumberPagination([...numberPagination]);
            setBlankData(true);
          }
          if (offset === "0") {
            setDataPaginada(datos);
          }
          setData(data.concat(datos));
        });
    }
  };
  return (
    <Container>
      <Navbar />
      <ContainerSearcher>
        <Title>Encuentra el hogar de tus sueños</Title>
        <Searcher />
      </ContainerSearcher>
      <Title>Todas las propiedades</Title>
      <ContainerListOfProperties changeDisplay={data?.length}>
        {dataPaginada.length > 0 &&
          dataPaginada.map((element, index) => (
            <Cart
              key={index}
              id={element.id}
              img={element.urlImage}
              price={element.price}
              time={element.createdAt}
              address={element.address}
              country={element.country}
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
              viewPagination(number);
            }}
            key={i}
          >
            {number.valor}
          </ButtonPag>
        ))}
        <BsChevronDoubleRight
          onClick={() =>
            setPage(numberPagination[numberPagination.length - 2].offset)
          }
          style={{ cursor: "pointer" }}
        />
      </Pagination>
      <Footer />
    </Container>
  );
};
