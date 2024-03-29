import { useContext, useState } from "react";
import { Cart } from "../../components/carts/cart";
import { MapComponent } from "../../components/MapComponent/map.component";
import { Filters } from "../../containers/filters/Filters";
import { Searcher } from "../../components/searcher/searcher";
import { AppContext } from "../../context";
import { usePagination } from "../../hooks/usePagination";
import { Return } from "../../components/return/return";
import { Navbar } from "../../components/navbar/navbar";
import { Loader } from "../../components/loader/loader";
//css
import {
  ContainerSearched,
  ContainerListOfEstate,
  ContainerButtons,
  ContainerButton,
  TextButton,
  Iconfilter,
  IconMap,
  Title,
  ContainerSearcher,
  ContainerButtonsDownFilter,
  DeleteButton,
  ButtonPag,
  Pagination,
} from "./stylesSearched";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import { FiltersDesktop } from "./components/filtersDesktop/filtersDesktop";

export const Searched = () => {
  const [numberProp, setNumberProp] = useState(null);
  const {
    estates,
    defaultCountry,
    setDefaultCountry,
    map,
    setMap,
    setVisibleFilters,
    loading,
    setValueInput,
  } = useContext(AppContext);

  const paginacion = usePagination(null, numberProp, setNumberProp, estates);
  const {
    dataPaginada,
    numberPagination,
    setPage,
    loading: loadingPagination,
  } = paginacion;
  return (
    <>
      {!loadingPagination ? (
        <ContainerSearched>
          <Navbar />
          <Return linke="/" />
          <ContainerSearcher>
            <Title aling={"center"}>Encuentra el hogar de tus sueños</Title>
            <Searcher />
          </ContainerSearcher>
          <ContainerButtons>
            <ContainerButton
              column={1}
              onClick={() => setVisibleFilters((prevState) => !prevState)}
            >
              <TextButton>
                <Iconfilter />
                Filtros
              </TextButton>
            </ContainerButton>
            <ContainerButton
              column={2}
              onClick={() => setMap((current) => !current)}
            >
              <TextButton>
                <IconMap />
                Mapa
              </TextButton>
            </ContainerButton>
            <FiltersDesktop>{/*<Searcher onlyButton />*/}</FiltersDesktop>
          </ContainerButtons>

          {map && <MapComponent defaultCountry={defaultCountry} />}
          {!loading && (
            <Filters
              defaultValue={defaultCountry}
              setDefaultCountry={setDefaultCountry}
            >
              <ContainerButtonsDownFilter>
                <DeleteButton
                  onClick={() =>
                    setValueInput({
                      country: "",
                      ambientes: "",
                      baños: "",
                      habitaciones: "",
                      max: "",
                      precio: "",
                    })
                  }
                >
                  Borrar
                </DeleteButton>
                <Searcher onlyButton />
              </ContainerButtonsDownFilter>
            </Filters>
          )}
          {dataPaginada.length > 0 && (
            <Title alingLeft marginTop>
              {dataPaginada?.length} Departamentos en alquiler en{" "}
              {estates[0]?.country.split(",", 1)}
            </Title>
          )}
          <ContainerListOfEstate changeDisplay={dataPaginada.length}>
            {dataPaginada.length > 0 ? (
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
                  city={element.city}
                  meters={element.meters}
                  featured
                />
              ))
            ) : (
              <div>not found</div>
            )}
          </ContainerListOfEstate>
          <Pagination>
            <BsChevronDoubleLeft
              onClick={() => setPage(0)}
              style={{ cursor: "pointer" }}
            />
            {numberPagination.map((number, i) => (
              <ButtonPag
                onClick={() => {
                  number.used = true;
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
        </ContainerSearched>
      ) : (
        <Loader />
      )}
    </>
  );
};
