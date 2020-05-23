import React, { useState, useContext } from 'react';
import { ColorBubble, BubblesContainer } from './styles';
import { ThemeContext } from "styled-components";
export const ColorPickerComponent = () => {
    const [selected, setSelected] = useState('first');
    const theme = useContext(ThemeContext);
    const bubbles = Object.entries(theme.bgColors).filter(([key]) => selected ? selected === key : true).map(([key, value]) =>
        <ColorBubble key={`bubble_color_${key}`} bgColor={value} onClick={key === selected ? () => setSelected(null) : () => setSelected(key)} />)
        console.log(bubbles);
    return <BubblesContainer>{bubbles}</BubblesContainer>
}