import styled from "styled-components";

export const InputMood = styled.textarea`
    grid-area: mood;
    border: 0;
    min-height: 100%;
    width: 100%;
    font-size: 38px;
    color: ${props => props.theme.textColors.first};
    background: transparent;

    &:focus {
        outline: none;
    }

    &::-webkit-input-placeholder {
        mix-blend-mode: overlay;
        color: black;
        font-weight: bold;
    }
`