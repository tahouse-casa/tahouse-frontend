import { useState } from "react";
import { Return } from "../../components/return/return"
import {ContainerSteps, ParagraphSteps, ButtonSig, Point, Linear} from "./stylesStepsAdmin"
import { StepONe } from "./steps/stepONe";
import { StepTwo } from "./steps/stepTwo";
import {StepThree} from "./steps/stepThree"
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
export const StepsAdmin = ({data, error, setData, setError, sendData, errorFetch}) => {
    const [active, setActive] = useState({value: 0, steps: [0]})
    const [errorInput, setErrorInput] = useState({})
    const steps = ['Imágenes', 'Datos', 'Contacto']
    
    const handleSearch = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setData({...data, [name]: value})
    }
 
    const handleReturn = () => {
        active.steps.pop()
        setActive({value: active.value - 1, steps: [...active.steps]})
    }
    const handlePrevVIew = () => {
        let viewDisabled = false;
        if(active.value === 1){
            for (const property in data) {
                if(data[property] === ''){
                    setError(true)
                    viewDisabled = true
                    break
                }
                if ((property === 'meters' && data[property].length < 2) || (property === 'price' && data[property].length < 2)){
                    setError(true)
                    viewDisabled = true
                    setErrorInput({...errorInput, [property]: true})
                    }
                if ((property === 'description' && data[property].length < 10)){
                    setError(true)
                    viewDisabled = true
                    setErrorInput({...errorInput, [property]: true})
                    }
              }
        }
        if (!viewDisabled) {
            setError(false)
            setErrorInput({})
            setActive({value: active.value + 1, steps: [...active.steps, active.value + 1]})
        }
    }

        return (
            <>
            <Return linke={-1} title="Nuevo inmueble" viewTitle 
                    handleReturn={active.value === 0 ? false : handleReturn}>
                        <Link to={-1}>
                <MdCancel size="20px" style={{background: 'transparent', fill: 'black', marginTop: '10px', marginRight: '15px'}}/>
                        </Link>
            </Return>
            <div style={{marginTop: '30px', minHeight: '90%'}}>
                <ContainerSteps>
                    <Linear linear={active.value}/>
                    {steps.map((item, index)=>(
                        <div style={{position: 'relative'}} key={index}>
                            <Point isActive={active.steps.includes(index) ? true : false}/>
                            <ParagraphSteps>{index + 1} - {item}</ParagraphSteps>
                        </div>
                    ))}
                </ContainerSteps>
                {active.value === 0 && <StepONe/>}
                {active.value === 1 && <StepTwo handleSearch={handleSearch} 
                                                data={data}
                                                setErrorInput={setErrorInput}
                                                errorInput={errorInput}
                                        />}

                {active.value === 2 && <StepThree 
                                        handleSearch={handleSearch} 
                                        data={data}
                                        error={error}
                                        setError={setError}
                                        sendData={sendData}
                                        errorFetch={errorFetch}
                                        setErrorInput={setErrorInput}
                                        errorInput={errorInput}
                                        />}

            </div>
            {error && <p>completa todos los parametros para continuar</p>}
            {active.value < 2 &&  
            <ButtonSig 
                onClick={() =>handlePrevVIew()}>
                SIGUIENTE
            </ButtonSig>}
        </>
    )
}