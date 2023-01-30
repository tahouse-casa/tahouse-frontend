import styled from "styled-components";
import { MdAdd as add } from "react-icons/md";

export const ButtonAdd = styled(add)`
  position: fixed;
  z-index: 1;
  padding: 10px;
  width: 36px;
  height: 36px;
  bottom: 70px;
  right: 20px;
  border-radius: 50%;
  background-color: #dfdfdf;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
`;
export const ContainerReturn = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
