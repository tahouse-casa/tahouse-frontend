import {useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { Container, SearchButton, Input } from "./stylesSearcher"
import {BsSearch} from 'react-icons/bs'
import { AppContext } from '../../context'
export const Searcher = () => {

    const {handleSearch, setEstates, valueInput, setLoading, viewDefaultValue, data, setMap, setVisibleFilters, setValueInput} = useContext(AppContext)
    const navigate = useNavigate();
    const searchData = () => {
        setLoading(true)
        const {pais, baños, habitaciones,ambientes, precio, max} = valueInput
        let newList;
        if(pais.length > 0) {
             newList = data.filter((estate)=> {
                const selectOnlyCountry = estate.country
                return selectOnlyCountry.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toUpperCase()
                .includes(pais.normalize("NFD").replace(/[\u0300-\u036f]/g, ''))
        })
            setEstates(newList)
        }
        if(ambientes){
            newList = newList.filter((estate)=> estate.ambientes >= ambientes)
            setEstates(newList)
        }
        if(baños){
            newList = newList.filter((estate)=> estate.bathrooms >= baños)
            setEstates(newList)
        }
        if(habitaciones){
            newList = newList.filter((estate)=> estate.rooms >= habitaciones)
            setEstates(newList)
        }
        if(precio){
            newList = newList.filter((estate)=> estate.price <= precio)
            setEstates(newList)
        }
        if(max){
            newList = newList.filter((estate)=> estate.meters <= max)
            setEstates(newList)
        }
        setMap(false)
        setVisibleFilters(false)

        viewDefaultValue()
        if(pais === ""){
            navigate("/");
        } else {
            navigate(`/search`);
        }
        setTimeout(()=>{
        setVisibleFilters(false)
            setLoading(false)
        }, [1000])
    }
    return (
        <Container>
            <BsSearch size={'15px'} style={{ margin: '0 12px', backgroundColor: '#fff'}}/>
            <Input type="text" placeholder="En que país deseas vivir"
             name="pais" value={valueInput.pais} onChange={(e)=>handleSearch(e)}/>
            <SearchButton onClick={()=>searchData()}>Buscar</SearchButton>
        </Container>
    )
} 