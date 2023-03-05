import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Return } from "../../../components/return/return";
import { InputComponent } from "../../../components/select/inputComponent";
import { LatComponent } from "../../../components/select/latcomponent";
import { InputWithoutLogic } from "../../../components/select/inputWithoutLogic";

import { Container, Button, DivAdd } from "./stylesAdminCountries";
import { ModalComponent } from "../../../components/modal/modalComponent";

import { MdCancel, MdOutlineWarning, MdAddCircle } from "react-icons/md";

export const AdminCountriesComponent = ({ data, setData, handleFetch }) => {
  const [viewModals, setViewModals] = useState({ error: false, done: true });
  const [cityData, setCityData] = useState(data.citys);
  const [errorInput, setErrorInput] = useState({
    country: false,
    latitud: { value1: false, value2: false, value3: false, value4: false },
    longitud: { value1: false, value2: false, value3: false, value4: false },
    citys: data.citys.map((item, index) => {
      return { [index]: false };
    }),
  });
  const navigate = useNavigate();

  const handleSearch = (e, nameInput) => {
    let valueNameInput;
    if (nameInput) {
      const valueInput = data[nameInput];
      valueNameInput = {
        ...valueInput,
        [e.target.name]: e.target.value,
      };
    }
    const name = nameInput || e.target.name;
    const value = nameInput
      ? valueNameInput
      : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleErrorLongitudAndLatitud = (nameInput) => {
    let information = data[nameInput];
    let captureError = errorInput[nameInput];
    const values = Object.keys(errorInput[nameInput]);
    let hasError = false;
    values.forEach((item) => {
      const validateOne =
        item === "value1"
          ? information[item].length > 3
          : information[item].length > 2;
      if (validateOne || information[item].length === 0) {
        captureError = { ...captureError, [item]: true };
        hasError = true;
      } else {
        captureError = { ...captureError, [item]: false };
      }
    });
    return { [nameInput]: { hasError, captureError } };
  };
  const handleErrorCitysAndCountry = () => {
    let hasError = false;
    let country = false;
    let citys = [];
    if (data.country === "") {
      hasError = true;
      country = true;
    }
    cityData.forEach((item, index) => {
      if (item === "") {
        citys.push({ [index]: true });
        hasError = true;
      } else {
        citys.push({ [index]: false });
      }
    });
    return { errors: { hasError, country, citys } };
  };
  const handleCitys = (e) => {
    const name = e.target.name;
    const value = e.target.value.toUpperCase();
    const newData = [...cityData];
    newData[name] = value;
    setCityData(newData);
    setData({ ...data, citys: newData });
  };

  const handleTransformData = () => {
    const allvalueLatitud = Object.values(data.latitud);
    allvalueLatitud[0] = allvalueLatitud[0] + ".";
    const concatValueLatitud = allvalueLatitud.reduce((a, b) => a + b);
    const transformLatitud = parseFloat(concatValueLatitud);
    const allvalueLongitud = Object.values(data.longitud);
    allvalueLongitud[0] = allvalueLongitud[0] + ".";
    const concatValueLongitud = allvalueLongitud.reduce((a, b) => a + b);
    const transformLongitud = parseFloat(concatValueLongitud);
    const citysMayus = cityData.map(
      (item) => item[0].toUpperCase() + item.substr(1)
    );
    const dataFetch = {
      country: data.country.toUpperCase(),
      latitud: transformLatitud,
      longitud: transformLongitud,
      citys: citysMayus,
    };
    handleFetch(dataFetch);
  };
  const handleDone = () => {
    const verifyLatitud = handleErrorLongitudAndLatitud("latitud");
    const errorLatitud = verifyLatitud.latitud.hasError;
    const valuesLatitud = verifyLatitud.latitud.captureError;

    const verifyLongitud = handleErrorLongitudAndLatitud("longitud");
    const errorLongitud = verifyLongitud.longitud.hasError;
    const valuesLongitud = verifyLongitud.longitud.captureError;

    const OthersError = handleErrorCitysAndCountry();
    const errorCitys = OthersError.errors.citys;
    const errorCountry = OthersError.errors.country;
    const hasError = OthersError.errors.hasError;
    setErrorInput({
      country: errorCountry,
      citys: errorCitys,
      latitud: valuesLatitud,
      longitud: valuesLongitud,
    });
    if (errorLatitud || errorLongitud || hasError) {
      return;
    } else {
      handleTransformData();
    }
  };

  const handleDeleteCity = (id) => {
    const data = cityData;
    data.splice(id, 1);
    setCityData([...data]);
  };
  return (
    <>
      {viewModals.done && (
        <>
          <Return
            title="Países"
            viewTitle
            handleReturn={() => setViewModals({ ...viewModals, return: true })}
          >
            <MdCancel
              size="20px"
              style={{
                background: "transparent",
                fill: "black",
                marginTop: "10px",
                marginRight: "15px",
              }}
              onClick={() => setViewModals({ ...viewModals, return: true })}
            />
          </Return>
          <Container>
            <InputComponent
              handleSearch={(e)=>handleSearch({target: {name: "country", value: e.target.value.toUpperCase())}
              placeholder="Nombre del País"
              nameInput="country"
              errorInput={errorInput}
              setErrorIput={setErrorInput}
              valor={data.country}
              noLabel
              intoPlaceholder="Ej: Colombia"
            />
            <LatComponent
              placeholder="Latitud"
              intoPlaceholder="00"
              handleData={handleSearch}
              nameInput="latitud"
              value={data.latitud}
              errorInput={errorInput}
            />
            <LatComponent
              placeholder="Longitud"
              intoPlaceholder="00"
              handleData={handleSearch}
              nameInput="longitud"
              value={data.longitud}
              errorInput={errorInput}
            />
            {cityData.map((item, index) => (
              <div style={{ position: "relative" }} key={index}>
                <InputWithoutLogic
                  handleSearch={handleCitys}
                  placeholder="Ciudad"
                  nameInput={`${index}`}
                  errorInput={errorInput.citys[index]}
                  valor={cityData[index]}
                  noLabel
                  intoPlaceholder="Ej: Medellín"
                />
                <MdCancel
                  size="20px"
                  style={{
                    background: "transparent",
                    fill: "black",
                    position: "absolute",
                    top: "50%",
                    right: "8px",
                  }}
                  onClick={() => handleDeleteCity(index)}
                />
              </div>
            ))}
            <DivAdd>
              Agregar
              <MdAddCircle
                size="20px"
                style={{ background: "transparent", cursor: "pointer" }}
                onClick={() => {
                  setCityData([...cityData, ""]);
                  const indexCitys = errorInput.citys.length;
                  setErrorInput({
                    ...errorInput,
                    citys: [...errorInput.citys, { [indexCitys]: false }],
                  });
                }}
              />
            </DivAdd>
            <Button onClick={() => handleDone()}>GUARDAR</Button>
          </Container>
        </>
      )}

      {viewModals.return && (
        <ModalComponent
          title="¡Cuidado!"
          paragraph="Estás a punto de salir sin guardar las modificaciones hechas.
                                ¡Estás seguro de querer hacerlo?"
          buttons
          paragraphButton="SALIR"
          handleModal={() => navigate("/administration/countries")}
          paragraphSecondButton="CANCELAR"
          handleSecond={() => setViewModals({ ...viewModals, return: false })}
        >
          <MdOutlineWarning size="20px" style={{ background: "transparent" }} />
        </ModalComponent>
      )}
    </>
  );
};
