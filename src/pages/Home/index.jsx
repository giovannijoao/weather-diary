import React, { useState, useEffect } from 'react';
import { Layout } from './components/layout/styles';
import { DateHeaderComponent } from '../../components/date';
import { Mood } from '../../components/mood';
import { HeaderComponent } from '../../components/header';
import { ColorContext } from './contexts/ColorContext/ColorContext';
export const HomePage = () => {
    const [bgColor, setBgColor] = useState('first');
    return <ColorContext.Provider value={{bgColor, setBgColor}}>
        <Layout bgColor={bgColor} >
            <HeaderComponent />
            <DateHeaderComponent />
            <Mood />
        </Layout>
    </ColorContext.Provider>
}