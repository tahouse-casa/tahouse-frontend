import { useState } from "react";
import {StepsAdmin} from '../../containers/stepsAdmin/stepsAdmin'
export const CreatePropertie = () => {
    const [error, setError] = useState(false)
    const [errorFetch, setErrorFetch] = useState(false)

    const [data, setData] = useState({
        typeOperation:'',
        type:'',
        state: '',
        address: '',
        country: '',
        city: '',
        environments: '',
        meters: '',
        rooms: '',
        bathrooms: '',
        price: '',
        description: '',
        phone: ' ',
        email: ' ',
        urlImage:[
            "1-s7aIBGDKuRDDEDu7OhI8gFHMHtZNzs6",
            "1Q6C2lRN0LEnkSoHsrrID_He1uGe-a30E",
            "1Ho4wjU-n0rGFmHpEZSZvCWST8ugSy7Oz"],
    })

    //const TOKEN2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2OTkzNjc2Nn0.w5dOZTpFs0Vlcj3HUwl06ItTH_ypRZj2bi8moNyEKcQ'
    const TOKEN = ''
    const sendData = () => {
                fetch(`${process.env.REACT_APP_API_URL}/properties`, {
                    method: 'POST',
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
                    console.log(err)
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