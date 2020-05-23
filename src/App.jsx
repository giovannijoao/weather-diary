import React from 'react';
import { Body } from './styles';
import { AppTheme } from './components/theme';
import { HomePage } from './pages/Home';
import { Provider } from 'react-redux';
import { configureStore, history } from './redux';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

function App() {
  const store = configureStore();
  return (
    <AppTheme>
      <Provider store={store}>
        <Body>
          <ConnectedRouter history={history}>
            <Switch>
              <Route render={HomePage} />
            </Switch>
          </ConnectedRouter>
        </Body>
      </Provider>
    </AppTheme>
  );
}

export default App;
