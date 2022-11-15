import styled from 'styled-components'

export const Img = styled.img`
  width: 100%;
  height: 300px;

`
export const Logo = styled.img`
  width: 150px;
  background: transparent;
`
export const Bg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0 ,0 ,0 , 0.8);

`
export const P =styled.p`
  background: transparent;
  font-weight: 600;
  font-family: 'Open Sans';
  text-align: center;
`
export const Button = styled.button`
  background-color: #e8c590;
  text-transform: uppercase;
  font-family: 'Open Sans';
  padding: 12px;
  margin-top: 10px;
  border-radius: 10px;
  font-weight: 700;
  color: black;
  cursor: pointer;
`
export const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
  margin-top: 50px;
  max-width: 100%;
`
export const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`