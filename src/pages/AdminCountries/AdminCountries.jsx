import { useContext, useState, useEffect } from "react";
import { Return } from "../../components/return/return"
import { useNavigate, Link } from "react-router-dom";
import { NavigateAdmin } from "../../components/navigateAdmin/navigateAdmin";
import { AdminItem } from "../../components/adminItem/adminItem";
import {AppContext} from '../../context'
import { Navbar } from "../../components/navbar/navbar";
import { MdCancel, MdCheckCircle} from "react-icons/md";
import { Container, ButtonAdd } from "./stylesAdminCountries"
import { ModalComponent } from "../../components/modal/modalComponent";
export const AdminCountries = () => {
    const [countries, setCountries] = useState([])
    const [viewModals, setViewModals] = useState({error: false, done: false})
    const {JWT} = useContext(AppContext)

    const navigate = useNavigate()

    useEffect(()=>{
        fetchCountries()
    }, [])


    const fetchCountries = () => {
        fetch(`${process.env.REACT_APP_API_URL}/countries`)
        .then(res => res.json())
        .then(data=>{
            setCountries(data)
            setViewModals({error: false, done: true})
        }).catch(()=>{
            setViewModals({error: true, done: false})
        })
    }

    const TOKEN = JWT.TOKEN

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/countries/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplication/json',
                'authorization': `Bearer ${TOKEN}`
            }
        }).then(res=> res.json())
        .then((res)=>{
            setViewModals({error: false, done: false, deleted: true})
            fetchCountries()
            
        }).catch((err)=>{
            setViewModals({error: true, done: true})
        })
    }

    return (
        <div style={{paddingBottom: '50px'}}>
            {viewModals.done && (<>
                <Return title="Países" viewTitle linke={-1}/>
                <NavigateAdmin active="paises"/>
                <Container>
                    {countries.map((item)=>(
                        <AdminItem
                            key={item.id}
                            data={item}
                            handleDelete={handleDelete}
                            handleEdit={()=>navigate(`/administration/countries/edit/${item.id}`)}
                        />
                    ))}
                </Container>
            </>)}
            {viewModals.error && <ModalComponent 
                                title="¡Lo sentimos!"
                                paragraph="Algo no salió como esperábamos. Vuelve a intentarlo en unos segundos."
                                paragraphButton="VOLVER"
                                handleModal={()=>setViewModals({error: false, done: true})}
                                >
                                <MdCancel size="20px" style={{background: 'transparent'}}/>
                            </ModalComponent>}
            {viewModals.deleted && <ModalComponent 
                                title="¡Listo!"
                                paragraph="El Pais fue eliminado de forma correcta."
                                paragraphButton="CONTINUAR"
                                linke="/administration/countries"
                                handleModal={()=>setViewModals({error: false, done: true, deleted: false})}
                                >
                                    <MdCheckCircle size="20px" style={{background: 'transparent'}}/>
                                </ModalComponent>}
                            
            <Link to="/administration/countries/create" style={{color: '#000'}}>
                <ButtonAdd/>
            </Link>
            <Navbar/>
        </div>
    )
}