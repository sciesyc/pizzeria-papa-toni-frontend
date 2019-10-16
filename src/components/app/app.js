import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header';
import { HomePage, CartPage, SignUpPage, SignInPage } from '../pages';
import  HistoryList  from '../history-list';
import './app.css';

const App = () => {
    return (
        <Fragment>
            <AppHeader/>
            <main role="main" className="container">
                <Switch>
                    <Route 
                    path="/"
                    component={HomePage}
                    exact />

                    <Route 
                    path="/cart"
                    component={CartPage}
                    exact />


                    <Route 
                    path="/signin"
                    component={SignInPage}
                    exact />
            
                    <Route
                    path="/signup"
                    component={SignUpPage}
                    exact /> 

                    <Route 
                    path="/history"
                    component={HistoryList}
                    exact/>

                </Switch>   
            </main>
        </Fragment>
    )
}

export default App;