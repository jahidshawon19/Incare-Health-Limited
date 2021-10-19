import React from 'react';

const Consultant = (props) => {
    const {name,area,contact, photo} = props.doctorData 
    return (
        <div className="col-lg-4 mt-4">
            <div className="card">
            <img src={photo} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h3>{area}</h3>
                <p className="card-text">{contact}</p>
               
            </div>
            </div>
        </div>
    );
};

export default Consultant;