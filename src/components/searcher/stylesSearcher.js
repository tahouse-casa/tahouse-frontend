import styled from 'styled-components'

export const Container = styled.div`
 width: ${props=> props.viewAll ? 'fit-content' : '50px'};
 background-color: transparent;
 border-radius: 10px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 min-width: ${props=> (props.onlyButton || !props.viewAll) === true ? '50px' : '260px'};
 min-height: 30px;
 padding: 0;
`
export const Input = styled.input`
 font-family: 'Open Sans';
 margin: 0 12px 0 0;
 font-size: 12px;
 border: none;
 padding: 0;
 height: 30px;
 outline: none;
 background: #fff;
 display: ${props => props.onlyButton ? 'none' : 'inline-block'};
`
export const SearchButton = styled.button`
 background-color: #000;
 padding: 10px;
 border-radius: 20%;
 font-size: 8px;
 color: #fff;
 cursor: pointer;
`