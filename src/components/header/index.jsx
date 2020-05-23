import React from 'react';
import { Header } from './styles';
import { ColorPickerComponent } from '../colorPicker';

export const HeaderComponent = () => {
    return <Header>
        <ColorPickerComponent />
    </Header>
}