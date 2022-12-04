export const SendFetch = () => {

    const request = () =>{
        const data = {
            email: "admintahouse@mail.com",
            password: "root123",
            role: "admin"
        }
        fetch(`${process.env.REACT_APP_API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(data)
        })
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    /*
              fetch(`${process.env.REACT_APP_API_URL}/users`)
            .then(res => res.json())
            .then(data=>{
                console.log(data)
            })
            
        */
    return (
        <button onClick={()=>request()}>enviar</button>
    )
}