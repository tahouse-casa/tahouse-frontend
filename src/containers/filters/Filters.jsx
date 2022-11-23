import { useContext, useState } from 'react'
import {ContainerFilters} from './stylesFilter'
import { InputComponent} from "../../components/select/inputComponent"
import { SelectComponent} from "../../components/select/selectComponent"
import { AppContext } from '../../context'
export const Filters = ({
                        defaultCountry = {country: 'COLOMBIA'},
                        setDefaultCountry,
                        visibleFilters,
                        children}) =>{

    const [errorInput, setErrorIput] = useState({})
    const {countries, handleSearch} = useContext(AppContext)
        
 
    return (
    <ContainerFilters visible={visibleFilters}>
        <SelectComponent placeholder="País" nameInput={"pais"}
                handleSearch={handleSearch}
                countries={countries}
                defaultValue={defaultCountry}
                setDefaultCountry={setDefaultCountry}
                />
        <InputComponent placeholder="Cantidad de ambientes" nameInput={"ambientes"}
                handleSearch={handleSearch}
                errorInput={errorInput}
                setErrorIput={setErrorIput}
                />
        <InputComponent placeholder="Cantidad de baños" nameInput={"baños"}
                handleSearch={handleSearch}
                errorInput={errorInput}
                setErrorIput={setErrorIput}
                />
        <InputComponent placeholder="Cantidad de habitaciones" nameInput={"habitaciones"}
                handleSearch={handleSearch}
                errorInput={errorInput}
                setErrorIput={setErrorIput}
                />
        <InputComponent placeholder="Precio" nameInput={"precio"}
                handleSearch={handleSearch} 
                errorInput={errorInput}
                setErrorIput={setErrorIput}
            />
            
            <InputComponent placeholder="Metros Hasta"  nameInput={"max"}
                handleSearch={handleSearch} 
                errorInput={errorInput}
                setErrorIput={setErrorIput}
                validate="decimal"
            />
            {children}
    </ContainerFilters>
    )
}