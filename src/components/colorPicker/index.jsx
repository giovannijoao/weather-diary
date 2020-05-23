import React, { useState, useContext } from 'react';
import { ColorBubble, BubblesContainer } from './styles';
import { ThemeContext } from "styled-components";
import { ColorContext } from '../../pages/Home/contexts/ColorContext/ColorContext';
export const ColorPickerComponent = () => {
    const { bgColor, setBgColor } = useContext(ColorContext);
    const theme = useContext(ThemeContext);
    const bubbles = Object.entries(theme.bgColors).filter(([key]) => bgColor ? bgColor === key : true).map(([key, value]) =>
        <ColorBubble key={`bubble_color_${key}`} bgColor={value} onClick={key === bgColor ? () => setBgColor(null) : () => setBgColor(key)} />)
    return <BubblesContainer>{bubbles}</BubblesContainer>
}