
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
const SingleService = () => {
    const {serviceId} = useParams()

    const [service, setService] = useState({})
   
    useEffect(()=>{
        const url = `./services.json/single_service/${serviceId}`
        fetch(url)
        .then(result => result.json())
        .then(data=> setService(data))
    },[])
  
    return (
       <>
       <Header></Header>
        <div>
           <h1 className="text-center">Service Id: {serviceId}</h1>
          
        </div>
        <Footer></Footer>
       </>
    );
};

export default SingleService;