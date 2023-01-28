import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  display: ${(props) => (props.detail ? "block" : "flex")};
  justify-content: flex-start;
  overflow-x: ${(props) => (props.detail ? "none" : "scroll")};
  padding: 0;
  gap: 15px;
  list-style: none;
  position: relative;
  @media (min-width: 768px) {
    max-width: ${(props) => (props.detail ? "560px" : "100%")};
    max-height: ${(props) => (props.detail ? "360px" : "auto")};
    &::-webkit-scrollbar {
      height: 7px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(168, 152, 152);
      border-radius: 20px;
    }
  }
`;
export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 100%;
  }
`;
export const Button = styled.button`
  position: absolute;
  font-size: 3rem;
  cursor: pointer;
  background-color: transparent;
  color: #fbad42;
  padding: 0 10px;
  top: 35%;
  right: ${(props) => (props.right ? "0" : null)};
  opacity: 1;
  z-index: 2;
`;
export const DivImg = styled.div`
  width: 100%;
  opacity: ${(props) => (props.divActive === "active" ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
`;
