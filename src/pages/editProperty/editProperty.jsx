import { useState, useEffect, useContext } from "react"
import { StepsAdmin } from "../../containers/stepsAdmin/stepsAdminProperties/stepsAdminProperties"
import { useParams } from "react-router-dom"
import { AppContext } from "../../context"
import { Navbar } from "../../components/navbar/navbar"

export const EditProperty = () => {
    const [error, setError] = useState(false)
    const [data, setData] = useState({})
    const [errorFetch, setErrorFetch] = useState(false)

    const {id} = useParams()
    
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/properties/${id}`)
        .then(res => res.json())
        .then(data=>{
            setData(data)
        }).catch((err)=>{
            setData({})
        })
    }, [id])

    const {JWT} = useContext(AppContext)

    const TOKEN = JWT.token
        const sendData = () => {
                    fetch(`${process.env.REACT_APP_API_URL}/properties/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'aplication/json',
                            'authorization': `Bearer ${TOKEN}`
                        },
                        body: JSON.stringify(data)
                    })
                    .then((res)=>{
                        setErrorFetch(false)
                        console.log(res)
                    }).catch((err)=>{
                        setErrorFetch(true) 
                    })
                }

    return (
        <>
            <StepsAdmin
                data={data}
                setData={setData}
                error={error}
                setError={setError}
                sendData={sendData}
                errorFetch={errorFetch}
            />
            <Navbar/>
        </>
    )
}