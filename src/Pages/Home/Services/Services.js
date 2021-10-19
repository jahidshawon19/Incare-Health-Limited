import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'
const Services = (props) => {
    const {id,img,serviceName, shortDescription} = props.serviceData
    return (
        <div className="col-lg-4 mt-3">
            <div className="card-deck">
              <div className="card">
                  <img src={img} alt="" className="card-img-top" />
                  <div className="card-body">
                      <h4 className="card-title">{serviceName}</h4>
                      <p className="card-text">{shortDescription}</p>
                  </div>
                       
                      <Link to={`/single_service/${id}`}>
                      <button className="btn btn-outline-danger">See Details</button>
                      </Link>
              </div>
          </div>
        </div>
    );
};

export default Services;