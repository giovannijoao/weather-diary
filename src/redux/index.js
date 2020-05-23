import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './reducers';

export const history = createBrowserHistory();

const composeEnhancers = (typeof window !== 'undefined' && process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const configureStore = () => {
    const store = createStore(
        rootReducer(history),
        {},
        composeEnhancers(applyMiddleware(
            routerMiddleware(history)
        ))
    )
    return store;
}