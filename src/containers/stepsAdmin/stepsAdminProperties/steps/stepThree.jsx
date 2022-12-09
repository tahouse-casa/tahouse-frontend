import { useState } from "react"
import { InputComponent } from "../../../../components/select/inputComponent"
import { DetailCard } from "../../../../components/detailCard/detailCard"
import { Return } from "../../../../components/return/return"
import { MakeModal } from "../../../../components/modal/makeModal"
import { ModalComponent } from "../../../../components/modal/modalComponent"
import { ContainerStep, Button} from "../stylesStepsAdmin"
import { MdCheckCircle, MdCancel } from "react-icons/md";

export const StepThree = ({handleSearch, data, setError, errorFetch, sendData, errorInput, setErrorInput}) => {
    const [viewModal, setViewModal] = useState(false)
    const [viewSecondModal, setViewSecondModal] = useState(false)


    const handleButtonPrevView = () => {
        let viewDisabled = false;
        let errors = {...errorInput}
        setError(false)
            if(data['email'] === ' ' || data['phone'] === ' '){
                setError(true)
                viewDisabled = true
            }
            if((data['phone'].length < 10)) {
                setError(true)
                viewDisabled = true
                errors = {...errors, phone: true}
            }
            if((data['email'].length < 5 || !data['email'].includes('@'))) {
                setError(true)
                viewDisabled = true
                errors = {...errors, email: true}
            }
            setErrorInput(errors)
                if(!viewDisabled){
            setViewModal(true)
        }
    }

    return (
        <ContainerStep>
            <InputComponent
                handleSearch={handleSearch}
                placeholder="Teléfono"
                nameInput="phone"
                errorInput={errorInput}
                setErrorIput={setErrorInput}
                valor={data.phone}
                intoPlaceholder="Ej: 11 7890 1234"
                message={"Error: El teléfono debe de ser igual o mayor a 10 dígitos."}
            />
            <InputComponent
                handleSearch={handleSearch}
                placeholder="E-mail"
                nameInput="email"
                errorInput={errorInput}
                setErrorIput={setErrorInput}
                valor={data.email}
                type = "email"
                validate="otro"
                intoPlaceholder="Ej: email@ejemplo.com.ar"
                message= {"Error: El Email no puede estar vacio y debe ser válido."}
            />
            <Button onClick={()=>handleButtonPrevView()}>VISTA PREVIA</Button>
            {viewModal && <MakeModal>
                <Return linke={-1} 
                    handleReturn={()=>setViewModal(false)}
                    />
                <DetailCard card={data} prevView/>
                <Button onClick={()=>{
                    sendData()
                    if (!errorFetch){
                        setViewSecondModal(true)
                    }}}>
                    
                    PUBLICAR</Button>
            </MakeModal >}
            {viewSecondModal && <ModalComponent 
                                title="¡Listo!"
                                paragraph="El inmueble fue publicado con éxito"
                                paragraphButton="CONTINUAR"
                                linke={-1}
                                handleModal={()=>setViewSecondModal(false)}
                                >
                                    <MdCheckCircle size="20px" style={{background: 'transparent'}}/>
                                </ModalComponent>}
                                
            {errorFetch && <ModalComponent 
                                title="¡Lo sentimos!"
                                paragraph="Algo no salió como esperábamos. Vuelve a intentarlo en unos segundos."
                                paragraphButton="VOLVER"
                                linke={-1}
                                handleModal={()=>setViewSecondModal(false)}
                                >
                                    <MdCancel size="20px" style={{background: 'transparent'}}/>
                                </ModalComponent>}
        </ContainerStep>
    )
}