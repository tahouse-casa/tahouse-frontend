import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
export const Logo = styled.img`
 width: 60px;
 height: 40px;
 cursor: pointer;
`
export const LogoText = styled.h2`
  text-transform: uppercase;
  font-size: 0.8rem;
  text-align: center;
  font-family: 'Roboto';
  font-weight: bold;
`
export const Linke = styled(Link)`
text-decoration: none;
font-size: 1rem;
color: #000;
font-family: 'Roboto';
font-style: normal;
margin-left: 15px;
`