import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Trips from './containers/Trips'
import tripDetail from './components/tripDetail'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/trips" component={Trips} />
          <Route exact path="/trips/:tripID" component={tripDetail} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(App);
