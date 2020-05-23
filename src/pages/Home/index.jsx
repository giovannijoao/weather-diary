import React, { useState, useEffect } from 'react';
import { Layout } from './components/layout/styles';
import { DateHeaderComponent } from '../../components/date';
import { Mood } from '../../components/mood';
import { HeaderComponent } from '../../components/header';
import { ColorContext } from './contexts/ColorContext/ColorContext';
export const HomePage = () => {
    const [backupColor, setBackupColor] = useState('');
    const [bgColor, setBgColor] = useState('first');
    const commitColor = () => setBackupColor('');
    const cancelColor = () => backupColor && setBgColor(backupColor);
    const changeColor = (color) => {
        setBackupColor(bgColor);
        setBgColor(color);
    }
    return <ColorContext.Provider value={{bgColor, changeColor, commitColor, cancelColor}}>
        <Layout bgColor={bgColor} >
            <HeaderComponent />
            <DateHeaderComponent />
            <Mood />
        </Layout>
    </ColorContext.Provider>
}