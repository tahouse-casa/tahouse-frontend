import { useState } from "react";
import { Return } from "../../components/return/return";
import { ModalComponent } from "../../components/modal/modalComponent";
import { InputWithoutLogic } from "../../components/select/inputWithoutLogic";
import {
  Title,
  SendButton,
  Text,
  Container,
  ContainerReturn,
  ContainerNavbar,
} from "./stylesRecoveryPassword";
import { MdCheckCircle } from "react-icons/md";
import { Navbar } from "../../components/navbar/navbar";

export const RecoveryPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [done, setDone] = useState(false);

  const handleInput = (e) => {
    setEmail(e.target.value);
    if (error.sendEmail === true) {
      setError({ sendEmail: false });
    }
  };

  const sendEmail = () => {
    const viewIfIsValid = email.includes("@");
    if (!viewIfIsValid) {
      setError({ sendEmail: true });
    } else {
      fetchData();
    }
  };

  const fetchData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/auth/recovery`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error === "Unauthorized") {
          setError({ sendEmail: true });
        } else if (res.message === "mail sent") {
          setDone(true);
        }
      });
  };

  return (
    <>
      <ContainerNavbar>
        <Navbar />
      </ContainerNavbar>
      <ContainerReturn>
        <Return linke={-1} />
      </ContainerReturn>
      <Container style={{ padding: "0 16px" }}>
        <Title>Recuperar contraseña</Title>
        <Title second>Ingresa la dirección de email</Title>
        <div style={{ maxWidth: "328px", width: "328px" }}>
          <InputWithoutLogic
            handleSearch={handleInput}
            nameInput="sendEmail"
            errorInput={error}
            intoPlaceholder="Email"
            valor={email}
            errorMessage="El email ingresado no es válido."
            noLabel
          />
          <SendButton onClick={() => sendEmail()}>ENVIAR</SendButton>
        </div>
        <Text>¿No recibiste el correo aún?</Text>
        <Text onClick={() => sendEmail()} hover>
          Puedes reintentarlo
        </Text>
        {done && (
          <ModalComponent
            title="¡Listo!"
            paragraph="El mail fue enviado con éxito"
            paragraphButton="CONTINUAR"
            linke={-1}
            handleModal={() => {
              setDone(false);
            }}
          >
            <MdCheckCircle size="20px" style={{ background: "transparent" }} />
          </ModalComponent>
        )}
      </Container>
    </>
  );
};
