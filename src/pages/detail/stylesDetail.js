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
  width: 80%;
  border-radius: 5px;
`;

export const Divbutton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-right: 20px;
`;

export const CopieA = styled.button`
  display: flex;
  justify-content: end;
  color: black;
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  transition: 0.3s;
`;

export const ContainerReturn = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
