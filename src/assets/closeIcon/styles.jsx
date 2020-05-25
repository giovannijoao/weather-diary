import styled from "styled-components";

export const CloseIcon = styled.button`
    grid-area: closeButton;
    width: ${props => props.size || '24px'};
    height: ${props => props.size || '24px'};
    border: 0;
    background: transparent;
    position: relative;
    display: flex;
    align-items: center;
    &:before, &:after {
        content: '';
        position: absolute;
        width: 100%;
        top: 50%;
        left: 0;
        height: 2px;
        margin-top: -1px;
        background: #000;
    }

    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`