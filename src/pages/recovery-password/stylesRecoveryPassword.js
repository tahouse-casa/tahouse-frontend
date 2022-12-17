import styled from 'styled-components'

export const Title = styled.h2`
    font-size: ${props=> props.second ? '14px' : '20px'};
    font-family: 'Roboto';
    text-align: center;
    font-weight: 500;
    margin-top: ${props=> props.second ? '10px' : '25px'};
    margin-bottom: ${props=> props.second ? '35px' : '0'};
    width: 100%;
    color: ${props=> props.second ? 'rgba(83, 83, 83, 0.87)' : '#000'};
`
export const SendButton = styled.button`
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
    background: #DFDFDF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin-top: 40px;
    margin-bottom: 35px;
    padding: 10px 0;
`
export const Text = styled.p`
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
&:hover{
    color: ${props=> props.hover ? 'blue' : 'rgba(0, 0, 0, 0.87)'}
}
`