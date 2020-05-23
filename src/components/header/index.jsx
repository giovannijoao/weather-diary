import React from 'react';
import { Header, CalendarIcon } from './styles';
import { ColorPickerComponent } from '../colorPicker';
import CalendarSVG from '../../assets/calendar_24';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export const HeaderComponent = () => {
    const dispatch = useDispatch();
    const goToCalendar = () => dispatch(push('/calendar'));
    return <Header>
        <CalendarIcon onClick={goToCalendar}>
            <CalendarSVG />
        </CalendarIcon>
        <ColorPickerComponent />
    </Header>
}