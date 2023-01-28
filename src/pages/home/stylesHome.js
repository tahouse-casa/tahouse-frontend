import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`;
export const ContainerSearcher = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 0;
  flex-wrap: wrap;
`;
export const Title = styled.h2`
  width: 100%;
  font-weight: 600;
  font-size: ${(props) => (props.alingLeft ? "20px" : "16px")};
  text-align: ${(props) => props.aling};
  line-height: 18px;
  font-family: "Roboto";
  color: #000;
  margin-left: ${(props) => (props.alingLeft ? "10px" : "0")};
  margin-bottom: 10px;
  margin-top: ${(props) => (props.marginTop ? "20px" : "0")};
  @media (min-width: 768px) {
    margin-left: ${(props) => props.alingLeft && "10%"};
    font-size: ${(props) => (props.alingLeft ? "20px" : "24px")};
    margin-bottom: 16px;
  }
`;

export const Containerfeatured = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 60px;
  @media (min-width: 768px) {
    padding: 0 24px;
  }
`;
