import styled from "styled-components";

export const Layout = styled.div`
    background-color: #FFF;
    min-height: 100%;
    width: 100%;
    display: grid;
    padding-top: 2vh;
    row-gap: 40px;
    grid-template:
        ". closeButton ." auto
        ". calendar ." auto
        / 5vw auto 5vw;
`