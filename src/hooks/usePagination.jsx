import { useState, useEffect} from "react"



export const usePagination = (url,number, setNumber, dataComponent) => {

    const [numberPagination, setNumberPagination] = useState([
        { valor: 1,offset: 0, used: true},
        { valor: 2,offset: 8,used: false},
        ]);
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [dataPaginada, setDataPaginada] = useState([]);

    useEffect(()=>{
        if(!dataComponent){
            fetchData('0')
        }
    // eslint-disable-next-line
       }, [])

       useEffect(()=>{
        if(dataComponent){
            if (dataComponent?.length < 8){
            setNumberPagination([{ valor: 1,offset: 0, used: true}])
            }
            setData(dataComponent)
            setDataPaginada(dataComponent.slice(0, 8))
        } 
    // eslint-disable-next-line
       }, [dataComponent])

       useEffect(()=>{
        setDataPaginada(data.slice(page, page + 8))
        }, [page, data])

        useEffect(()=>{
            if(number){
                viewPagination()
    // eslint-disable-next-line
            }}, [number])
    

    const fetchData = (offset) =>{
        if (offset) {
            fetch(`${process.env.REACT_APP_API_URL}${url}?offset=${offset}&limit=8`
            ).then((res) => res.json())
                .then((datos) => {
                    if (datos.length < 8) {
                        setNumberPagination([...numberPagination])
                    }
                    if(offset === '0'){
                        setDataPaginada(datos)
                    }
                    setData(data.concat(datos));

                });
        }
    }
    const viewPagination = () => {
        const numberOffset = number.offset
            if (number.used === false){
                number.used = true
                setNumber(number)
                const newNumber = numberPagination.length + 1;
                const newOffset = numberPagination[numberPagination.length - 1].offset + 8
                setNumberPagination([
                  ...numberPagination,
                  {
                    valor: newNumber,
                    offset: newOffset,
                    used: false
                  },
                ]);
                if (number.valor !== 'primer' && url) {
                    fetchData(numberOffset)
                  }
            }
            setPage(numberOffset)
        }
    return {
        dataPaginada,
        numberPagination,
        setPage
    }
}