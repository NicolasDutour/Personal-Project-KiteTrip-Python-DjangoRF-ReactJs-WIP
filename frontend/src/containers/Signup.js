import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { authSignup } from '../store/actions/auth'

import '../assets/css/loginAndSignup.scss'

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, email, password1, password2 } = this.state
    this.props.signup(username, email, password1, password2)
  }

  render() {

    const { isAuthenticated, error } = this.props
    const { username, email, password1, password2 } = this.state

    if (isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
      <section id="signup" className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 signup-form">
            <h3 className="title"><i className="fas fa-user-plus"></i> S'inscrire</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input name="username" type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Pseudo" value={username} onChange={this.handleChange} />
                {error && <div className="error"> {error.username} </div>}
              </div>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={this.handleChange} />
                {error && <div className="error"> {error.email} </div>}
              </div>
              <div className="form-group">
                <input name="password1" type="password" className="form-control" id="password1" placeholder="Mot de passe" value={password1} onChange={this.handleChange} />
                {error && <div className="error"> {error.password1} </div>}
              </div>
              <div className="form-group">
                <input name="password2" type="password" className="form-control" id="password2" placeholder="Confirmer mot de passe" value={password2} onChange={this.handleChange} />
                {error && <div className="error">{error.non_field_errors}</div>}
                {error && <div className="error"> {error.password2} </div>}
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, email, password1, password2) => dispatch(authSignup(username, email, password1, password2))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)