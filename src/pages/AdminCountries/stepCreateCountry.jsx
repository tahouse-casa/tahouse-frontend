import { useState, useContext } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { AdminCountriesComponent } from "../../containers/stepsAdmin/adminCountries/adminCountriesComponent";
import { AppContext } from "../../context";
import { ModalComponent } from "../../components/modal/modalComponent";
import { MdCancel, MdCheckCircle } from "react-icons/md";

export const StepCreateCountry = () => {
    const [data, setData] = useState({
        country: '',
        latitud: {value1: '',value2: '',value3: '', value4: ''},
        longitud: {value1: '',value2: '',value3: '', value4: ''},
        citys: ['']
    })
    const [error, setError] = useState(false)
    const [done, setDone] = useState(false)


    const {JWT} = useContext(AppContext)
    const TOKEN = JWT.token

    const handleFetch = (dataFetch) => {
        fetch(`${process.env.REACT_APP_API_URL}/countries`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify(dataFetch)
        }).then(res => res.json())
        .then((res)=>{
            setError(false)
            setDone(true)
        }).catch(err=>{
            console.log(err)
            setError(true)
        })
    }

    return (
        <>
        <AdminCountriesComponent
            data={data}
            setData={setData}
            handleFetch={handleFetch}
        />
        <Navbar/>
        {error && <ModalComponent 
                                title="¡Lo sentimos!"
                                paragraph="Algo no salió como esperábamos. Vuelve a intentarlo en unos segundos."
                                paragraphButton="VOLVER"
                                linke={-1}
                                handleModal={()=>setError(false)}
                                >
                                    <MdCancel size="20px" style={{background: 'transparent'}}/>
                                </ModalComponent>}  
        {done && <ModalComponent 
                                title="¡Listo!"
                                paragraph="El Pais fue publicado con éxito"
                                paragraphButton="CONTINUAR"
                                linke="/administration/countries"
                                handleModal={()=>{
                                    setError(false)
                                    setDone(false)}}
                                >
                                    <MdCheckCircle size="20px" style={{background: 'transparent'}}/>
                                </ModalComponent>}
        </>
    )
}