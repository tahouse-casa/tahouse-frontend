import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
  width: 100%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 45% 55%;
    gap: 24px;
  }
`;

export const FirtsContainer = styled.div`
  @media (min-width: 768px) {
    grid-column: 1/2;
  }
`;
export const SecondContainer = styled.div`
  @media (min-width: 768px) {
    grid-column: 2/2;
  }
`;

export const ContainerCarrousel = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const ContainerImage = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    display: block;
    padding-left: 22%;
    overflow: hidden;
    border-radius: 8px;
    max-height: 270px;
  }
`;
export const Img = styled.img`
  @media (min-width: 768px) {
    width: 100%;
    height: ${(props) => props.main && "100%"};
    max-width: ${(props) => (props.main ? "560px" : "212px")};
    max-height: ${(props) => (props.main ? "270px" : "140px")};
    min-height: ${(props) => props.main && "268px"};

    border-radius: 8px;
    border: ${(props) => props.selected && "3px solid #00d0ff"};
    cursor: ${(props) => !props.main && "pointer"};
    object-fit: cover;
  }
`;
export const ContainerSecondImage = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    overflow-x: scroll;
    cursor: pointer;

    &::-webkit-scrollbar {
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(199 199 199);
      border-radius: 20px;
    }
  }
`;
export const ContainerIcons = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-top: 12px;
    padding-left: 22%;
  }
`;
export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const BoldPrice = styled.p`
  font-size: 15px;
  margin-top: 12px;
  font-family: "Roboto";
  font-weight: bold;
  text-transform: uppercase;
`;
export const ContactText = styled.p`
  display: flex;
  margin-top: 12px;
  justify-content: center;
  align-items: flex-end;
  font-size: 12px;
  font-family: "Roboto";
  gap: 2px;
  margin-right: 10px;
  color: #000;
  cursor: pointer;
  @media (min-width: 768px) {
    display: ${(props) => !props.desktop && "none"};
    margin: 0 10px 0 0;
  }
`;
export const OfferPrice = styled.p`
  color: #000;
  opacity: 50%;
  margin-bottom: 10px;
  font-size: 13px;
  font-family: "Roboto";
`;
export const Adress = styled.p`
  font-size: ${(props) => (props.title ? "14px" : "13px")};
  opacity: ${(props) => (props.title ? "100%" : "50%")};
  font-weight: ${(props) => props.title && "600"};
  margin-bottom: ${(props) => (props.title ? "0%" : "10px")};
  font-family: "Roboto";
`;
export const DescriptionContainer = styled.div`
  opacity: 50%;
  display: flex;
  margin-bottom: 15px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    grid-column: 1 / span 2;
  }
`;
export const ButtonBuy = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #dfdfdf;
  border-radius: 30px;
  margin-bottom: 12px;
  font-family: "Roboto";
  font-size: 14px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.14))
    drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.12))
    drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
  @media (min-width: 768px) {
    width: 40%;
  }
`;
export const Description = styled.p`
  width: 100%;
  text-align: justify;
  font-size: 12px;
  opacity: 50%;
  margin-bottom: 20px;
  font-family: "Roboto";
  @media (min-width: 768px) {
    width: 50%;
    padding-left: 22%;
  }
`;
export const IconsTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
export const IconsText = styled.p`
  font-size: 8px;
  font-family: "Roboto";
`;
export const Copy = styled.input`
  @media (min-width: 768px) {
    background-color: #f6f8fa;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 20px;
    border-radius: 5px;
    transition: 0.3s;
    width: 110px;
    height: 30px;
    opacity: ${(props) => (props.show ? "1" : "0")};
  }
  @media (min-width: 1440px) {
    width: 210px;
  }
`;
