import { useState } from "react";
import Swal from "sweetalert2";

import { Return } from "../../../components/return/return";
import { StepONe } from "./steps/stepONe";
import { StepTwo } from "./steps/stepTwo";
import { StepThree } from "./steps/stepThree";
import { MdCancel, MdOutlineWarning } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { ModalComponent } from "../../../components/modal/modalComponent";
import {
  ContainerSteps,
  ParagraphSteps,
  ButtonSig,
  Point,
  Linear,
  ContainerButton,
} from "./stylesStepsAdmin";
export const StepsAdmin = ({ data, error, setData, setError, sendData }) => {
  const [active, setActive] = useState({ value: 0, steps: [0] });
  const [errorInput, setErrorInput] = useState({});
  const [returnModal, setReturnModal] = useState(false);
  const [images, setImages] = useState({});
  const navigate = useNavigate();
  const steps = ["Imágenes", "Datos", "Contacto"];

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleReturn = () => {
    active.steps.pop();
    setActive({ value: active.value - 1, steps: [...active.steps] });
  };

  const handlePrevVIew = () => {
    let viewDisabled = false;
    let changeErrors = {};

    if (active.value === 1) {
      for (const property in data) {
        if (data[property] === "") {
          setError(true);
          viewDisabled = true;
          changeErrors = { ...changeErrors, [property]: true };
        }
        if (
          (property === "meters" && data[property].length < 2) ||
          (property === "price" && data[property].length < 2)
        ) {
          setError(true);
          viewDisabled = true;
          changeErrors = { ...changeErrors, [property]: true };
        }
        if (property === "description" && data[property].length < 10) {
          setError(true);
          viewDisabled = true;
          changeErrors = { ...changeErrors, [property]: true };
        }
      }
      setErrorInput(changeErrors);
    }
    if (!viewDisabled) {
      if (active.value === 0) {
        const updateAndVerifyLength = updateImagesData();
        if (updateAndVerifyLength.error) {
          return;
        }
      }
      setError(false);
      setErrorInput({});
      setActive({
        value: active.value + 1,
        steps: [...active.steps, active.value + 1],
      });
    }
  };

  const updateImagesData = () => {
    const lengthImages = Object.keys(images).length;
    let SelectUrlImages = [...data.urlImage];
    for (let index = 0; index < lengthImages; index++) {
      SelectUrlImages = [...SelectUrlImages, images[index]];
    }
    if (SelectUrlImages.length !== 3) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El número de imágenes de la propiedad deben ser 3.",
      });
      return { error: true };
    }
    setData({ ...data, urlImage: SelectUrlImages });
    setImages({});
    return { error: false };
  };

  return (
    <div style={{ paddingBottom: "70px" }}>
      <Return
        title="Nuevo inmueble"
        viewTitle
        handleReturn={
          active.value === 0 ? () => setReturnModal(true) : handleReturn
        }
      >
        <Link to={-1}>
          <MdCancel
            size="20px"
            style={{
              background: "transparent",
              fill: "black",
              marginTop: "10px",
              marginRight: "15px",
            }}
          />
        </Link>
      </Return>
      <div style={{ marginTop: "30px", minHeight: "90%" }}>
        <ContainerSteps>
          <Linear linear={active.value} />
          {steps.map((item, index) => (
            <div style={{ position: "relative" }} key={index}>
              <Point isActive={active.steps.includes(index) ? true : false} />
              <ParagraphSteps>
                {index + 1} - {item}
              </ParagraphSteps>
            </div>
          ))}
        </ContainerSteps>
        {active.value === 0 && (
          <StepONe
            images={images}
            setImages={setImages}
            data={data}
            setData={setData}
          />
        )}
        {active.value === 1 && (
          <StepTwo
            handleSearch={handleSearch}
            data={data}
            setErrorInput={setErrorInput}
            errorInput={errorInput}
          />
        )}

        {active.value === 2 && (
          <StepThree
            handleSearch={handleSearch}
            data={data}
            error={error}
            setError={setError}
            sendData={sendData}
            setErrorInput={setErrorInput}
            errorInput={errorInput}
          />
        )}
      </div>
      {active.value < 2 && (
        <ContainerButton>
          <ButtonSig onClick={() => handlePrevVIew()}>SIGUIENTE</ButtonSig>
        </ContainerButton>
      )}

      {returnModal && (
        <ModalComponent
          title="¡Cuidado!"
          paragraph="Estás a punto de salir sin guardar las modificaciones hechas.
                                ¡Estás seguro de querer hacerlo?"
          buttons
          paragraphButton="SALIR"
          handleModal={() => navigate("/administration/properties")}
          paragraphSecondButton="CANCELAR"
          handleSecond={() => setReturnModal(false)}
        >
          <MdOutlineWarning size="20px" style={{ background: "transparent" }} />
        </ModalComponent>
      )}
    </div>
  );
};
