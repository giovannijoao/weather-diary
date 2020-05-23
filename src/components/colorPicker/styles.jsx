import styled, { css } from "styled-components";
export const BubblesContainer = styled.div`
    grid-area: bubbles-container;
    display: grid;
    grid-auto-flow: column;
    column-gap: 16px;
`

export const ColorBubble = styled.button`
    border-radius: 24px;
    width: 24px;
    height: 24px;
    border: 2px solid #FFF;
    background: ${props => props.bgColor || 'transparent'};
    &&:focus {
        outline: none;
    }

    ${props => props.selected && props.changing && css`
        &:before {
                content: '';
                display: inline-block;
                transform: rotate(45deg);
                height: 10px;
                width: 4px;
                border-bottom: 3px solid #000;
                border-right: 3px solid #000;
        }
    `}
`