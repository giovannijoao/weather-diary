import React from 'react';
import { Layout } from './components/layout/styles';
import { DateHeaderComponent } from '../../components/date';
import { Mood } from '../../components/mood';
import { HeaderComponent } from '../../components/header';
import { ColorContextWrapper } from './contexts/ColorContext/ColorContextWrapper';
import { ColorContext } from './contexts/ColorContext/ColorContext';
export const HomePage = () => {
    return <ColorContextWrapper>
        <ColorContext.Consumer>
            {({ bgColor }) =>
                <Layout bgColor={bgColor}>
                    <HeaderComponent />
                    <DateHeaderComponent />
                    <Mood />
                </Layout>
            }
        </ColorContext.Consumer>
    </ColorContextWrapper>
}