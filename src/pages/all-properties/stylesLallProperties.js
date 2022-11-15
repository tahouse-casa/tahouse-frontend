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