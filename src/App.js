import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './logo.svg';
import './App.css';
import Login from "./Mycomponents/Login.js";
import Reg from "./Mycomponents/Reg.js";
import { Menu } from "./Mycomponents/Menu.js";
import { Error } from "./Mycomponents/Error.js";
import Dashboard from "./Mycomponents/Dashboard.js";
function App() {

  return (
    <div className="App">

      <>
        <Menu />
        <Switch>
          <Route exact path='/' component={Menu} />
          <Route exact path='/registration' component={Reg} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route component={Error} />
        </Switch>

      </>
    </div>

  );
}

export default App;
