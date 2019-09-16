import React, { Component } from 'react'

class Profile extends Component {

  render() {

    return (
      <section id="user-profile">
        <div className="container">
          <h3 className="welcome">Bonjour </h3>
          <div className="profile-picture">
            <img className="photo" alt="Profil de l'utilisateur" />
          </div>
          <div className="row">
            <div className="col-md-6 infos">
              <h3 className="infos-title">Informations Personnelles</h3>

              <p> <span>Genre:</span>  </p>

              <p> <span>Age:</span>  </p>

              <p> <span>Description:</span>  </p>

              <p> <span>Téléphone:</span>  </p>

              <p> <span>Adresse:</span>  </p>

              <p> <span>Ville:</span>  </p>

              <p> <span>Code Postal:</span>  </p>
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default Profile