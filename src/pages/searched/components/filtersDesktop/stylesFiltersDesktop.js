import styled from "styled-components";

export const AllContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
`;
export const Container = styled.div`
  position: relative;
`;
export const ContainerItem = styled.div`
  display: flex;
  width: 120px;
  padding: 10px 12px;
  font-size: 12px;
  justify-content: space-between;
  background-color: #dfdfdf;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
`;
export const ContainerInput = styled.div`
  position: absolute;
  top: 40px;
  left: -15px;
`;
export const InputItem = styled.input`
  width: 150px;
  border-radius: 8px;
  background-color: #dfdfdf;
  font-size: 12px;
  border: 1px solid #6c6c6c;
  padding: 4px;
  :focus-visible {
    outline: none;
  }
`;
export const SelectItem = styled.select`
  width: 150px;
  border-radius: 8px;
  background-color: #dfdfdf;
  font-size: 12px;
  border: 1px solid #6c6c6c;
  padding: 4px;
  :focus-visible {
    outline: none;
  }
`;
