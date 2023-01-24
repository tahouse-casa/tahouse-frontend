import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  color: #333;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
`;

export const Logo = styled.img`
  width: 300px;
  height: 150px;
`;

// hacer animacion de letras que vallan apareciendo una a una
export const Text = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  @keyframes aparecerLetras {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  span {
    animation: aparecerLetras 1s linear infinite;
    animation-delay: 0.5s;
  }
  span:nth-child(1) {
    animation-delay: 0.5s;
  }
  span:nth-child(2) {
    animation-delay: 0.7s;
  }
  span:nth-child(3) {
    animation-delay: 0.9s;
  }
  span:nth-child(4) {
    animation-delay: 1.1s;
  }
  span:nth-child(5) {
    animation-delay: 1.3s;
  }
`;
