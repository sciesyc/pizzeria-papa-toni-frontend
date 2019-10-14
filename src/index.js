import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import PizzastoreService from './services/pizzastore-service';
import { PizzastoreServiceProvider } from './components/pizzastore-service-context';

import store from './store';

const pizzastoreService = new PizzastoreService();

ReactDOM.render(
    <Provider  store={store}>
        <ErrorBoundry>
            <PizzastoreServiceProvider value={pizzastoreService}>
                <Router>
                    <App />
                </Router>
            </PizzastoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);