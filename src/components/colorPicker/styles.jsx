import styled, { css } from "styled-components";
export const BubblesContainer = styled.div`
    grid-area: bubbles-container;
    display: grid;
    grid-auto-flow: column;
    column-gap: 16px;
`
const Bubble = styled.button`
    border-radius: 24px;
    width: 24px;
    height: 24px;
    background: transparent;
    &&:focus {
        outline: none;
    }
`

export const ColorBubble = styled(Bubble)`
    border: 2px solid #FFF;
    background: ${props => props.bgColor || 'transparent'};

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

export const CancelBubble = styled(Bubble)`
    border: 0;
    background: #000;
    mix-blend-mode: overlay;
    position: relative;
    display: flex;
    align-items: center;
    &:before, &:after {
        position: absolute;
        left: 11px;
        content: '';
        height: 12px;
        border-left: 2px solid #fff;
    }

    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`