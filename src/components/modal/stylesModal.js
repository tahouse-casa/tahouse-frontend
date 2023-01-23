import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: ${(props) => (props.second ? "4" : "3")};
  top: 0;
  left: 0;
  background-color: ${(props) => (props.second ? "#939393" : "#F4F4F4")};
`;
export const TextModal = styled.p`
  width: 100%;
  font-family: "Roboto";
  font-size: ${(props) => (props.isTitle ? "16px" : "14px")};
  margin-top: ${(props) => (props.isTitle ? "10px" : "0")};
  margin-bottom: ${(props) => (props.isTitle ? "15px" : "70px")};
  margin-left: ${(props) => (props.largeParagraph ? "30px" : "0")};
  margin-right: ${(props) => (props.largeParagraph ? "30px" : "0")};
  text-align: center;
`;
export const SecondContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ThirdContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;
  padding: 30px 0;
  position: relative;
`;
export const ButtonContinue = styled.button`
  font-family: "Roboto";
  font-size: 16px;
  color: ${(props) => (props.buttons ? "#fff" : "#000")};
  margin-left: ${(props) => (props.buttons ? "10px" : "0")};
  background-color: ${(props) => (props.buttons ? "#535353" : "transparent")};
  padding: 10px 16px;
  border-radius: 20px;
`;
