import { TfiRulerAlt2 } from "react-icons/tfi";
import { MdOutlineSpaceDashboard, MdOutlineBathtub } from "react-icons/md";
import { BsDoorOpen, BsWhatsapp } from "react-icons/bs";
import { Carrousel } from "../../containers/carrousel/carrousel";

import {
  Container,
  ContainerRow,
  BoldPrice,
  ContactText,
  OfferPrice,
  Adress,
  Description,
  DescriptionContainer,
  IconsTextContainer,
  IconsText,
  ButtonBuy,
} from "./StylesDetailCard";

export const DetailCard = ({ card, prevView }) => {
  const {
    price,
    meters,
    address,
    country,
    rooms,
    bathrooms,
    city,
    description,
    state,
    type,
    environments,
    urlImage,
  } = card;

  return (
    <Container>
      <Carrousel detail="true" data={urlImage} />
      <ContainerRow>
        <BoldPrice>{`USD ${price}`} </BoldPrice>
        <ContactText>
          Enviar mensaje
          <BsWhatsapp style={{ fontSize: "16px", fill: "#60D66A" }} />
        </ContactText>
      </ContainerRow>
      <OfferPrice>
        {type} | {state}
      </OfferPrice>
      <Adress title="true">{address}</Adress>
      <Adress>
        {country} / {city}
      </Adress>
      <DescriptionContainer>
        <IconsTextContainer>
          <TfiRulerAlt2 />
          <IconsText>{meters}m2</IconsText>
        </IconsTextContainer>
        <IconsTextContainer>
          <BsDoorOpen />
          <IconsText>{environments} Ambientes</IconsText>
        </IconsTextContainer>
        <IconsTextContainer>
          <MdOutlineSpaceDashboard />
          <IconsText>{rooms} dorm.</IconsText>
        </IconsTextContainer>
        <IconsTextContainer>
          <MdOutlineBathtub />
          <IconsText>{bathrooms} baños.</IconsText>
        </IconsTextContainer>
      </DescriptionContainer>
      <Description>{description}</Description>
      {!prevView && <ButtonBuy>Adquirir inmueble</ButtonBuy>}
    </Container>
  );
};
