import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: ${props => props.inView ? "block" : "none"};
    justify-content: center;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    padding:10px;
`
export const Title = styled.h1`
    font-size: ${props => props.one ? "30px" : "15px"};
    font-family: 'Open Sans';
    font-weight: 600;
`
export const Text = styled.p`
    font-size: 10px;
    font-family: 'Open Sans';
    font-weight: 400;
`
export const ContainerSection = styled.div`
    width: 100%;
    margin-top: 30px;
`
export const Button = styled.button`
width: 100px;
cursor: pointer;
font-size: 20px;
font-family: 'Open Sans';
font-weight: 400;
margin-top: 50px;
background-color: #7e7b78;
border-radius: 6px;
`
export const DivButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
`