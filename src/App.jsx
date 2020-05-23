import React from 'react';
import { Body } from './styles';
import { AppTheme } from './components/theme';
import { HomePage } from './pages/Home';

function App() {
  return (
    <AppTheme>
      <Body>
        <HomePage />
      </Body>
    </AppTheme>
  );
}

export default App;
