import styled from "styled-components";
export const Header = styled.nav`
    margin: 0 20px;
    grid-area: header;
    display: grid;
    grid-template:
        ". bubbles-container" min-content
        / auto min-content;
`

export const CalendarIcon = styled.button`
    border: 0;
    width: 24px;
    height: 24px;
    background-color: transparent;

    &:focus {
        outline: none;
    }
`