import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import  HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in.component';
import CreateTasks from './pages/tasks/tasks.component';
import Logout from './pages/logout/logout.component';
import PrivateRoute from './utils/auth';
import PublicRoute from './utils/publicRouter';

function App() {
  return (
      <Switch>
        <PublicRoute exact path="/" component={SignInAndSignUpPage} restricted={true}/>
        <PrivateRoute path="/edit/:id" component={CreateTasks} />
        <PrivateRoute path="/tarea" component={CreateTasks} />
        <PrivateRoute path="/home" component={HomePage} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
  );
}

export default App;
