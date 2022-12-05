import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

`
export const ContainerListOfProperties = styled.div`
 max-width: 100%;
 display: ${props => props.changeDisplay > 1? "grid" : "flex"};
 justify-content: center;
 grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
 gap: 30px 10px;
 margin:0 10px;
`
export const Title = styled.h2`
width: 100%;
margin: 20px 10px;
font-weight: 600;
font-size: 20px;
line-height: 18px;
font-family: 'Open Sans';
color: #000;
@media (min-width: 1000px) {
    text-align: center;
}
`
export const ContainerSearcher = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 30px;
 margin-bottom: 0;
 flex-wrap: wrap;
`
export const Pagination = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
`
export const ButtonPag = styled.div`
    background-color: transparent;
    color: black;
    padding: 4px 6px;
    font-size: 14px;
    :hover {
        cursor: pointer;
        background-color: lightblue;
        color: black;
    }

`
