import { useState, useEffect } from "react"
import {StepsAdmin} from '../../containers/stepsAdmin/stepsAdmin'
import { useParams } from "react-router-dom"

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

        const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2OTkzNjc2Nn0.w5dOZTpFs0Vlcj3HUwl06ItTH_ypRZj2bi8moNyEKcQ'

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
        </>
    )
}