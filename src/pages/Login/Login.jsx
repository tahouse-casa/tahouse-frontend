import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import {
  MainContainer,
  Title,
  SecondTitle,
  Button,
  Input,
  Paragraph,
  RegisterButton,
  Form,
  ErrorStyle,
  Facebook,
  Google,
  SocialContainer,
  ContainerLeter,
  ShowPasswordLogin,
} from "./stylesLogin";
import { useForm } from "react-hook-form";
import GoogleIcon from "../../assets/Google.svg";
import FacebookIcon from "../../assets/Facebook.svg";

export function Login() {
  const [error, setError] = useState(false);
  const { setJWT } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const saveDataINLocalStorage = (data) => {
    const dataJson = JSON.stringify(data);
    localStorage.setItem("JWT", dataJson);
  };

  const handleFetchLogin = (data) => {
    fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setJWT(res);
        saveDataINLocalStorage(res);
        setError(false);
        navigate("/");
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <MainContainer>
      <Title>Te damos la bienvenida a TaHouse</Title>
      <SecondTitle>Inicia sesión para una mejor experiencia</SecondTitle>
      <Form onSubmit={handleSubmit(handleFetchLogin)}>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          {...register("email", {
            required: {
              value: true,
              message: "Todos los campos son requeridos",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "El formato no es correcto",
            },
          })}
        />

        <Input
          name="password"
          type="password"
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
        <ShowPasswordLogin type="button">
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
        </ShowPasswordLogin>
        {error && <ErrorStyle>Los datos ingresados son incorrectos</ErrorStyle>}
        {errors.password && <ErrorStyle>{errors.password.message}</ErrorStyle>}
        <Button type="submit">Ingresar</Button>
      </Form>
      <Paragraph>
        <RegisterButton to="/register">
          ¿No tienes cuenta? Registrate
        </RegisterButton>
        <br />O ingresa con una red social
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
      <ContainerLeter>
        <Link
          style={{ textDecoration: "none", color: "#000" }}
          to={{
            pathname: "/recovery-password",
          }}
        >
          Recuperar contraseña
        </Link>
      </ContainerLeter>
    </MainContainer>
  );
}
