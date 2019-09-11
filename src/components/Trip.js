import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/fr';

import '../assets/css/trip.scss'


const Trip = ({ data }) => {


  const departureTimeFormat = moment(data.departure_date).format("HH:mm").replace(':', "h")
  const departureDateFormat = moment(data.departure_date).format("D MMMM YYYY")

  const createdAtTimeFormat = moment(data.created_at).format("HH:mm").replace(':', "h")
  const createdAtDateFormat = moment(data.created_at).format("D MMMM YYYY")


  return (
    <section id="trip">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="trip">
              <Link to={`/trips/${data.id}`}>
                <div className="departure-date">
                  <div className="departure-time">
                    <div><i className="far fa-clock"></i> {departureTimeFormat}</div>
                  </div>
                  <div className="date">
                    {departureDateFormat}
                  </div>
                  <div className="departure-city">
                    {data.departure_city} - {data.destination_city}
                  </div>
                </div>

                <div className="driver-details">
                  <div className="driver-details-left">
                    <div className="profile-picture">
                      <img className="photo" src="" alt="Profil de l'utilisateur" />
                    </div>
                    <div className="name-age">  </div>
                  </div>
                  <div className="driver-details-right">
                    <div className="seats-left">
                      Places restantes
                    </div>
                    <div className="icones text-center">

                    </div>
                  </div>
                </div>

                <div className="car-driver">
                  <div className="brand">  <span className="model"></span> <span className="color"></span> </div>
                  <div className="immat">  </div>
                </div>

                <div className="passengers"></div>

                <div className="trip-date">Trajet mis en ligne le  {createdAtDateFormat}  à  {createdAtTimeFormat}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Trip