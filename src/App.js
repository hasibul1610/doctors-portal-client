import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appointments from './component/Appointments/Appointments/Appointments';
import Dashboard from './component/Dashboard/Dashboard';
import Home from './component/Home/Home';
import Login from './component/Login/Login/Login';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Register from './component/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path='/appointments'>
            <Appointments></Appointments>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>

        </Switch>
      </Router>


    </AuthProvider>
  );
};

export default App;