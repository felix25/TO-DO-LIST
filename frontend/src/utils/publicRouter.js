import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const isAuth = () =>{
    if(localStorage.getItem('token') !== null){
        return true;
    }
    return false;
}

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuth() && restricted ?
                <Redirect to="/home" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;