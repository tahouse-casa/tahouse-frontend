import { ModalComponent } from "../modal/modalComponent";
import { Container, Img, ContainerData, ContainerOne,
    AlertZona, Text1,Text2, ContainerTwo, DimensionsText,
    DimensionsContainer, EditIcon, CancelIcon} from "./stylesCart"
import { BsDoorOpen } from "react-icons/bs";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { MdOutlineSpaceDashboard, MdOutlineBathtub, MdOutlineWarning, MdCheckCircle} from "react-icons/md";

import { Link } from "react-router-dom";
export const Cart = ({
    id,
    img, 
    price, 
    address,
    country,
    city, 
    featured, 
    baths, 
    environments,
    rooms, 
    meters, 
    admin = false, 
    DeleteButton, 
    viewDelete = false,
    setViewDelete,
    handleEdit,
    setError,
    error = {error: false, done:false}}) => {

        const BASE_URL = 'https://drive.google.com/uc?id='
return (
    <Container visible={featured}>
        <Link to={`detail/${id}`} style={{width: '100%'}}>
        <Img src={BASE_URL + img[0]} alt="" visible={featured}/>
        </Link>
        {admin && <CancelIcon onClick={()=>setViewDelete(prevState => !prevState)}/>}
        {admin && <EditIcon onClick={()=>handleEdit(id)}/>}
        <ContainerData visible={featured}>
            <ContainerOne>
                <ContainerTwo>
                    <Text1 Size={'10px'}>{`USD ${price}`}</Text1>
                </ContainerTwo>
                {!featured &&<AlertZona>Zona destacada</AlertZona>}
            </ContainerOne>
            <ContainerTwo>
                <Text1 Size={'8px'}>{address.length > 43 ? address.substring(0,43)+'...': address}</Text1>
                <Text2 disabledColor={true} Size={'7px'}>{country} / {city}</Text2>
            </ContainerTwo>
            <ContainerTwo row>
                <DimensionsContainer>
                    <TfiRulerAlt2 fill="rgba(0, 0, 0, 0.5)"/> <DimensionsText>{meters} m2.</DimensionsText>
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
        {viewDelete &&  <ModalComponent
                            title="¡Cuidado!"
                            paragraph="Estás a punto de eliminar este inmueble de forma permanente.
                            ¿Estás seguro de querer hacerlo?"
                            buttons
                            paragraphButton="ELIMINAR"
                            handleModal={()=>DeleteButton(id)}
                            paragraphSecondButton="CANCELAR"
                            handleSecond={()=>setViewDelete(prevState => !prevState)}
                        >

                            <MdOutlineWarning size="20px" style={{background: 'transparent'}}/>
                        </ModalComponent>}
                    
        {error.error === true && <ModalComponent
                            title="¡Lo sentimos!"
                            paragraph="Algo no salió como esperábamos. Vuelve a intentarlo en unos segundos."
                            paragraphButton="CONTINUAR"
                            handleModal={()=>setError({error: false, done: false})}
                        >
                            <MdOutlineWarning size="20px" style={{background: 'transparent'}}/>
                        </ModalComponent>}
                        
        {error.done === true && <ModalComponent
                            title="¡Listo!"
                            paragraph="El inmueble fue eliminado de forma correcta."
                            paragraphButton="CONTINUAR"
                            handleModal={()=>setError({error: false, done: false})}
                        >
                            <MdCheckCircle size="20px" style={{background: 'transparent'}}/>
                        </ModalComponent>}
    </Container>
)
} 
