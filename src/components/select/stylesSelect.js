import styled from 'styled-components'

export const Container = styled.div`
 width: 80%;
 margin-bottom: 10px;
`
export const Title = styled.p`
 font-family: 'Roboto';
 font-size: 12px;
 font-weight: 400;
 margin-bottom: 4px;
 margin-left: 5px;

`
export const Input = styled.input`
 font-family: 'Roboto';
 font-size: 12px;
 width: 100%;
 padding: 5px 10px ;
 border-radius: 20px;
 border-width: 1px;
 &:focus-visible{
     outline: none;
 }
`
export const ErrorSpan = styled.span`
 font-size: 12px;
 font-family: 'Roboto';
 color: red;
`
export const Select = styled.select`
 font-family: 'Roboto';
 font-size: 12px;
 width: 100%;
 border: none;
 &:focus-visible{
    outline: none;
    background: #DFDFDF;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
 }
`
export const BigInput = styled.textarea`
 font-family: 'Roboto';
 font-size: 14px;
 width: 100%;
 padding: 8px;
 border-radius: 20px;
 min-height: 90px;
 &:focus-visible{
     outline: none;
 }
` 