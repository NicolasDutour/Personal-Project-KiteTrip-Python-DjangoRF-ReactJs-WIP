import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/loginAndSignup.scss'

class Signup extends Component {

  render() {

    return (
      <section id="signup" className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 signup-form">
            <h3 className="title"><i class="fas fa-user-plus"></i> S'inscrire</h3>
            <form>
              <div className="form-group">
                <input name="username" type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Pseudo" />
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              <div className="form-group">
                <input name="password1" type="password" className="form-control" id="password1" placeholder="Mot de passe" />
              </div>
              <div className="form-group">
                <input name="password2" type="password" className="form-control" id="password2" placeholder="Confirmer mot de passe" />
              </div>
              <button type="submit" className="btn btn-primary">S'inscrire</button>
            </form>
            <div className="redirect">
              Déjà un compte ? <Link to="/login">Se connecter</Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Signup