import React, { useState } from 'react';
import { ColorContext } from './ColorContext';
export const ColorContextWrapper = ({ children }) => {
    const [backupColor, setBackupColor] = useState('');
    const [bgColor, setBgColor] = useState('first');
    const commitColor = () => setBackupColor('');
    const cancelColor = () => backupColor && setBgColor(backupColor);
    const changeColor = (color) => {
        setBackupColor(bgColor);
        setBgColor(color);
    }
    return <ColorContext.Provider value={{ bgColor, changeColor, commitColor, cancelColor }}>
        {children}
    </ColorContext.Provider>
}