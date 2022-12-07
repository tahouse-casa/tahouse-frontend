import { Select, Container, Title, Option} from "./stylesSelect.js"

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
                         <Option value="" disabled>Seleccionar</Option>}
                         {array.map((item,index)=>{
                             if(arrayWithoutNames){
                                return <Option key={index} value={item} >{item}</Option>
                             } else {
                                 return <Option key={index} value={item[nameInput]} >{item[nameInput]}</Option>
                             }
                         })
                         }
                     </Select>
                </div>         
        </Container>
    )}