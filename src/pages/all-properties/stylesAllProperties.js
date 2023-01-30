import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const ContainerListOfProperties = styled.div`
  width: 100%;
  display: ${(props) => (props.changeDisplay > 1 ? "grid" : "flex")};
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 34px 16px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 70px;
  @media (min-width: 768px) {
    gap: 48px 24px;
    grid-template-columns: repeat(auto-fit, 330px);
  }
`;
export const Title = styled.h2`
  margin: 20px 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  font-family: "Roboto";
  color: #000;
  @media (min-width: 1000px) {
    text-align: center;
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
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
export const Pagination = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
export const ButtonPag = styled.div`
  background-color: transparent;
  color: black;
  padding: 4px 6px;
  font-size: 14px;
  :hover {
    cursor: pointer;
    background-color: lightblue;
    color: black;
  }
`;
