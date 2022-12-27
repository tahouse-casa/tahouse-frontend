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
} from "./stylesRegister";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleIcon from "../../assets/Google.svg";
import FacebookIcon from "../../assets/Facebook.svg";
import {Return} from '../../components/return/return'
export function Register({ isRegister }) {
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()
  const handleFetchRegister = (data) => {
    if (data.password !== data.password2) {
      setError({password: "Verifica que las contraseñas sean iguales"})
      return
    }
     delete data.password2
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
          setError({allready: "Esta cuenta ya está registrada"})
          return
        }
        setError(false);
        navigate('/login')
      })
      .catch((e) => {
        setError(true);      
      });
  };

  return (
    <MainContainer>
      <Return linke={"/login"}/>
      <Form onSubmit={handleSubmit(handleFetchRegister)}>
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
          <Input
            name="password2"
            type="password"
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
         {errors.message && console.log('asdasd')}
        {error && <ErrorStyle>{error.password || error.allready || "Los datos ingresados son incorrectos"}</ErrorStyle>}
        {errors.password && <ErrorStyle>{errors.password.message}</ErrorStyle>}
        <Button>Ingresar</Button>
      </Form> 
      <Paragraph>
        <RegisterButton href="">O ingresa con una red social</RegisterButton>
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
