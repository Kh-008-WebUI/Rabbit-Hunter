import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Subscribe from './components/subscribe/Subscribe';
import UnSubscribe from './components/subscribe/UnSubscribe';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="subscribe" component={Subscribe} />  
        <Route path="unsubscribe" component={UnSubscribe} /> 
    </Route>  
);
