import React from 'react';
import { Route, Switch, BrowserRouter } from 'dva/router';
import App from './routes/App';

export default (props) => {
    return (
        <BrowserRouter basename='/'>
            <Switch>
                <Route path="/" exact component={App} />
            </Switch>
        </BrowserRouter>
    )
}