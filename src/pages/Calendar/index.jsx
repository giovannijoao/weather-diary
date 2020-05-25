import React from 'react';
import { Layout } from './layout/styles';
import { CalendarComponent } from '../../components/calendar';
import { CloseButton } from '../../components/closeButton';

export const CalendarPage = () => {
    return <Layout>
        <CloseButton pushTo={'/'} />
        <CalendarComponent year={true} />
    </Layout>
}