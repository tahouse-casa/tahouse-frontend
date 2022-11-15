import { TfiRulerAlt2, TfiRuler } from "react-icons/tfi";
import { MdOutlineSpaceDashboard, MdOutlineBathtub } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
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

export const DetailCard = ({card}) =>{

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
    urlImage
  } = card

  return (
      <Container>
        <Carrousel detail="true" data={urlImage}/>
        <ContainerRow>
          <BoldPrice>{`USD ${price}`} </BoldPrice>
          <ContactText>
              Enviar mensaje
              <RiWhatsappFill style={{fontSize: "16px"}} />
          </ContactText>
        </ContainerRow>
        <OfferPrice>{type} | {state}</OfferPrice>
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
            <TfiRuler />
            <IconsText>{meters/2}m2</IconsText>
          </IconsTextContainer>
          <IconsTextContainer>
            <BsDoorOpen />
            <IconsText>2 Ambientes</IconsText>
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
        <Description>
          {description}
        </Description>
        <ButtonBuy>Adquirir inmueble</ButtonBuy>
      </Container>
  );
}