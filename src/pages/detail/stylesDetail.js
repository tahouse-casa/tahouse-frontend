import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;
export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

export const Copy = styled.input`
  background-color: #f6f8fa;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  padding: 8px 12px;
  font-size: 14px;
  width: ${(props) => (props.show ? "210px" : "0px")};
  border-radius: 5px;
  transition: 0.3s;
  transform: ${(props) =>
    props.show ? "translateX(0px)" : "translateX(400px)"};
  overflow: ${(props) => (props.show ? "visible" : "hidden")};
  @media (max-width: 768px) {
    padding: 2px;
    width: 100px;
  }
`;

export const Divbutton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-right: 20px;
`;

export const ContainerReturn = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
