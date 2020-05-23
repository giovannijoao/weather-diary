import React from 'react';
import format from 'date-fns/format'
import { DateGrid, Day, Month, Year } from './styles';

const formatDate = (mask) => format(new Date(), mask);
export const DateHeaderComponent = () => {
    return <DateGrid>
        <Day>{formatDate('dd')}</Day>
        <Month>{formatDate('MMMM')}</Month>
        <Year>{formatDate('yyyy')}</Year>
    </DateGrid>
}