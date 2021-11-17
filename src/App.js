import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appointments from './component/Appointments/Appointments/Appointments';
import Home from './component/Home/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/appointments'>
            <Appointments></Appointments>

          </Route>

        </Switch>
      </Router>


    </div>
  );
};

export default App;