import React, { useState, useEffect } from 'react';
import { Layout } from './components/layout/styles';
import { DateHeaderComponent } from '../../components/date';
import { Mood } from '../../components/mood';
import { HeaderComponent } from '../../components/header';
export const HomePage = () => {
    return <Layout >
        <HeaderComponent />
        <DateHeaderComponent />
        <Mood />
    </Layout>
}