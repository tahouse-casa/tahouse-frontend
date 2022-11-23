import { createContext, useState, useEffect } from "react";

const AppContext = createContext()
export const AppProvider = ({children}) => {
    const [data, setData] = useState([])
    const [estates, setEstates] = useState([])
    const [valueInput, setValueInput] = useState({
        pais: '',
        ambientes: '',
        baños: '',
        habitaciones: '',
        max: '',
        precio: ''
    })
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [defaultCountry, setDefaultCountry] = useState({country: 'Colombia'})
    const [map, setMap] = useState(false)
    const [visibleFilters, setVisibleFilters] = useState(false)

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/properties`)
        .then(res => res.json())
        .then(data=>{
            setEstates(data)
            setData(data)
        })
    }, [])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/countries`)
        .then(res => res.json())
        .then(data=>{
            setCountries(data)
        })
    }, [])

    const handleSearch = (e) =>{
        const name = e.target.name
        const value = e.target.value.toUpperCase()
        setValueInput({...valueInput, [name]: value})
    }

    const viewDefaultValue = () => {
        const result = countries.find((item)=>item.country.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toUpperCase()
        .includes(valueInput.pais.normalize("NFD").replace(/[\u0300-\u036f]/g, '')))
        if (result) {
            setDefaultCountry(result)
        }
    }

return (
    <AppContext.Provider value={{ 
        handleSearch, 
        countries, 
        estates, 
        setEstates,
        valueInput,
        setValueInput,
        loading,
        setLoading,
        defaultCountry,
        setDefaultCountry,
        viewDefaultValue,
        data,
        map,
        setMap,
        visibleFilters,
        setVisibleFilters
        }}>
    {children}
    </AppContext.Provider>
)
}

export {AppContext}