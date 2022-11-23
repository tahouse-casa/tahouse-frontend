import { useContext, useState } from 'react'
import {ContainerFilters} from './stylesFilter'
import { InputComponent} from "../../components/select/inputComponent"
import { SelectComponent} from "../../components/select/selectComponent"
import { AppContext } from '../../context'
export const Filters = ({
                        defaultValue,
                        setDefaultCountry,
                        children}) =>{

    const [errorInput, setErrorIput] = useState({})
    const {countries, handleSearch, visibleFilters, valueInput} = useContext(AppContext)
        
 
    return (
    <ContainerFilters visible={visibleFilters}>
        <SelectComponent placeholder="País" nameInput={"pais"}
                handleSearch={handleSearch}
                countries={countries}
                defaultValue={defaultValue}
                setDefaultCountry={setDefaultCountry}
                />
        <InputComponent placeholder="Cantidad de ambientes" nameInput={"ambientes"}
                handleSearch={handleSearch}
                errorInput={errorInput}
                setErrorIput={setErrorIput}
                valor={valueInput.ambientes}
                />
        <InputComponent placeholder="Cantidad de baños" nameInput={"baños"}
                handleSearch={handleSearch}
                errorInput={errorInput}
                setErrorIput={setErrorIput}
                valor={valueInput.baños}
                />
        <InputComponent placeholder="Cantidad de habitaciones" nameInput={"habitaciones"}
                handleSearch={handleSearch}
                errorInput={errorInput}
                setErrorIput={setErrorIput}
                valor={valueInput.habitaciones}
                />
        <InputComponent placeholder="Precio" nameInput={"precio"}
                handleSearch={handleSearch} 
                errorInput={errorInput}
                setErrorIput={setErrorIput}
                valor={valueInput.precio}
            />
            <InputComponent placeholder="Mts2"  nameInput={"max"}
                handleSearch={handleSearch} 
                errorInput={errorInput}
                setErrorIput={setErrorIput}
                valor={valueInput.max}
                //validate="decimal"
                />
                {children}
    </ContainerFilters>
    )
}