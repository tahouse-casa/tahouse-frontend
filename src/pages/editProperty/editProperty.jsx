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
            const newData = {...data}
            delete newData.id
            delete newData.createdAt
                    fetch(`${process.env.REACT_APP_API_URL}/properties/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': `Bearer ${TOKEN}`
                        },
                        body: JSON.stringify(newData)
                    })
                    .then((res)=>{
                        setErrorFetch(false)
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