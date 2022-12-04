import { useContext } from "react"
import { SelectComponent } from "../../../components/select/selectComponent"
import { InputComponent } from "../../../components/select/inputComponent"
import { BigInputComponent } from "../../../components/select/bigInputComponent"
import {AppContext} from '../../../context'
import { ContainerStep, ErrorSpan} from "../stylesStepsAdmin"

export const StepTwo = ({handleSearch, data, setErrorInput, errorInput}) => {


    const {countries} = useContext(AppContext)
     const findDefaultCountry = countries.find((item)=>item.country === data.country)
     const defaultCountry = findDefaultCountry || {citys:[]}

    return (
        <ContainerStep>
            <SelectComponent 
                handleSearch={handleSearch}
                placeholder="Tipo de Operación"
                nameInput="typeOperation"
                array={[{typeOperation:'Alquiler'},{typeOperation:'Venta'}, {typeOperation:'Alquiler Temporario'}]}
                defaultValue={data.typeOperation}
            />
            <SelectComponent 
                handleSearch={handleSearch}
                placeholder="Tipo de Inmueble"
                nameInput="type"
                array={[{type:'Casa'},{type:'Departamento'}, {type:'Hotel'}, {type:'Terreno'}, {type:'Monoambiente'}]}
                defaultValue={data.type}
                />
            <SelectComponent 
                handleSearch={handleSearch}
                placeholder="Estado"
                nameInput="state"
                array={[{state:'Libre'},{state:'Reservado'}, {state:'Alquilado'}, {state:'Vendido'}]}
                defaultValue={data.state}
                />
            <SelectComponent 
                handleSearch={handleSearch}
                placeholder="País"
                nameInput="country"
                array={countries}
                defaultValue={data.country}
            />
            <SelectComponent 
                handleSearch={handleSearch}
                placeholder="Ciudad"
                nameInput="city"
                array={defaultCountry.citys}
                defaultValue={data.city}
                arrayWithoutNames
            />
            
            <InputComponent
                handleSearch={handleSearch}
                placeholder="Dirección"
                nameInput="address"
                errorInput={errorInput}
                setErrorIput={setErrorInput}
                valor={data.address}
                noLabel
                intoPlaceholder="Ej: Calle 1234"
            />
            <InputComponent
                handleSearch={handleSearch}
                placeholder="Ambientes"
                nameInput="environments"
                errorInput={errorInput}
                setErrorIput={setErrorInput}
                valor={data.environments}
                intoPlaceholder="Ej: 3"
            />
            <InputComponent
                handleSearch={handleSearch}
                placeholder="Mts2"
                nameInput="meters"
                errorInput={errorInput}
                setErrorIput={setErrorInput}
                valor={data.meters}
                intoPlaceholder="Ej: 48"
            />
            {errorInput['meters'] === true && <ErrorSpan>Error: El número de metros debe de ser igual o mayor a dos dígitos</ErrorSpan>}
            <InputComponent
                handleSearch={handleSearch}
                placeholder="Habitaciones"
                nameInput="rooms"
                errorInput={errorInput}
                setErrorIput={setErrorInput}
                valor={data.rooms}
                intoPlaceholder="Ej: 2"
            />
            
            <InputComponent
                handleSearch={handleSearch}
                placeholder="Baños"
                nameInput="bathrooms"
                errorInput={errorInput}
                setErrorIput={setErrorInput}
                valor={data.bathrooms}
                intoPlaceholder="Ej: 2"
            />
            <InputComponent
                handleSearch={handleSearch}
                placeholder="Precio"
                nameInput="price"
                errorInput={errorInput}
                setErrorIput={setErrorInput}
                valor={data.price}
                intoPlaceholder="Ej: 480000"
            />
            {errorInput['price'] === true && <ErrorSpan>Error: El precio debe de ser igual o mayor a dos dígitos</ErrorSpan>}
            <BigInputComponent
                handleSearch={handleSearch}
                placeholder="Descripción"
                nameInput="description"
                errorInput={errorInput}
                setErrorInput={setErrorInput}
                valor={data.description}
                intoPlaceholder="Ej: La casa tiene 4 ventanas..."
            />
            {errorInput['description'] === true && <ErrorSpan>Error: La descripción debe de ser igual o mayor a 10 dígitos</ErrorSpan>}

        </ContainerStep>
    )
}