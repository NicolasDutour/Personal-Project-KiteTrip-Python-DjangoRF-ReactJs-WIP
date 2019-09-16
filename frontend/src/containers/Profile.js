import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUserDetails } from '../store/actions/auth'

import '../assets/css/profile.scss'
class Profile extends Component {

  render() {

    console.log(this.props.user)

    return (
      <section id="user-profile">
        <div className="container">
          <h3 className="welcome">Bonjour  </h3>
          <div className="profile-picture">
            <img className="photo" alt="Profil de l'utilisateur" />
          </div>
          <div className="row">
            <div className="col-md-6 infos">
              <h3 className="infos-title">Informations Personnelles</h3>

              <p> <span>Genre:</span> </p>

              <p> <span>Age:</span> </p>

              <p> <span>Description:</span>  </p>

              <p> <span>Téléphone:</span>  </p>

              <p> <span>Adresse:</span>  </p>

              <p> <span>Ville:</span>  </p>

              <p> <span>Code Postal:</span>  </p>
            </div>

            <div className="col-md-6 car">
              <h3 className="car-title">Voiture</h3>

              <p> <span>Marque:</span>  </p>

              <p> <span>Modèle:</span>  </p>

              <p> <span>Couleur:</span>  </p>

              <p> <span>Immatriculation:</span>  </p>
            </div>
          </div>
        </div>
      </section >
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUserDetails())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);