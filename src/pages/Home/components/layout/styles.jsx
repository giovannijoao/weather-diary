import styled from "styled-components";

export const Layout = styled.div`
    background-color: ${props => props.theme.bgColors[props.bgColor] || props.theme.bgColors.first};
    min-height: 100%;
    width: 100%;
    display: grid;
    padding-top: 2vh;
    row-gap: 8px;
    grid-template:
        "header header header" min-content
        ". date-header ." min-content
        ". mood ." auto
        / 20px auto 20px ;
`