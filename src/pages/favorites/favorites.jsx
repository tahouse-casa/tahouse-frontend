import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context";
import { Return } from "../../components/return/return";
import { Navbar } from "../../components/navbar/navbar";
import { Cart } from "../../components/carts/cart";
import { ModalComponent } from "../../components/modal/modalComponent";
import {
  ListFilter,
  ItemFilter,
  ContainerListOfEstate,
  ContainerReturn,
} from "./stylesFavorites";
import {
  MdSwapVert,
  MdSortByAlpha,
  MdArrowUpward,
  MdArrowDownward,
  MdCheckCircle,
} from "react-icons/md";
export const Favorites = () => {
  const [onFilter, setOnFilter] = useState(false);
  const [error, setError] = useState({});
  const [favProperties, setFavProperties] = useState([]);

  const { JWT, fetchUser, user } = useContext(AppContext);

  useEffect(() => {
    if (user) {
      setFavProperties([...user.properties_favorites]);
    }
  }, [user]);

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/favorites/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        fetchUser(JWT?.user?.id);
        setError({ error: false, doneDelete: true });
      })
      .catch((err) => {
        setError({ error: true, done: false, doneDelete: false });
      });
  };
  const filterFavorites = (condition) => {
    let newdata = favProperties;
    if (condition === "alphabet") {
      newdata = newdata.sort((a, b) => {
        if (a.country > b.country) return 1;
        if (a.country < b.country) return -1;
        return 0;
      });
    }
    if (condition === "ancient") {
      newdata = user.properties_favorites;
    }
    if (condition === "recent") {
      newdata = newdata.reverse();
    }
    setOnFilter((prevState) => !prevState);
    setFavProperties([...newdata]);
  };
  return (
    <div style={{ marginTop: "10%" }}>
      <ContainerReturn>
        <Return title="Favoritas" viewTitle linke={-1}>
          <MdSwapVert
            size="25px"
            style={{
              background: "transparent",
              position: "relative",
              fill: onFilter ? "#D9D9D9" : "#000",
            }}
            onClick={() => setOnFilter((prevState) => !prevState)}
          />
        </Return>
      </ContainerReturn>
      {onFilter && (
        <ListFilter>
          <ItemFilter onClick={() => filterFavorites("alphabet")}>
            <MdSortByAlpha size="20px" style={{ background: "transparent" }} />
            <p style={{ background: "transparent" }}>Orden alfabético</p>
          </ItemFilter>
          <ItemFilter onClick={() => filterFavorites("recent")}>
            <MdArrowUpward size="20px" style={{ background: "transparent" }} />
            <p style={{ background: "transparent" }}>Más reciente</p>
          </ItemFilter>
          <ItemFilter onClick={() => filterFavorites("ancient")}>
            <MdArrowDownward
              size="20px"
              style={{ background: "transparent" }}
            />
            <p style={{ background: "transparent" }}>Más antiguo</p>
          </ItemFilter>
        </ListFilter>
      )}
      {favProperties.length > 0 && (
        <ContainerListOfEstate>
          {favProperties.map((element) => (
            <Cart
              key={element.id}
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
              error={error}
              setError={setError}
              favorite
              handleFavorite={handleDelete}
              FavoriteId={element.Favorites.id}
              featured
            />
          ))}
        </ContainerListOfEstate>
      )}
      {error.doneDelete === true && (
        <ModalComponent
          title="¡Listo!"
          paragraph="El inmueble fue eliminado de favoritos correctamente."
          paragraphButton="CONTINUAR"
          handleModal={() => {
            fetchUser(JWT?.user?.id || false);
            setError({ error: false, done: false });
          }}
        >
          <MdCheckCircle size="20px" style={{ background: "transparent" }} />
        </ModalComponent>
      )}
    </div>
  );
};
