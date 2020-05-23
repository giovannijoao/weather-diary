import styled from "styled-components";

export const Layout = styled.div`
    background-color: ${props => props.theme.bgColors.first};
    min-height: 100%;
    width: 100%;
    display: grid;
    padding-top: 68px;
    row-gap: 8px;
    grid-template:
        ". date-header ." min-content
        ". mood ." auto
        / 20px auto 20px ;
`