import React, { Component } from 'react'
import '../assets/css/home.scss'

export default class Home extends Component {
  render() {
    return (
      <section id="home">
        <div className="container home-detail text-center">
          <div className="home-search p-5">
            <div className="overlay p-5">
              <h1 className="display-4 mb-4">
                Rechercher des Kite Covoit !
              </h1>
              <div className="search">
                <form action="trips/">
                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label className="sr-only">Mot-clé</label>
                      <input type="text" name="keywords" className="form-control" placeholder="Mot-clé (...)" />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="sr-only">Ville</label>
                      <input type="text" name="departure_city" className="form-control" placeholder="Ville de Départ" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label className="sr-only">Nombre de places disponibles</label>
                      <select name="places_available" className="form-control">
                        <option disabled="disabled">Places disponibles (Toutes)</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <select name="price" className="form-control" id="type">
                        <option disabled="disabled">Prix</option>
                        <option value="100000">100000</option>
                        <option value="200000">200000</option>
                        <option value="300000">300000</option>
                      </select>
                    </div>
                  </div>
                  <input type="submit" value="Trouve ton bonheur" className="btn btn-secondary btn-block" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
