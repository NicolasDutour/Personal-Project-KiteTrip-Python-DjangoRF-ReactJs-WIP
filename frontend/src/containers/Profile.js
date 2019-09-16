import React, { Component } from 'react'
import axios from 'axios'

import '../assets/css/profile.scss'
class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const profileID = this.props.match.params.profileID
    axios
      .get(`http://127.0.0.1:8000/profile/${profileID}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err.response))
  }

  render() {

    const { user } = this.state

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

              <p> <span>Genre:</span> {user.genre} </p>

              <p> <span>Age:</span> {user.date_birth} </p>

              <p> <span>Description:</span> {user.description} </p>

              <p> <span>Téléphone:</span> {user.phone} </p>

              <p> <span>Adresse:</span> {user.address} </p>

              <p> <span>Ville:</span> {user.city} </p>

              <p> <span>Code Postal:</span> {user.zip_code} </p>
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default Profile