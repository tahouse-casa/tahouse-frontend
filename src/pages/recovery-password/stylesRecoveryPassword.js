import styled from "styled-components";

export const Container = styled.div`
  min-width: 380px;
  width: 500px;
  margin: 0 auto;
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${(props) => (props.second ? "16px" : "24px")};
  font-family: "Roboto";
  text-align: center;
  font-weight: 500;
  margin-top: ${(props) => (props.second ? "10px" : "25px")};
  margin-bottom: ${(props) => (props.second ? "35px" : "0")};
  width: 100%;
  color: ${(props) => (props.second ? "rgba(83, 83, 83, 0.87)" : "#000")};
  padding: 0 16px;
`;
export const SendButton = styled.button`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  background: #dfdfdf;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-top: 40px;
  margin-bottom: 35px;
  padding: 10px 0;
`;
export const Text = styled.p`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  &:hover {
    color: ${(props) => (props.hover ? "blue" : "rgba(0, 0, 0, 0.87)")};
  }
`;

export const ContainerReturn = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
