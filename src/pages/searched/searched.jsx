import { useContext, useState } from "react";
import { Cart } from "../../components/carts/cart"
import { MapComponent } from "../../components/MapComponent/map.component"
import {Filters} from '../../containers/filters/Filters'
import { Searcher } from "../../components/searcher/searcher"
import { AppContext } from "../../context";
import { Navbar } from "../../components/navbar/navbar"

//css
import {ContainerSearched, ContainerListOfEstate, ContainerButtons,
    ContainerButton, TextButton, Iconfilter, IconMap,Title, ContainerSearcher} from './stylesSearched'

export const Searched = () => {

    const [visibleFilters, setVisibleFilters] = useState(false)
    const [map, setMap] = useState(false)

    const { estates, defaultCountry, setDefaultCountry} = useContext(AppContext)
    
    return (
        <ContainerSearched>
                    <Navbar />
                    <ContainerSearcher>
                        <Title aling={'center'}>Encuentra el hogar de tus sueños</Title>
                        <Searcher />
                    </ContainerSearcher>
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
{}
                            <Filters
                                defaultValue={defaultCountry}
                                setDefaultCountry={setDefaultCountry}
                                visibleFilters={visibleFilters}
                            >
                                
                            <Searcher/>
                            </Filters>
{}
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
    )
}