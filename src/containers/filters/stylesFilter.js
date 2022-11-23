import styled from 'styled-components'

export const ContainerFilters = styled.div`
 width: 100%;
 min-height: 200px;
 display: ${props => props.visible ? "flex" : "none"};
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 margin-top: 10px;
`