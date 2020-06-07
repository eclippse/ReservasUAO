import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import Login from './Login/Login';

const Routers = () => {
    return ( 
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/App' component={App}/>
        </Switch>
        );
}
 
export default Routers;