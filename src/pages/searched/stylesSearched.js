import styled from "styled-components";
import { BsSliders, BsGeoAlt } from "react-icons/bs";

export const ContainerSearched = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;
export const ContainerListOfEstate = styled.div`
  width: 100%;
  display: ${(props) => (props.changeDisplay > 1 ? "grid" : "flex")};
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 30px 10px;
  margin: 0 10px;
  @media (min-width: 768px) {
    margin: 0 24px;
    gap: 48px 24px;
    grid-template-columns: repeat(auto-fit, 330px);
  }
`;
export const ContainerButtons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2;
  gap: 0 15px;
  padding: 0 10px;
  height: 30px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 0;
    height: auto;
    margin-bottom: 50px;
  }
`;
export const ContainerButton = styled.div`
  width: 100%;
  grid-column-start: ${(props) => props.column};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: #d7d7d7d1;
  border-radius: 6px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const TextButton = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  background: transparent;
`;
export const Iconfilter = styled(BsSliders)`
  margin: 0 8px 0 0;
  width: 12px;
  height: 10px;
  background: transparent;
`;
export const IconMap = styled(BsGeoAlt)`
  margin: 1px 8px 0 0;
  width: 12px;
  height: 11px;
  background: transparent;
`;

export const Title = styled.h2`
  width: 100%;
  font-weight: 600;
  font-size: 13px;
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
export const ContainerSearcher = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
export const ContainerButtonsDownFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const DeleteButton = styled.button`
  background-color: #000;
  padding: 10px;
  border-radius: 20%;
  font-size: 8px;
  color: #fff;
  cursor: pointer;
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
