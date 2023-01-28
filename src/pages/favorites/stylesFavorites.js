import styled from "styled-components";

export const ListFilter = styled.ul`
  width: 160px;
  position: absolute;
  top: 37px;
  right: 15px;
  list-style: none;
  background: #dfdfdf;
  border-radius: 10px 0px 0px 0px;
  padding: 0;
  z-index: 1;
  margin-top: 20px;
`;
export const ItemFilter = styled.li`
  font-family: "Roboto";
  font-size: 12px;
  gap: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: transparent;
`;
export const ContainerListOfEstate = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 34px 16px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 70px;
  @media (min-width: 768px) {
    gap: 48px 24px;
  }
`;
export const ContainerReturn = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
