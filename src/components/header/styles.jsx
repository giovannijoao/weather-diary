import styled from "styled-components";

export const Header = styled.nav`
    margin: 0 20px;
    grid-area: header;
    display: grid;
    grid-template:
        ". bubbles-container" min-content
        / auto min-content;
`