import { useState, useEffect, useContext } from "react";
import { Cart } from "../../components/carts/cart";
import { Return } from "../../components/return/return";
import { SearcherWithoutLogic } from "../../components/searcher/searcherWithoutLogic";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import { NavigateAdmin } from "../../components/navigateAdmin/navigateAdmin";
import { Navbar } from "../../components/navbar/navbar";
import { Loader } from "../../components/loader/loader";
//css
import {
  Container,
  ContainerListOfEstate,
  ContainerInput,
  ButtonAdd,
  ContainerReturn,
} from "./stylesAdministration";
export const Administration = () => {
  const [inputValue, setIputValue] = useState({ valor: "", error: null });
  const [properties, setProperties] = useState([]);
  const [allData, setAllData] = useState([]);
  const [mirar, setMirar] = useState(false);
  const [viewDelete, setViewDelete] = useState(false);
  const [error, setError] = useState({ error: false, done: false });
  const [idForDelete, setIdForDelete] = useState(null);
  const [loading, setLoading] = useState(true);

  const { JWT, fetchUser, fetchProperties } = useContext(AppContext);

  useEffect(() => {
    fetchApiProperties();
  }, []);

  const navigate = useNavigate();

  const fetchApiProperties = () => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/properties`)
      .then((res) => res.json())
      .then((data) => {
        setProperties([...data]);
        setAllData([...data]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const TOKEN = JWT.token;

  const handleInput = (e) => {
    setIputValue({ ...inputValue, valor: e.target.value.toUpperCase() });
  };

  const searchData = () => {
    setLoading(true);
    const newData = allData.filter((item) =>
      item.country
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .includes(
          inputValue.valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        )
    );
    setProperties(newData);
    setLoading(false);
  };

  const handleButtonSearch = () => {
    setMirar((prevState) => !prevState);
  };
  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_API_URL}/properties/${idForDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        fetchApiProperties();
        setError({ error: false, done: true });
        fetchUser(JWT?.user?.id);
        fetchProperties();
        setViewDelete((prevState) => !prevState);
      })
      .catch((err) => {
        setError({ error: true, done: false });
        setViewDelete((prevState) => !prevState);
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    navigate(`/administration/properties/edit/${id}`);
  };
  return (
    <>
      {!loading ? (
        <Container>
          <Navbar />
          <ContainerReturn>
            <Return linke="/" title="Administrar" viewTitle={!mirar}>
              <ContainerInput>
                <SearcherWithoutLogic
                  placeholder="Buscar por país"
                  nameInput={"administrar"}
                  inputValue={inputValue.valor}
                  handleSearch={handleInput}
                  searchData={searchData}
                  onClickButtonSearch={handleButtonSearch}
                  viewAll={mirar}
                />
              </ContainerInput>
            </Return>
          </ContainerReturn>
          <NavigateAdmin active="inmuebles" />
          <ContainerListOfEstate changeDisplay={properties.length}>
            {properties.length > 0 && !loading ? (
              properties.map((element, index) => (
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
                  admin
                  handleEdit={handleEdit}
                  error={error}
                  viewDelete={viewDelete}
                  setViewDelete={setViewDelete}
                  DeleteButton={handleDelete}
                  setError={setError}
                  setIdForDelete={setIdForDelete}
                  featured={false}
                />
              ))
            ) : (
              <div>No tenemos ninguna propiedad de ese país</div>
            )}
          </ContainerListOfEstate>
          <Link
            to="/administration/properties/create"
            style={{ color: "#000" }}
            className="Button-link-create-properties"
          >
            <ButtonAdd className="icon-of-create-properties" />
          </Link>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};
