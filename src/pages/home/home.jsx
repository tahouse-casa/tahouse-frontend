import { useEffect, useState} from "react"
import { Navbar } from "../../components/navbar/navbar"
import { Searcher } from "../../components/searcher/searcher"
import { Carrousel } from "../../containers/carrousel/carrousel"
import { Cart } from "../../components/carts/cart"
import { InputComponent} from "../../components/select/inputComponent"
import { SelectComponent} from "../../components/select/selectComponent"
import { ShoppingGuide } from "../../containers/shoppingGuide/shoppingGuide"
import { Footer } from "../../containers/footer/footer"
import { Promotion } from "../../components/promotion/Promotion"
import { MapComponent } from "../../components/MapComponent/map.component"
//css
import { Container, Title, Containerfeatured,
         ContainerListOfEstate, ContainerSearched, ContainerButtons,
         ContainerButton, TextButton, Iconfilter, IconMap,
         ContainerFilters, ContainerSearcher } from "./stylesHome"

export const Home = () => {
    const [data, setData] = useState([])
    const [estates, setEstates] = useState([])
    const [valueInput, setValueInput] = useState({pais: ''})
    const [searched, setSearched] = useState(false)
    const [errorInput, setErrorIput] = useState({})
    const [visibleFilters, setVisibleFilters] = useState(false)
    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState([])
    const [map, setMap] = useState(false)
    const [defaultCountry, setDefaultCountry] = useState({})

    useEffect(()=>{
        fetch("http://localhost:3001/api/v1/properties")
        .then(res => res.json())
        .then(data=>{
            setData(data)
        })
    }, [])

    useEffect(()=>{
        fetch("http://localhost:3001/api/v1/countries")
        .then(res => res.json())
        .then(data=>{
            setCountries(data)
        })
    }, [])

    const viewDefaultValue = () => {
        const result = countries.find((item)=>item.country.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toUpperCase().includes(valueInput.pais.normalize("NFD").replace(/[\u0300-\u036f]/g, '')))
        setDefaultCountry(result)
    }

    const handleSearch = (e) =>{
        const name = e.target.name
        const value = e.target.value.toUpperCase()
        setValueInput({...valueInput, [name]: value})
    }
    const featuredProperties = data?.slice(0,5)
    return (
        <Container>
            <Navbar setSearched={setSearched} setValueInput={setValueInput} valueInput={valueInput}/>
            <ContainerSearcher marginBot={searched}>
                <Title aling={'center'}>Encuentra el hogar de tus sueños</Title>
                <Searcher handleSearch={handleSearch} setEstates={setEstates}
                            estates={data} valueInput={valueInput} setSearched={setSearched}
                            setLoading={setLoading} viewDefaultValue={viewDefaultValue}
                            setMap={setMap}searched
                            />
            </ContainerSearcher>
            {!searched ? (
                <Containerfeatured>
                    <Title alingLeft>Inmuebles destacados</Title>
                    <Carrousel data={featuredProperties}/>
            </Containerfeatured>
            ): (
                <ContainerSearched>
                    <ContainerButtons>
                        <ContainerButton column={1} onClick={()=>setVisibleFilters(prevState=> !prevState)}>
                            <TextButton><Iconfilter/>Filtros</TextButton>
                        </ContainerButton>
                        <ContainerButton  column={2}>
                            <ContainerButton onClick={()=>setMap(current => !current)}>
                            <TextButton ><IconMap/>Mapa</TextButton>
                            </ContainerButton>
                        </ContainerButton>
                    </ContainerButtons>
                    {map && <MapComponent defaultCountry={defaultCountry} 
                    />}
                        {!loading &&
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
                        <InputComponent placeholder="metros" 
                                      handleSearch={handleSearch} 
                                      errorInput={errorInput}
                                      setErrorIput={setErrorIput}
                                      minmax
                                      validate="decimal"
                                      />
                    </ContainerFilters>
}
                    {estates.length > 0 && (
                    <Title alingLeft marginTop>
                        {estates?.length} Departamentos en alquiler en {estates[0]?.country.split(",", 1)}
                     </Title>
                    )}
                    <ContainerListOfEstate changeDisplay={estates.length}>
                        {estates.length > 0 ? (estates.map((element, index)=>(
                                <Cart key={index}
                                     id={element.id}
                                     img={element.urlImage}
                                     price={element.price}
                                     time={element.createdAt}
                                     address={element.address}
                                     country={element.country}
                                     city={element.city}
                                     featured={false}/>
                        ))) :
                                (<div>not found</div>)
                        } 
                    </ContainerListOfEstate>
            </ContainerSearched>
            )}
            {!searched && <Promotion/>}
            {!searched && <ShoppingGuide/>}
            <Footer/>
        </Container>
    )
} 