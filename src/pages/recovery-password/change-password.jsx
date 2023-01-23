import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Return } from "../../components/return/return";
import { Title, SendButton } from "./stylesRecoveryPassword";
import { InputWithoutLogic } from "../../components/select/inputWithoutLogic";
import { ModalComponent } from "../../components/modal/modalComponent";
import { MdCancel } from "react-icons/md";

export const ChangePassword = () => {
  const [data, setData] = useState({ passwordOne: "", passwordTwo: "" });
  const [error, setError] = useState({});
  const [check, setCheck] = useState({
    passwordOne: false,
    passwordTwo: false,
  });
  const { token } = useParams();
  const navigate = useNavigate();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
    if (error[name] === true) {
      setError({ ...error, [name]: false });
    }
  };

  const vefifyPassword = () => {
    if (data.passwordOne.length < 8) {
      setError({ passwordOne: true, passwordTwo: false });
    } else if (data.passwordOne !== data.passwordTwo) {
      setError({ passwordOne: false, passwordTwo: true });
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
      body: JSON.stringify({ newPassword: data.passwordOne, token: token }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error === "Unauthorized") {
          setError({ errorFetch: true });
        } else if (res.message === "password change") {
          navigate("/login");
        }
      });
  };
  return (
    <div style={{ padding: "0 16px" }}>
      <Return linke={-1} />
      <div style={{ marginTop: "60px" }}>
        <Title second>Ingresa una nueva contraseña</Title>
        <InputWithoutLogic
          handleSearch={handleInput}
          nameInput="passwordOne"
          errorInput={error}
          intoPlaceholder="Nueva contraseña"
          valor={data.passwordOne}
          errorMessage="Debe contener al menos 8 caracteres"
          noLabel={check.passwordOne}
          password={!check.passwordOne}
          setCheckPassword={setCheck}
          check={check}
        />
        <InputWithoutLogic
          handleSearch={handleInput}
          nameInput="passwordTwo"
          errorInput={error}
          intoPlaceholder="Repetir nueva contraseña"
          valor={data.passwordTwo}
          errorMessage="La contraseña ingresada no coincide"
          noLabel={check.passwordTwo}
          password={!check.passwordTwo}
          setCheckPassword={setCheck}
          check={check}
        />
        <SendButton onClick={() => vefifyPassword()}>REESTABLECER</SendButton>
      </div>
      {error.errorFetch && (
        <ModalComponent
          title="¡Lo sentimos!"
          paragraph="Algo no salió como esperábamos. Vuelve a intentarlo en unos segundos."
          paragraphButton="VOLVER"
          linke={-1}
          handleModal={() =>
            setCheck({ passwordOne: false, passwordTwo: false })
          }
        >
          <MdCancel size="20px" style={{ background: "transparent" }} />
        </ModalComponent>
      )}
    </div>
  );
};
