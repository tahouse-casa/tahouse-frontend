import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import {
  MainContainer,
  Title,
  SecondTitle,
  Input,
  Button,
  Paragraph,
  RegisterButton,
  Form,
  ErrorStyle,
  Facebook,
  Google,
  SocialContainer,
  ContainerLeter,
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
        {error && <ErrorStyle>Los datos ingresados son incorrectos</ErrorStyle>}
        {errors.password && <ErrorStyle>{errors.password.message}</ErrorStyle>}
        <Button>Ingresar</Button>
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
        <Paragraph
          onClick={() => navigate("/recovery-password")}
          style={{ cursor: "pointer" }}
        >
          Recuperar contraseña
        </Paragraph>
      </ContainerLeter>
    </MainContainer>
  );
}
