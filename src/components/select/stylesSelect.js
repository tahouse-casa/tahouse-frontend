import styled from 'styled-components'
import { MdVisibility as vis } from "react-icons/md";

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
 border-color: ${props=>props.error ? "red" : '#535353' };
 &:focus-visible{
     outline: none;
 }
`
export const ErrorSpan = styled.span`
 font-size: 12px;
 font-family: 'Roboto';
 color: red;
 text-align: center;
 margin-left: 16px;
`
export const Select = styled.select`
 font-family: 'Roboto';
 font-size: 12px;
 width: 100%;
 color: rgba(83, 83, 83, 0.87);
 border: ${props=>props.error ? "solid 1px" : 'none' };
 border-color: ${props=>props.error ? "red" : 'none' };
 padding: 10px 16px;
 border-radius: 20px;

 &:focus-visible{
    outline: none;
    background: #DFDFDF;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.25);
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
 border-color: ${props=>props.error ? "red" : '#535353' };
 min-height: 90px;
 &:focus-visible{
     outline: none;
 }
` 
export const InputLat = styled.input`
 font-family: 'Roboto';
 font-size: 16px;
 width: 56px;
 padding: 6px 0;
 text-align: center;
 background: #FFFFFF;
 color: rgba(83, 83, 83, 0.87);
 border: 1px solid ${props=> props.error ? 'red' : "#535353"};
 border-radius: 5px; 
 &:focus-visible{
     outline: none;
 }
` 
export const ContainerInputLat = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
`
export const ViewIconEye = styled(vis)`
    background: transparent;
    width: 22px;
    height: 15px;
    position: absolute;
    top: 10px;
    right: 10px;
`