import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './componenets/layout/Navbar';
import './index.css';
import About from './componenets/About/About';
import Dashboard from './componenets/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path = '/' component = {Dashboard}></Route>
            <Route path='/About' component ={About} ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
