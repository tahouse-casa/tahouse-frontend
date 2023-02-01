import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { MdOutlineSpaceDashboard, MdOutlineBathtub } from "react-icons/md";
import { BsDoorOpen, BsWhatsapp } from "react-icons/bs";
import { Carrousel } from "../../containers/carrousel/carrousel";
import { MdShare, MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

import { writeText } from "clipboard-polyfill";
import { AppContext } from "../../context";
import {
  Container,
  FirtsContainer,
  Img,
  SecondContainer,
  ContainerCarrousel,
  ContainerIcons,
  ContainerRow,
  BoldPrice,
  ContactText,
  OfferPrice,
  Adress,
  Description,
  DescriptionContainer,
  IconsTextContainer,
  IconsText,
  ButtonContainer,
  ButtonBuy,
  ContainerImage,
  ContainerSecondImage,
  Copy,
  CopieA,
} from "./StylesDetailCard";

export const DetailCard = ({
  card,
  prevView,
  handleDelete,
  handleAddFavorite,
  viewIncludes,
}) => {
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
    id,
  } = card;
  const [itemSelected, setItemSelected] = useState(0);

  const [copyshow, setCopyshow] = useState("false");
  const [buttonText, setButtonText] = useState("");
  const { JWT } = useContext(AppContext);
  const navigate = useNavigate();
  const selectImage = () => {
    const result = urlImage.find((item, index) => index === itemSelected);
    const BASE_URL = "https://drive.google.com/uc?id=";
    return BASE_URL + result;
  };
  const TOKEN = JWT.token;
  const handleFeatured = () => {
    if (TOKEN) {
      fetch(`${process.env.REACT_APP_API_URL}/featured`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          propertyId: id,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    } else {
      navigate("/login");
    }
  };

  const url = window.location.href;

  function copyUrl() {
    try {
      writeText(url);
      setButtonText("Copied!");
      setCopyshow("true");
    } catch (err) {
      setButtonText("Error!");
      setCopyshow("false");
    }
  }
  return (
    <Container>
      <FirtsContainer>
        <ContainerImage>
          <Img src={selectImage()} main />
        </ContainerImage>
        <ContainerCarrousel>
          <Carrousel detail="true" data={urlImage} />
        </ContainerCarrousel>
        <ContainerIcons>
          <div style={{ display: "flex", gap: "20px" }}>
            {viewIncludes ? (
              <MdFavorite
                size="20px"
                onClick={() => handleDelete()}
                style={{ background: "transparent", cursor: "pointer" }}
              />
            ) : (
              <MdOutlineFavoriteBorder
                size="20px"
                onClick={() => handleAddFavorite()}
                style={{ background: "transparent", cursor: "pointer" }}
              />
            )}
            <button onClick={() => copyUrl()}>
              <MdShare
                size="20px"
                style={{ background: "transparent", cursor: "pointer" }}
              />
            </button>

            {copyshow === "false" ? (
              <Copy type="text" value={url} readOnly={true} />
            ) : (
              <Copy show type="text" value={url} readOnly={true} />
            )}
          </div>
          <CopieA>{buttonText}</CopieA>
          <ContactText desktop onClick={() => handleFeatured()}>
            <BsWhatsapp style={{ fontSize: "16px", fill: "#60D66A" }} />
          </ContactText>
        </ContainerIcons>
      </FirtsContainer>
      <SecondContainer>
        <ContainerSecondImage>
          {urlImage.map((item, index) => (
            <Img
              key={index}
              src={"https://drive.google.com/uc?id=" + item}
              selected={index === itemSelected ? true : false}
              onClick={() => setItemSelected(index)}
            />
          ))}
        </ContainerSecondImage>

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
      </SecondContainer>
      <Description>{description}</Description>
      <ButtonContainer>
        {!prevView && <ButtonBuy>Adquirir inmueble</ButtonBuy>}
      </ButtonContainer>
    </Container>
  );
};
