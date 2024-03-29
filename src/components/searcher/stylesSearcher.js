import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => (props.viewAll ? "fit-content" : "50px")};
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: ${(props) =>
    (props.onlyButton || !props.viewAll) === true ? "50px" : "260px"};
  min-height: 30px;
  padding: 0;
  @media (min-width: 768px) {
    min-width: ${(props) =>
      (props.onlyButton || !props.viewAll) === true ? "50px" : "50%"};
    min-height: 48px;
    height: 48px;
    justify-content: space-between;
  }
`;
export const Input = styled.input`
  font-family: "Roboto";
  margin: 0 12px 0 0;
  font-size: 12px;
  border: none;
  padding: 0;
  height: 30px;
  outline: none;
  background: #fff;
  display: ${(props) => (props.onlyButton ? "none" : "inline-block")};
  @media (min-width: 768px) {
    height: 48px;
    margin: 0;
    width: 80%;
  }
`;
export const SearchButton = styled.button`
  background-color: #dfdfdf;
  font-family: "Roboto";
  padding: 10px 12px;
  font-size: 10px;
  color: #000;
  border: 1px solid #ffffff;
  border-radius: 0px 20px 20px 0px;
  cursor: pointer;
  @media (min-width: 768px) {
    height: 48px;
    padding: 10px 20px;
    font-size: 14px;
  }
`;
