import {
  MainContainer,
  Title,
  SecondTitle,
  Input,
  Button,
  Paragraph,
  Register,
  Form,
  ErrorStyle,
} from "./StylesLoginDos";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

export function LoginDos() {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <MainContainer>
      <Title>Te damos la bienvenida a Bonplad</Title>
      <SecondTitle>Inicia sesión para una mejor experiencia</SecondTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        {errors.password && <ErrorStyle>{errors.password.message}</ErrorStyle>}
        <Button>Inicie sesion</Button>
      </Form>
      <Paragraph>
        <Register href="">¿No tienes cuenta? Registrate</Register>
        <br />O ingresa con una red social
      </Paragraph>
      
      <Button><FaFacebook/> Ingresar con Facebook</Button>
      <Button><FaGoogle/> Ingresar con Google</Button>
      <Button><FaTwitter/> Ingresar con Twitter</Button>
    </MainContainer>
  );
}
