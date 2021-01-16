import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = (props) => {
  return <div>
      <Route exact path="/" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
  </div>;
};

export default Routes;
