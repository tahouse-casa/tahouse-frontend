import { Select, Container, Title} from "./stylesSelect.js"

export const SelectComponent = ({handleSearch, placeholder,
                                nameInput,defaultValue = '', array, arrayWithoutNames}) =>{

    const verifyInputs = (e) => {
        handleSearch(e)
    }

    return(
        <Container>
            <Title>{placeholder}</Title>
                <div>
                    <Select name={nameInput} defaultValue={defaultValue}
                     onChange={(e)=>verifyInputs(e)}
                     >
                         {defaultValue === '' && 
                         <option value="" disabled>Seleccionar</option>}
                         {array.map((item,index)=>{
                             if(arrayWithoutNames){
                                return <option key={index} value={item} >{item}</option>
                             } else {
                                 return <option key={index} value={item[nameInput]} >{item[nameInput]}</option>
                             }
                         })
                         }
                     </Select>
                </div>         
        </Container>
    )}