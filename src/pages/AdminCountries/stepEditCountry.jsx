import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import { AdminCountriesComponent } from "../../containers/stepsAdmin/adminCountries/adminCountriesComponent";
import { AppContext } from "../../context";
import { ModalComponent } from "../../components/modal/modalComponent";
import { MdCancel, MdCheckCircle } from "react-icons/md";

export const StepEditCountry = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const { JWT } = useContext(AppContext);
  const TOKEN = JWT.token;

  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/countries/${id}`)
      .then((res) => res.json())
      .then((res) => {
        handleData(res);
      })
      .catch((err) => {
        setError(true);
        setData({});
      });
  }, [id]);

  const handleData = (resData) => {
    const arrLatitud = [...resData.latitud];
    const pointLatitud = arrLatitud.findIndex((item) => item === ".");
    const newLatitud = {
      value1: resData.latitud.substring(0, pointLatitud),
      value2: resData.latitud.substring(pointLatitud + 1, pointLatitud + 3),
      value3: resData.latitud.substring(pointLatitud + 3, pointLatitud + 5),
      value4: resData.latitud.substring(pointLatitud + 5, pointLatitud + 7),
    };
    const arrLongitud = [...resData.longitud];
    const pointLongitud = arrLongitud.findIndex((item) => item === ".");
    const newlongitud = {
      value1: resData.longitud.substring(0, pointLongitud),
      value2: resData.longitud.substring(pointLongitud + 1, pointLongitud + 3),
      value3: resData.longitud.substring(pointLongitud + 3, pointLongitud + 5),
      value4: resData.longitud.substring(pointLongitud + 5, pointLongitud + 7),
    };
    setData({ ...resData, latitud: newLatitud, longitud: newlongitud });
  };

  const handleFetch = (dataFetch) => {
    fetch(`${process.env.REACT_APP_API_URL}/countries/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(dataFetch),
    })
      .then((res) => res.json())
      .then((res) => {
        setError(false);
        setDone(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <>
      {data.latitud && (
        <AdminCountriesComponent
          data={data}
          setData={setData}
          handleFetch={handleFetch}
        />
      )}
      <Navbar />
      {error && (
        <ModalComponent
          title="¡Lo sentimos!"
          paragraph="Algo no salió como esperábamos. Vuelve a intentarlo en unos segundos."
          paragraphButton="VOLVER"
          linke={-1}
          handleModal={() => setError(false)}
        >
          <MdCancel size="20px" style={{ background: "transparent" }} />
        </ModalComponent>
      )}
      {done && (
        <ModalComponent
          title="¡Listo!"
          paragraph="Los datos fueron guardados con éxito."
          paragraphButton="CONTINUAR"
          linke="/administration/countries"
          handleModal={() => {
            setError(false);
            setDone(false);
          }}
        >
          <MdCheckCircle size="20px" style={{ background: "transparent" }} />
        </ModalComponent>
      )}
    </>
  );
};
