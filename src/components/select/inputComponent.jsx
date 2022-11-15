import { Input, Container, Title, ContainerMinMax, ErrorSpan} from "./stylesSelect.js"

export const InputComponent = ({handleSearch, placeholder,
                        nameInput, errorInput, setErrorIput,
                        validate = "integer", minmax}) =>{

    const verifyInputs = (verify, nameInput, e) => {
        if (e.target.value === ''){
            setErrorIput({...errorInput, [nameInput]: null})
            handleSearch(e)
        }
        else if (verify === "integer") {
            const includesValue = e.target.value.includes('.')
                if (includesValue) {
                setErrorIput({...errorInput, [nameInput]: `error: el número de ${nameInput} debe de ser un entero`})
            } else {
                setErrorIput({...errorInput, [nameInput]: null})
                handleSearch(e)
            }
        }
        else if (verify === "decimal") {
            const includesValue = e.target.value.includes('.')
                if (!includesValue) {
                setErrorIput({...errorInput, [nameInput]: `error: el número de ${nameInput} debe de ser un decimal`})
            } else {
                setErrorIput({...errorInput, [nameInput]: null})
                handleSearch(e)
            }
        }
    }
    return(
        <Container>
            <Title>{placeholder}</Title>
            {minmax ? (
                <ContainerMinMax>
                    <div>
                        <Input type="number" min="90" placeholder="min" right
                                name="min"
                                onChange={(e)=>verifyInputs(validate, e.target.name, e)}/>
                        {errorInput['min'] && <ErrorSpan>{errorInput['min']}</ErrorSpan>}
                    </div>
                    <div>
                        <Input type="number" max="10000000" placeholder="max"
                                name="max"
                                onChange={(e)=>verifyInputs(validate, e.target.name, e)}/>
                        {errorInput['max'] && <ErrorSpan>{errorInput['max']}</ErrorSpan>}
                    </div>
                </ContainerMinMax>
            ) : (
                <div>
                    <Input name={nameInput} type="number"
                     onChange={(e)=>verifyInputs(validate,nameInput,e)}
                     />
                    {errorInput[`${nameInput}`] && <ErrorSpan>{errorInput[`${nameInput}`]}</ErrorSpan>}
                </div>
            )
            }
        </Container>
    )}
