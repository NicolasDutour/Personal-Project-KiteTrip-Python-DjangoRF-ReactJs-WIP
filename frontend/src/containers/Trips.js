import React, { Component } from 'react'
import axios from 'axios'
import Trip from '../components/Trip'

import '../assets/css/trips.scss'

class Trips extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trips: []
    }
  }

  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/trips/')
      .then(res => {
        this.setState({
          trips: res.data
        })
      })
      .catch(err => console.log(err.response))
  }

  getTrips = () => {
    return this.state.trips.map(trip => {
      return (
        <Trip key={trip.id} data={trip} />
      )
    })
  }

  render() {
    return (
      <section id="trips" className="container">
        <div className="row">
          <div className="col-md-7 mx-auto">
            <div className="search">
              <form className="form-inline search-inputs">
                <div>
                  <input className="form-control departure" type="search" placeholder="Ville départ" aria-label="Search" />
                  <input className="form-control arrival" type="search" placeholder="Ville arrivée" aria-label="Search" />
                </div>
                <div>
                  <button type="button" className="btn">Chercher</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {this.getTrips()}
      </section>
    )
  }
}

export default Trips