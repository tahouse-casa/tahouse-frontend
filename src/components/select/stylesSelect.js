import styled from 'styled-components'

export const Container = styled.div`
 width: 100%;
 margin-bottom: 15px;
`
export const Title = styled.p`
 font-family: 'Roboto';
 color: rgba(83, 83, 83, 0.87);
 font-size: 12px;
 font-weight: 400;
 margin-bottom: 4px;
 margin-left: 16px;
`
export const Input = styled.input`
 font-family: 'Roboto';
 font-size: 12px;
 width: 100%;
 padding: 10px 16px ;
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
 color: rgba(83, 83, 83, 0.87);
 border: none;
 padding: 10px 16px;
 &:focus-visible{
    outline: none;
    background: #DFDFDF;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
 }
`
export const Option = styled.option`
 font-family: 'Roboto';
 font-size: 12px;
 width: 100%;
 color: #000;
 border-radius: 20px;
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