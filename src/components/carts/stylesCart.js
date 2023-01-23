import styled from "styled-components";
import { MdCancel as cancel } from "react-icons/md";
import { MdModeEdit as edit } from "react-icons/md";
import { MdFavorite as fav } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: ${(props) => (props.visible ? "0 15px 0 0" : "0")};
  position: relative;
  max-height: ${(props) => (props.visible ? "240px" : "182px")};
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  max-width: 160px;
`;
export const Img = styled.img`
  width: ${(props) => (props.visible ? "220px" : "100%")};
  height: ${(props) => (props.visible ? "150px" : "100px")};
  margin-bottom: 0;
  border-radius: 6px;
  object-fit: cover;
`;

export const ContainerData = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: ${(props) => (props.visible ? "0 8px" : "4px 4px 8px")};
`;
export const ContainerOne = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2;
  height: fit-content;
  margin: 0;
`;
export const AlertZona = styled.div`
  grid-column-start: 2;
  width: 60px;
  height: fit-content;
  padding: 2px 0 0 0;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 6px;
  line-height: 10px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 0 0 10px;
`;
export const Text1 = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.Size};
  line-height: 12px;
  color: #000;
`;
export const ContainerTwo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: flex-start;
  margin: ${(props) => (props.row ? "7px 0" : "0")};
`;
export const Text2 = styled.span`
  color: ${(props) => (props.disabledColor ? "#000" : "rgba(0, 0, 0, 0.5)")};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.Size || "9px"};
  line-height: 12px;
`;

export const DimensionsText = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  text-align: center;
  margin: 0;
`;
export const DimensionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;
export const CancelIcon = styled(cancel)`
  width: 24px;
  height: 24px;
  padding: 2px;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  right: 5px;
  top: 5px;
`;
export const EditIcon = styled(edit)`
  width: 24px;
  height: 24px;
  padding: 2px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 5px;
  top: 5px;
`;
export const FavoriteIcon = styled(fav)`
  width: 24px;
  height: 24px;
  padding: 2px;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  right: 5px;
  top: 5px;
`;
