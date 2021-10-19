import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const LoadServices = () => {

    const [services, setServices] = useState([]) 

    useEffect(()=>{ // load services data 
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div id="services">
        <div className="container">
             <h2 className="text-center mt-5">Incare Health Services</h2>
            <div className="row py-5">
           
                {
                    services.map(service => 
                       <Services
                        key={service.id}
                        serviceData={service}
                       ></Services>)
                }
            </div>
            
        </div>
        </div>
    );
};

export default LoadServices;