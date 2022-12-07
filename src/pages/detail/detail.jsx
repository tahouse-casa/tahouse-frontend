import { useEffect, useState } from "react"
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../containers/footer/footer"
import { useParams } from "react-router-dom"
import { DetailCard } from "../../components/detailCard/detailCard"
import { Return } from "../../components/return/return";
import { MdShare, MdOutlineFavoriteBorder } from "react-icons/md";
import { MainContainer, ContainerIcons} from "./stylesDetail"

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
    <Return linke={-1}>
        <ContainerIcons>
            <MdOutlineFavoriteBorder  size="20px" style={{background: 'transparent'}}/>
            <MdShare  size="20px" style={{background: 'transparent'}}/>
        </ContainerIcons>
    </Return>
        <MainContainer>
            <DetailCard card={card}/>
        </MainContainer>
        <Footer/>
        <Navbar/>
    </>
)
}