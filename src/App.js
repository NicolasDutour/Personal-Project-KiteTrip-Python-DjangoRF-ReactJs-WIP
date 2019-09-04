import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './containers/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}


export default App;
