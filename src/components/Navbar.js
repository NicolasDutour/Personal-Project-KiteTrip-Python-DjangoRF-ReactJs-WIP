import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

import '../assets/css/navbar.scss'
class Navbar extends Component {

  render() {

    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src="" className="logo" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li className="nav-item mr-3">
                  <Link to="/" className="nav-link">Accueil</Link>
                </li>
                <li className="nav-item mr-3">
                  <Link to="/trips" className="nav-link">Les sessions</Link>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">

                <Fragment>
                  <li className="nav-item mr-3">
                    <Link to="/profile/" className="nav-link">Bienvenue (Profil)</Link>
                  </li>
                  <li className="nav-item mr-3">
                    <div className="nav-link">
                      <i className="fas fa-sign-out-alt"></i> Se déconnecter</div>
                  </li>
                </Fragment>

                <Fragment>
                  <li className="nav-item mr-3">
                    <Link to="/signup" className="nav-link">
                      <i className="fas fa-user-plus"></i> S'inscrire</Link>
                  </li>
                  <li className="nav-item mr-3">
                    <Link to="/login" className="nav-link">
                      <i className="fas fa-sign-in-alt"></i> Se Connecter</Link>
                  </li>
                </Fragment>

              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}


export default Navbar