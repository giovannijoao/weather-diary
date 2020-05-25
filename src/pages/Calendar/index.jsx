import React from 'react';
import { Layout } from './layout/styles';
import { CalendarComponent } from '../../components/calendar';

export const CalendarPage = () => {
    return <Layout>
        <CalendarComponent year={true} />
    </Layout>
}