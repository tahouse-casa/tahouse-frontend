import { BigInput, Container, Title, ErrorSpan} from "./stylesSelect.js"

export const BigInputComponent = ({handleSearch, placeholder,
                        nameInput, errorInput, setErrorInput,
                         valor, noLabel, intoPlaceholder}) =>{


            const veryfyInputs =(e) =>{
                setErrorInput({...errorInput, [nameInput]: null})
                handleSearch(e)
            }
    return(
        <Container>
                {!noLabel && <Title>{placeholder}</Title>}
                <div>
                    <BigInput name={nameInput} type="text"
                     onChange={(e)=>veryfyInputs(e)}
                     placeholder={intoPlaceholder || ''}
                     value={valor}/>
                    {errorInput && errorInput[`${nameInput}`] && <ErrorSpan>{errorInput[`${nameInput}`]}</ErrorSpan>}
                </div>
        </Container>
    )}
