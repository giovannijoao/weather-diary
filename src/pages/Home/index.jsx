import React from 'react';
import { Layout } from './components/layout/styles';
import { DateHeaderComponent } from '../../components/date';
import { Mood } from '../../components/mood';
export const HomePage = () => {
    return <Layout>
        <DateHeaderComponent />
        <Mood />
    </Layout>
}