import styled from "styled-components";
import { MdAdd as add } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  position: relative;
  padding-bottom: 70px;
`;
export const ContainerListOfEstate = styled.div`
  width: 100%;
  display: ${(props) => (props.changeDisplay > 1 ? "grid" : "flex")};
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px 10px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const ContainerInput = styled.div`
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  position: absolute;
  top: 0;
  right: 20px;
`;

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
