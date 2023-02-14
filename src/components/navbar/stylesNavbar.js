import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;

  background-color: #dfdfdf;

  @media (min-width: 768px) {
    position: static;
    width: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dfdfdf;
    height: 90px;
  }
`;

export const Navbars = styled.nav`
  width: 100%;
  padding: 10px 0 5px;
  display: flex;
  align-items: center;
  gap: 0 2rem;

  @media (min-width: 768px) {
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0 1rem;
    background-color: #ebeaea;
    padding: 0 0 0 0;
    height: 90px;
    z-index: 999;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    height: 48px;
    margin-rigth: 10px;
  }
`;
export const Enlace = styled(Link)`
  font-family: "Roboto";
  font-weight: 900;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;

  @media (min-width: 768px) {
    width: 100%;
    font-family: "Roboto";
    font-weight: 900;
    font-size: 10px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.87);
    background-color: transparent;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const LogIn = styled(Link)`
  // Link iniciar sesion
  font-family: "Roboto";
  font-weight: 900;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: black;
  width: 80px;
  height: 40px;

  @media (min-width: 768px) {
    display: flex;
    background-color: #535353;
    border-radius: 30px;
    cursor: pointer;
    outline: none;
    width: 160px;
    height: 40px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 0 1rem;
    margin: 0 10px 0 0;
  }
`;

export const LogOut = styled(Link)`
  // Link cerrar sesion
  font-family: "Roboto";
  font-weight: 900;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background-color: transparent;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  width: 70px;
  height: 40px;

  @media (min-width: 768px) {
    display: flex;
    background-color: transparent;
    border: 1px solid #535353;
    border-radius: 30px;
    margin: 0 10px;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease-in-out;
    width: 90%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 75%;
  }
`;
