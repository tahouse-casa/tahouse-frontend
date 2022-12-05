import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 94.4%;
  width: 500px;
  height: 100%;
  z-index: 22

`;
export const Navbars = styled.nav`
  width: 100%;
  height: 50px;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  box-shadow: 0px -4px 5px rgba(0, 0, 0, 0.14),
    0px -1px 10px rgba(0, 0, 0, 0.12), 0px -2px 4px rgba(0, 0, 0, 0.2);

`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;

`;
export const Enlace = styled.a`
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 16px;
  margin-top: 5px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  background-color: transparent;
  text-decoration: none;
`;
