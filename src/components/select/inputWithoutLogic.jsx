import { Input, Container, Title, ErrorSpan, ViewIconEye} from "./stylesSelect.js"
export const InputWithoutLogic = ({
    handleSearch, 
    placeholder,
    nameInput, 
    errorInput,
    valor, 
    noLabel,
    password,
    errorMessage,
    setCheckPassword,
    check,
    intoPlaceholder}) =>{

    return(
        <Container>
                <Title>{placeholder}</Title>
                <div style={{position: 'relative'}}>
                    <Input name={nameInput} type={noLabel ? "text" : (password ? "password" : "number")}
                     onChange={(e)=>handleSearch(e)}
                     placeholder={intoPlaceholder || ''}
                     value={valor} 
                     error={errorInput[`${nameInput}`] ? true : false}/>
                    
                   {check && <ViewIconEye style={{fill: check[nameInput] ? '#000' : '#DFDFDF'}}
                                onClick={()=>
                                   setCheckPassword({...check, [nameInput]: !check[nameInput]})
                                }/>}
                    {errorInput && errorInput[`${nameInput}`] && <ErrorSpan>{errorMessage}</ErrorSpan>}
                </div>
        </Container>
    )}
