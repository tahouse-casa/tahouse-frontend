import { useState, useContext } from "react";
import { InputComponent } from "../../../../components/select/inputComponent";
import { DetailCard } from "../../../../components/detailCard/detailCard";
import { Return } from "../../../../components/return/return";
import { MakeModal } from "../../../../components/modal/makeModal";
import { ModalComponent } from "../../../../components/modal/modalComponent";
import { ContainerStep, Button } from "../stylesStepsAdmin";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { AppContext } from "../../../../context";
export const StepThree = ({
  handleSearch,
  data,
  setError,
  errorFetch,
  sendData,
  errorInput,
  setErrorInput,
}) => {
  const [viewModal, setViewModal] = useState(false);
  const [viewSecondModal, setViewSecondModal] = useState(false);

  const { JWT } = useContext(AppContext);
  const TOKEN = JWT.token;

  const handleButtonPrevView = () => {
    let viewDisabled = false;
    let errors = { ...errorInput };
    setError(false);
    if (data["email"] === " " || data["phone"] === " ") {
      setError(true);
      viewDisabled = true;
    }
    if (data["phone"].length < 10) {
      setError(true);
      viewDisabled = true;
      errors = { ...errors, phone: true };
    }
    if (data["email"].length < 5 || !data["email"].includes("@")) {
      setError(true);
      viewDisabled = true;
      errors = { ...errors, email: true };
    }
    setErrorInput(errors);
    if (!viewDisabled) {
      setViewModal(true);
    }
  };

  const sendAndVerifyArchives = async (data) => {
    try {
      let haveNewImages = [];
      let imagesToUsed = [];
      for (let index = 0; index < data.urlImage.length; index++) {
        if (typeof data.urlImage[index] !== "string") {
          haveNewImages = [...haveNewImages, data.urlImage[index]];
        } else {
          imagesToUsed = [...imagesToUsed, data.urlImage[index]];
        }
      }

      if (haveNewImages.length === 0) {
        return { success: true, send: false };
      }

      const f = new FormData();

      for (let index = 0; index < haveNewImages.length; index++) {
        f.append("file", haveNewImages[index]);
      }

      const send = await fetch(
        `${process.env.REACT_APP_API_URL}/properties/uploadFile`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${TOKEN}`,
          },
          body: f,
        }
      );
      const convertJson = await send.json();
      if (!convertJson?.success) {
        return { success: false };
      }
      imagesToUsed = [...imagesToUsed, ...convertJson.urls];
      return { success: true, send: true, response: imagesToUsed };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  };

  const handleSendData = async () => {
    let newData = { ...data };
    const sendImage = await sendAndVerifyArchives(newData);
    if (sendImage.success) {
      if (sendImage?.send) {
        newData.urlImage = sendImage.response;
      }
      const send = await sendData(newData);
      if (send.success) {
        setViewSecondModal(true);
      }
    }
  };

  return (
    <ContainerStep>
      <InputComponent
        handleSearch={handleSearch}
        placeholder="Teléfono"
        nameInput="phone"
        errorInput={errorInput}
        setErrorIput={setErrorInput}
        valor={data.phone}
        intoPlaceholder="Ej: 11 7890 1234"
        message={"Error: El teléfono debe de ser igual o mayor a 10 dígitos."}
      />
      <InputComponent
        handleSearch={handleSearch}
        placeholder="E-mail"
        nameInput="email"
        errorInput={errorInput}
        setErrorIput={setErrorInput}
        valor={data.email}
        type="email"
        validate="otro"
        intoPlaceholder="Ej: email@ejemplo.com.ar"
        message={"Error: El Email no puede estar vacio y debe ser válido."}
      />
      <Button onClick={() => handleButtonPrevView()}>VISTA PREVIA</Button>
      {viewModal && (
        <MakeModal>
          <Return linke={-1} handleReturn={() => setViewModal(false)} />
          <DetailCard card={data} prevView />
          <Button onClick={handleSendData}>PUBLICAR</Button>
        </MakeModal>
      )}
      {viewSecondModal && (
        <ModalComponent
          title="¡Listo!"
          paragraph="El inmueble fue publicado con éxito"
          paragraphButton="CONTINUAR"
          linke={-1}
          handleModal={() => setViewSecondModal(false)}
        >
          <MdCheckCircle size="20px" style={{ background: "transparent" }} />
        </ModalComponent>
      )}

      {errorFetch && (
        <ModalComponent
          title="¡Lo sentimos!"
          paragraph="Algo no salió como esperábamos. Vuelve a intentarlo en unos segundos."
          paragraphButton="VOLVER"
          linke={-1}
          handleModal={() => setViewSecondModal(false)}
        >
          <MdCancel size="20px" style={{ background: "transparent" }} />
        </ModalComponent>
      )}
    </ContainerStep>
  );
};
