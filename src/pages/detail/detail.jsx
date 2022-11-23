import { useEffect, useState } from "react"
import { Navbar } from "../../components/navbar/navbar"
import { Footer } from "../../containers/footer/footer"
import { MainContainer, ButtonZone } from "./stylesDetail"
import { useParams } from "react-router-dom"
import { DetailCard } from "../../components/detailCard/detailCard"

export const Detail = () => {

    const [card, setCard] = useState({})
    const params = useParams()
    const {id} = params
    const idCard = Number(id)

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/properties/${idCard}`)
        .then(res => res.json())
        .then(data=>setCard(data))
    }, [idCard])


return (
    <>
        <Navbar/>
        <MainContainer>
            <ButtonZone>Zona Destacada</ButtonZone>
            <DetailCard card={card}/>
        </MainContainer>
        <Footer/>
    </>
)
}