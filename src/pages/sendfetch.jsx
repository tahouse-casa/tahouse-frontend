/*export const SendFetch = () => {

    const data = {
            citys: ["Jurere","Rio de Janeiro","Brasilia","Sao Pablo","Porto Algegre"]
    }
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MDI1NTg0OH0.w8yMPXjx0zmvSbCefZd9TB8fWthU465aZgyayGHA1OI"

    const request = () =>{
        fetch(`${process.env.REACT_APP_API_URL}/countries/5`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${TOKEN}`
            }
        }).then((res)=>res.json())
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const fetchData = () => {

        fetch(`${process.env.REACT_APP_API_URL}/countries`)
      .then(res => res.json())
      .then(data=>{
          console.log(data)
      })
    }
            
        
    return (
        <div>
            <button onClick={()=>request()}>enviar</button>
            <button onClick={()=>fetchData()}>traer</button>
        </div>

    )
}*/
