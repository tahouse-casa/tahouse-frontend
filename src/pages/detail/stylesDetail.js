import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 768px) {
    padding-top: 60px;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;
export const ContainerIcons = styled.div`
  display: flex;
  gap: 0 7px;
  margin-right: 10px;
  padding-top: 5px;
`;

export const ContainerReturn = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
