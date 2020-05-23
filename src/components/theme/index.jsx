import React from 'react';
import { ThemeProvider } from 'styled-components';

const bgColors = {
    first: '#EDE2DC',
    second: '#EDDCDC',
    third: '#DCEDE2',
    fourth: '#DCE3ED',
    fifth: '#EBDCED'
}


const textColors = {
    first: '#000',
    second: '',
    third: '',
    fourth: '#000',
    fifth: ''
}


export const AppTheme = ({ children }) => <ThemeProvider theme={{
    bgColors,
    textColors
}}>{children}</ThemeProvider>