import styled from "styled-components";

export const ContainerSteps = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
`;
export const ParagraphSteps = styled.p`
  font-size: 12px;
  margin-top: 10px;
  font-family: "Roboto";
`;
export const ButtonSig = styled.button`
  width: 100%;
  padding: 10px 0;
  display: flex;
  color: rgba(83, 83, 83, 0.87);
  justify-content: center;
  font-size: 14px;
  border: 2px solid #00000047;
  border-radius: 20px;
  font-family: "Roboto";
  cursor: pointer;
`;
export const Point = styled.div`
  background: ${(props) => (props.isActive ? "#535353" : "#adabab")};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 50%;
`;
export const Linear = styled.div`
  width: 65%;
  height: 2px;
  color: azure;
  background-image: ${(props) =>
    props.linear === 0
      ? "linear-gradient(to right, #DFDFDF 50% 50%, #DFDFDF 50%)"
      : props.linear === 1
      ? "linear-gradient(to right, #535353 50%, #DFDFDF 50%)"
      : "linear-gradient(to right, #535353 50%, #535353 50%)"};
  margin-top: 2px;
  position: absolute;
  top: 0;
  left: 20%;
  z-index: 1;
`;
export const ContainerButton = styled.div`
  width: 100%;
  padding: 0 16px;
`;
//step1
export const ContainerIMage = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
export const ContainerAddIMage = styled.div`
  width: 100%;
  height: min-content;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #00000047;
  border-radius: 20px;
  gap: 15px;
`;
export const Phrase = styled.label`
  font-size: 14px;
  font-family: "Roboto";
  cursor: pointer;
`;
export const ErrorSpan = styled.span`
  font-size: 12px;
  font-family: "Roboto";
  color: red;
  margin-bottom: 5px;
  text-align: start;
`;
//step2 and step3
export const ContainerStep = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Button = styled.button`
  width: 94%;
  margin: 0 16px;
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: rgba(83, 83, 83, 0.87);
  font-size: 14px;
  border: 2px solid #00000047;
  border-radius: 20px;
  font-family: "Roboto";
  position: absolute;
  bottom: 70px;
  left: 0;
`;
