import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: none;

  @media (min-width: 768px) {
    width: 90%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: start;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    margin-left: 20px;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 40px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 60px;
    height: 30px;
    cursor: pointer;
    background-color: transparent;
  }
`;

export const LogoText = styled.h2`
  text-transform: uppercase;
  font-size: 0.8rem;
  text-align: center;
  font-family: "Roboto";
  font-weight: bold;
  color: #000;

  @media (min-width: 768px) {
    text-transform: uppercase;
    font-size: 0.8rem;
    text-align: center;
    font-family: "Roboto";
    font-weight: bold;
    background-color: transparent;
  }
`;
