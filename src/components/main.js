import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import Documents from './documents';
import Calender from './calender';
import Login from './login';
import Notfound from './notfound';

const Main = () => (
   <Switch>
       <Route exact path ="/dashboard" component={Dashboard}/>
       <Route path = "/documents" component={Documents}/>
       <Route path = "/calender" component={Calender}/>
       <Route path = "/login" component={Login}/>
       <Route path ="/not-found" component={Notfound}/>

   </Switch>

)

export default Main;
