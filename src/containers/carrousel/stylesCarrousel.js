import styled from 'styled-components'

export const Container = styled.ul`
 width: 100%;
 display: ${props=> props.detail ? "block": "flex"};
 justify-content: flex-start;
 margin-left: ${props=> props.detail ? "0": "10px"};
 overflow-x: ${props=> props.detail ? "none": "scroll"};;
 padding: 0;
 list-style: none;
 position: relative;
 @media (min-width: 1000px) {
   &::-webkit-scrollbar{
     height: 10px;
    }
  &::-webkit-scrollbar-track {
      background-color: black; 
  
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(168, 152, 152);
    border-radius: 20px;   
  }
 }
`
export const Img = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 10px;
`
export const Button = styled.button`
  position: absolute;
  font-size: 3rem;
  cursor: pointer;
  background-color: transparent;
  color: #fbad42;
  padding: 0 10px;
  top: 35%;
  right: ${props => props.right ? "0" : null};
  opacity: 1;
  z-index: 2;
`
export const DivImg = styled.div`
    width: 100%;
    opacity: ${props=> props.divActive === 'active' ? "1" : "0"};
    transition: opacity 0.5s ease-in-out;
`