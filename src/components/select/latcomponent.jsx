//import { useState } from "react"
import { Container, Title, InputLat, ContainerInputLat, ErrorSpan} from "./stylesSelect"

export const LatComponent = ({
    handleData,
    placeholder,
    nameInput, 
    intoPlaceholder,
    value,
    errorInput
    }) => {

    return (
        <Container style={{marginBottom: '10px'}}>
            <Title>{placeholder}</Title>
            <ContainerInputLat>
                <InputLat type={"number"}
                        name="value1"
                        onChange={(e)=>handleData(e, nameInput)}
                        placeholder={intoPlaceholder || ''}
                        value={value.value1}
                        error={errorInput[nameInput].value1}
                        />
                <InputLat type={"number"}
                        name="value2"
                        onChange={(e)=>handleData(e, nameInput)}
                        placeholder={intoPlaceholder || ''}
                        value={value.value2}
                        error={errorInput[nameInput].value2}
                        />
                <InputLat type={"number"}
                        name="value3"
                        onChange={(e)=>handleData(e, nameInput)}
                        placeholder={intoPlaceholder || ''}
                        value={value.value3}
                        error={errorInput[nameInput].value3}
                        />
                <InputLat type={"number"}
                        name="value4"
                        onChange={(e)=>handleData(e, nameInput)}
                        placeholder={intoPlaceholder || ''}
                        value={value.value4}
                        error={errorInput[nameInput].value4}
                        />
                
            </ContainerInputLat>
            <div style={{display:'flex', flexWrap: 'wrap'}}>
                {errorInput[nameInput].all && <ErrorSpan>Ninguna casiilla puede estas vacia.</ErrorSpan>}
                {errorInput[nameInput].value1 && <ErrorSpan>La casilla número 1 no puede estar vacia ni contener más de tres valores.</ErrorSpan>}
                {errorInput[nameInput].value2 && <ErrorSpan>La casilla número 2 no puede estar vacia ni contener más de dos valores.</ErrorSpan>}
                {errorInput[nameInput].value3 && <ErrorSpan>La casilla número 3 no puede estar vacia ni contener más de dos valores.</ErrorSpan>}
                {errorInput[nameInput].value4 && <ErrorSpan>La casilla número 4 no puede estar vacia ni contener más de dos valores.</ErrorSpan>}
            </div>
        </Container>
    )
}