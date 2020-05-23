import React from 'react';
import { Body } from './styles';
import { AppTheme } from './components/theme';
import { HomePage } from './pages/Home';
import { Provider } from 'react-redux';
import { configureStore, history } from './redux';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { CalendarPage } from './pages/Calendar';

function App() {
  const store = configureStore();
  return (
    <AppTheme>
      <Provider store={store}>
        <Body>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/calendar" render={CalendarPage} />
              <Route render={HomePage} />
            </Switch>
          </ConnectedRouter>
        </Body>
      </Provider>
    </AppTheme>
  );
}

export default App;
