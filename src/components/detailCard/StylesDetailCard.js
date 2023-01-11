import styled from "styled-components";

export const Container = styled.div`
    padding: 0 22px;
    width: 100%;
`
export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const BoldPrice = styled.p`
    font-size: 15px;
    margin-top: 12px;
    font-family: 'Roboto';
    font-weight: bold;
    text-transform: uppercase;
`
export const ContactText = styled.p`
    display: flex;
    margin-top: 12px;
    justify-content: center;
    align-items: flex-end;
    font-size: 12px;
    font-family: 'Roboto';
    gap: 5px;
    margin-right: 10px;
`
export const OfferPrice = styled.p`
    color: #000;
    opacity: 50%;
    margin-bottom: 16px;
    font-size: 13px;
    font-family: 'Roboto';
`
export const Adress = styled.p`
    font-size: ${props=> props.title ? '14px' : '13px'};
    opacity: ${props=> props.title ? '100%' : '50%'};
    color: rgba(0, 0, 0, 0.87);
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    margin-bottom:  ${props=> props.title ? '0%' : '10px'};
    font-family: 'Roboto';

`
export const DescriptionContainer = styled.div`
    opacity: 50%;
    display: flex;
    margin-bottom: 15px;
`
export const ButtonBuy = styled.button`
    width: 100%;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 12px;
    background: #F3EDED;
    font-family: 'Roboto';
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.14)) drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.12)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
    text-transform: uppercase;
    font-weight: 500;
font-size: 14px;
line-height: 16px;
color: rgba(83, 83, 83, 0.87);
letter-spacing: 1.25px;
`
export const Description = styled.p`
    width: 100%;
    text-align: justify;
    font-size: 12px;
    opacity: 50%;
    margin-bottom: 20px;
    font-family: 'Roboto';
`
export const IconsTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 8px;
`
export const IconsText = styled.p`
    font-size: 8px;
    font-family: 'Roboto';
`