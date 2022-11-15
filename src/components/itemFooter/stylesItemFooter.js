import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
`;
export const DropDown = styled.div`
  width: 100%;
  user-select: none;
  margin: auto;
  position: relative;
  background: #ebeaea;
`;
export const DropButton = styled.div`
  padding: 15px 10px;
  background: #ebeaea;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.02);
  font-weight: bold;
  color: #000;
  opacity: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  font-size: 13px;
`;
export const DropContent = styled.div`
  position: relative;
  top: 110%;
  left: 0;
  padding: 15px;
  background: #ebeaea;
  box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.02);
  font-weight: 400;
  color: #333;
  width: 100%;
`;
export const TextContent = styled.p`
  background-color: #ebeaea;
  text-align: justify;
  font-size: 12px;
`;
export const Icon = styled(FiChevronRight)`
  background-color: #ebeaea;
  transform: ${props=> props.open ? "rotate(90deg)" : "none"};
`;