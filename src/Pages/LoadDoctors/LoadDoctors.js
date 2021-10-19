import React, { useEffect, useState } from 'react';
import Consultant from '../Consultant/Consultant'
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
const LoadDoctors = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch('doctor.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    
    return (
        <>
         <Header></Header>
           <div className="container">
            <div className="row py-5">
            {
                doctors.map(doctor => <Consultant
                key={doctor.id}
                doctorData = {doctor}
                ></Consultant>)
            }
            
        </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default LoadDoctors;