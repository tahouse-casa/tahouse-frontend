import { Container, Img, ContainerData, ContainerOne,
    AlertZona, Text1,Text2, ContainerTwo, DimensionsText,
    DimensionsContainer, Ruler, Contact} from "./stylesCart"

import { BsDoorOpen } from "react-icons/bs";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { MdOutlineSpaceDashboard, MdOutlineBathtub } from "react-icons/md";

import { Link } from "react-router-dom";
export const Cart = ({id,img, price, time, address,
     country,city, featured, baths, environments, rooms, meters}) => {

        const BASE_URL = 'https://drive.google.com/uc?id='
return (
    <Container visible={featured}>
        <Link to={`detail/${id}`} style={{width: '100%'}}>
        <Img src={BASE_URL + img[0]} alt=""visible={featured}/>
        </Link>
        <ContainerData visible={featured}>
            <ContainerOne>
                <ContainerTwo visible={true}>
                    <Text1 Size={'10px'}>{`USD ${price}`}</Text1>
                    <Text2 disabledColor={featured} Size={'7px'}>{time}</Text2>
                </ContainerTwo>
                <AlertZona>Zona destacada</AlertZona>
            </ContainerOne>
            {featured ? (
            <ContainerTwo visible={featured}>
                <Text1 Size={'8px'}>{address}</Text1>
                <Text2>{country}</Text2>
            </ContainerTwo>
                ) : (
                    <ContainerOne>
                        <ContainerTwo visible={true}>
                        <Text2 disabledColor={true} Size={'7px'}>{country} / {city}</Text2>
                        </ContainerTwo>
                        <Contact>contactar</Contact>
                    </ContainerOne>
                )}
            <ContainerTwo row visible={featured}>
                <DimensionsContainer>
                    <TfiRulerAlt2 fill="rgba(0, 0, 0, 0.5)"/> <DimensionsText>{meters} m2.</DimensionsText>
                </DimensionsContainer>
                <DimensionsContainer>
                    <Ruler /> <DimensionsText>{meters / 2} m2.</DimensionsText>
                </DimensionsContainer>
                <DimensionsContainer>
                    <BsDoorOpen fill="rgba(0, 0, 0, 0.5)"/> <DimensionsText>{environments} amb.</DimensionsText>
                </DimensionsContainer>
                <DimensionsContainer>
                    <MdOutlineSpaceDashboard fill="rgba(0, 0, 0, 0.5)"/> <DimensionsText>{rooms} dorm.</DimensionsText>
                </DimensionsContainer>
                <DimensionsContainer>
                    <MdOutlineBathtub fill="rgba(0, 0, 0, 0.5)"/> <DimensionsText>{baths} baños.</DimensionsText>
                </DimensionsContainer>
            </ContainerTwo>
        </ContainerData>
    </Container>
)
} 
