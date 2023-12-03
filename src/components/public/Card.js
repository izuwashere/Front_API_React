import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ mascota }) => {
  return (
    <div className="col">
          <div className="card shadow-sm">
           <img width="100%" src={mascota.image} alt="image"/>
            <div className="card-body text-center">
              {mascota.name}
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to={`/details/${mascota.id}`} className="mt-3 btn btn-success ">
                        Detalles
                    </Link>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
  )
}
