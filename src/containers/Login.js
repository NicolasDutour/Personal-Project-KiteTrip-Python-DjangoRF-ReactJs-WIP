import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { authLogin } from '../store/actions/auth'

import '../assets/css/loginAndSignup.scss'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.login(email, password)
  }


  render() {

    const { isAuthenticated } = this.props
    const { email, password } = this.state

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <section id="login" className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 login-form">
            <h3 className="title"><i className="fas fa-sign-in-alt"></i> Se Connecter</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <input name="password" type="password" className="form-control" id="password" placeholder="Mot de passe" value={password} onChange={this.handleChange} />
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


const mapStateToProps = state => {
  return {
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(authLogin(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
