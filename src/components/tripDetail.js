import React, { Component } from 'react'
import axios from 'axios'



import '../assets/css/trip-detail.scss'
export default class tripDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trip: {}
    }
  }

  componentDidMount() {
    const tripID = this.props.match.params.tripID
    axios
      .get(`http://127.0.0.1:8000/trips/${tripID}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          trip: res.data
        })
      })
      .catch(err => console.log(err.response))
  }

  render() {

    const { trip } = this.state


    return (
      <section id="trip-detail">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h1 className="display-4 text-center">{trip.departure_city} - {trip.destination_city}</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
