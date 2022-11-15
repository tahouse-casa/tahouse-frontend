import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.nav`
 width: 100%;
 min-height: 55px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 12px 0 10px;
 position: relative;
`
export const ContainerRutes = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 @media (max-width: 800px) {
    width: 100%;
    height: 100vh;
    padding: 20px 0;
    z-index: 9;
    visibility: ${props=> props.open ? "visible" : "hidden"};
    position: fixed;
    background-color: #fff;
    transition: 0.5s all ease-in;
    left: ${props=> props.open ? "0" : "-300px"};
    top: 0;
 }
`
export const ContainerBars = styled.div`
    position: ${props=> props.open ? "fixed" : "absolute"};
    display: block;
    top:5px;
    right: 5px;
    cursor: pointer;
    z-index: 10;
    @media (min-width: 800px) {
    display: none;
    position: relative;
    }
`
export const Logo = styled.img`
 width: 60px;
 height: 40px;
 cursor: pointer;
`

export const Bar1y2 = styled.div`
 max-width: 16px;
 width: 16px;
 height: 3px;
 background-color: #000;
 margin: 2px 0;
`
export const Bar3 = styled.div`
 max-width: 16px;
 width: 16px;
 height: 3px;
 margin: 2px 0 0;
 background: linear-gradient(90deg,#F4F4F4 40%, #000 40%);
`
export const Linke = styled(Link)`
text-decoration: none;
font-size: 1rem;
color: #000;
font-family: 'Open Sans';
font-style: normal;
&:hover{
    border-bottom: 2px solid #000;
    transition: .5s;
}
@media (max-width: 800px) {
font-size: 1rem;
margin-bottom: 10px;
}
`
export const DivDropDown = styled.div`
position: relative;
`

export const ButtonDrop = styled.div`
font-size: 1rem;
color: #000;
font-family: 'Open Sans';
font-style: normal;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
`
export const Ul = styled.ul`
list-style: none;
font-size: 1rem;
position: absolute;
padding: 0;
text-shadow: none;
border-radius: 10px;
opacity: ${props => props.visible ? 1 : 0};
display: ${props => props.visible ? "block" : "none"};
`
export const Li = styled.li`
margin: 0;
width: 120px;
display: flex;
justify-content: center;
background: #000;
color: #fff;
cursor: pointer;
`