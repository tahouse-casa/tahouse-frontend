import styled from 'styled-components'
import {  BiRuler as ruler} from "react-icons/bi";

export const Container = styled.div`
 max-width: ${props=>props.visible ? '220' : '340px'};
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 margin: ${props=>props.visible ? '0 15px 0 0' : '0'};
`
export const Img = styled.img`
 width: ${props=>props.visible ? '220px' : '100%'};
 height: 150px;
 margin-bottom: 15px;
 border-radius: 6px;
`

export const ContainerData = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 padding: ${props=>props.visible ? '0 8px' : '0'};
`
export const ContainerOne = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: 2;
 height: fit-content;
 margin: 0 0 7px;
`
export const AlertZona = styled.div`
 grid-column-start: 2;
 width: 60px;
 height: fit-content;
 padding: 3px;
 display: flex;
 justify-content: center;
 border-radius: 20px;
 border: 1px solid rgba(0, 0, 0, 0.70);
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 7px;
 line-height: 10px;
 color: rgba(0, 0, 0, 0.60);
 margin: 0;
`
export const Contact = styled.p`
 grid-column-start: 2;
 width: 80%;
 text-align: center;
 font-size: 7px;
 line-height: 10px;
 color: rgba(0, 0, 0, 0.70);
 margin: 0;
`

export const Text1 = styled.p`
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 600;
 font-size: ${props=>props.Size};
 line-height: 12px;
 text-align: center;
 color: #000;
`
export const ContainerTwo = styled.div`
 width: 100%;
 display:${props=>props.visible ? "flex": "none"};
 justify-content: flex-start;
 flex-direction: ${props=>props.row ? "row": "column"};
 align-items: flex-start;
 margin: ${props=>props.row ? "7px 0": "0"};
 
`
export const Text2 = styled.span`
 color: ${props=> props.disabledColor ? '#000' : 'rgba(0, 0, 0, 0.5)' };
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 600;
 font-size: ${props=>props.Size || '9px'};
 line-height: 12px;
`

export const DimensionsText = styled.span`
 color: rgba(0, 0, 0, 0.5);
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 400;
 font-size: 8px;
 line-height: 8px;
 text-align: center;
 margin: 0;
`
export const DimensionsContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: fit-content;
 height: fit-content;
`

export const Ruler = styled(ruler)`
 transform: rotate(270deg);
 fill: rgba(0, 0, 0, 0.5);
`