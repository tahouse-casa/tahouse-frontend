import { createContext, useState, useEffect } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [estates, setEstates] = useState([]);
  const [valueInput, setValueInput] = useState({
    country: "",
    ambientes: "",
    baños: "",
    habitaciones: "",
    max: "",
    precio: "",
  });
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [defaultCountry, setDefaultCountry] = useState({ country: "Colombia" });
  const [map, setMap] = useState(false);
  const [visibleFilters, setVisibleFilters] = useState(false);
  const [JWT, setJWT] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    addJWT();
  }, []);

  useEffect(() => {
    fetchUser(JWT?.user?.id);
  }, [JWT]);

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/countries`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const fetchProperties = () => {
    fetch(`${process.env.REACT_APP_API_URL}/properties`)
      .then((res) => res.json())
      .then((data) => {
        setEstates(data);
        setData(data);
      });
  };
  const addJWT = () => {
    if (localStorage.getItem("JWT")) {
      const data = localStorage.getItem("JWT");
      const parseo = JSON.parse(data);
      setJWT(parseo);
    }
  };
  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value.toUpperCase();
    setValueInput({ ...valueInput, [name]: value });
  };

  const viewDefaultValue = () => {
    const result = countries.find((item) =>
      item.country
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .includes(
          valueInput.country.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        )
    );
    if (result) {
      setDefaultCountry(JSON.parse(JSON.stringify(result)));
    }
  };

  const fetchUser = (idUser) => {
    if (idUser) {
      fetch(`${process.env.REACT_APP_API_URL}/users/${idUser}`)
        .then((res) => res.json())
        .then((res) => {
          setUser(res);
        });
    }
  };

  return (
    <AppContext.Provider
      value={{
        handleSearch,
        countries,
        estates,
        setEstates,
        valueInput,
        setValueInput,
        loading,
        setLoading,
        defaultCountry,
        setDefaultCountry,
        viewDefaultValue,
        data,
        map,
        setMap,
        visibleFilters,
        setVisibleFilters,
        setJWT,
        JWT,
        user,
        setUser,
        fetchUser,
        fetchProperties,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
