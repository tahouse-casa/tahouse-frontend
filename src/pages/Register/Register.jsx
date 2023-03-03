import { useState } from "react";
import {
  MainContainer,
  Input,
  Button,
  Paragraph,
  RegisterButton,
  Form,
  ErrorStyle,
  Facebook,
  Google,
  SocialContainer,
  ShowPassword,
  PasswordRepeat,
  Title,
} from "./stylesRegister";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleIcon from "../../assets/Google.svg";
import FacebookIcon from "../../assets/Facebook.svg";
import { Return } from "../../components/return/return";
export function Register({ isRegister }) {
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();
  const [showpassword, setShowpassword] = useState(false);
  const [showpassword2, setShowpassword2] = useState(false);
  //const [password, setPassword] = useState("");
  //const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const handleFetchRegister = (data) => {
    if (data.password !== data.password2) {
      setError({ password: "Verifica que las contraseñas sean iguales" });
      return;
    }
    delete data.password2;
    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SequelizeUniqueConstraintError") {
          setError({ allready: "Esta cuenta ya está registrada" });
          return;
        }
        setError(false);
        navigate("/login");
      })
      .catch((e) => {
        setError(true);
      });
  };

  return (
    <MainContainer>
      <Return linke={"/login"} />
      <Form onSubmit={handleSubmit(handleFetchRegister)}>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          {...register("email", {
            required: {
              value: true,
              message: "El correo ingresado no es válido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@(?:mail\.)?[a-zA-Z0-9.-]+\.(?:com)$/,
              message: "El formato del correo no es correcto",
            },
          })}
        />
        <Input
          name="password"
          type={showpassword ? "text" : "password"}
          onChange={(
            e //setPassword(e.target.value)
          ) => ""}
          placeholder="Contraseña"
          {...register("password", {
            required: {
              value: true,
              message: "Todos los campos son requeridos",
            },
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
        />
        <ShowPassword
          type="button"
          onClick={() => setShowpassword(!showpassword)}
        >
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
              fill="#DFDFDF"
            />
          </svg>
        </ShowPassword>
        <Input
          name="password2"
          type={showpassword2 ? "text" : "password"}
          onChange={(
            e //setPassword2(e.target.value)
          ) => ""}
          placeholder="Repetir contraseña"
          {...register("password2", {
            required: {
              value: true,
              message: "Todos los campos son requeridos",
            },
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
        />
        <PasswordRepeat
          type="button"
          onClick={() => setShowpassword2(!showpassword2)}
        >
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
              fill="#DFDFDF"
            />
          </svg>
        </PasswordRepeat>

        {errors.message && console.log("asdasd")}
        {error && (
          <ErrorStyle>
            {error.password ||
              error.allready ||
              "Los datos ingresados son incorrectos"}
          </ErrorStyle>
        )}
        {errors.password && <ErrorStyle>{errors.password.message}</ErrorStyle>}
        <Button type="submit">Ingresar</Button>
      </Form>
      <Paragraph>
        <RegisterButton href="">O puedes registrarte con</RegisterButton>
      </Paragraph>
      <SocialContainer>
        <Button>
          <Facebook src={FacebookIcon} alt="facebook" /> Ingresar con Facebook
        </Button>
        <Button>
          <Google src={GoogleIcon} alt="google" />
          Ingresar con Google
        </Button>
      </SocialContainer>
    </MainContainer>
  );
}
