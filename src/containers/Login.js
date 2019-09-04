import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import '../assets/css/loginAndSignup.scss'

class Login extends Component {

  render() {

    return (
      <section id="login" className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 login-form">
            <h3 className="title">Se Connecter</h3>
            <form>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="form-group">
                <input name="password" type="password" className="form-control" id="password" placeholder="Mot de passe" />
              </div>
              <button type="submit" className="btn btn-primary">Se Connecter</button>
            </form>
            <div className="redirect">
              Pas encore de compte ? <Link to="/signup">S'inscrire</Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Login
