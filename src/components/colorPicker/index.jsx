import React, { useState, useContext, useRef, useEffect } from 'react';
import { ColorBubble, BubblesContainer, CancelBubble } from './styles';
import { ThemeContext } from "styled-components";
import { ColorContext } from '../../pages/Home/contexts/ColorContext/ColorContext';
export const ColorPickerComponent = () => {
    const ref = useRef();
    const [changing, setChanging] = useState(false);
    const { bgColor, changeColor, commitColor, cancelColor } = useContext(ColorContext);
    const theme = useContext(ThemeContext);
    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                commitColor();
                setChanging(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutSide)
        return () => document.removeEventListener('mousedown', handleClickOutSide)
    }, [ref, commitColor])

    const bubbles = Object.entries(theme.bgColors).filter(([key]) => bgColor === key || changing).map(([key, value]) =>
        <ColorBubble changing={changing} selected={bgColor === key} key={`bubble_color_${key}`} bgColor={value} onClick={key === bgColor ? () => setChanging(true) : () => changeColor(key)} />)
    if (changing) bubbles.push(<CancelBubble key={'bubble_color_cancel'} onClick={() => {
        setChanging(false);
        cancelColor();
    }} />)
    return <BubblesContainer ref={ref}>{bubbles}</BubblesContainer>
}