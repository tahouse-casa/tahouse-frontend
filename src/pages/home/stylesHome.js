import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
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
  @media (min-width: 1000px) {
    text-align: center;
  }
`;

export const Containerfeatured = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 60px;
`;
