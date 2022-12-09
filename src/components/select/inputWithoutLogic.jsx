import { Input, Container, Title, ErrorSpan} from "./stylesSelect.js"

export const InputWithoutLogic = ({handleSearch, placeholder,
                        nameInput, errorInput,
                        valor, noLabel, intoPlaceholder}) =>{

    return(
        <Container>
                <Title>{placeholder}</Title>
                <div>
                    <Input name={nameInput} type={noLabel ? "text" : "number"}
                     onChange={(e)=>handleSearch(e)}
                     placeholder={intoPlaceholder || ''}
                     value={valor} 
                     error={errorInput[`${nameInput}`] ? true : false}/>
                    {errorInput && errorInput[`${nameInput}`] && <ErrorSpan>{errorInput[`${nameInput}`]}</ErrorSpan>}
                </div>
        </Container>
    )}
