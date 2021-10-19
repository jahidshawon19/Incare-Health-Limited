import React, { useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'

const LoadGallery = () => {

    const [gallery, setGallery ] = useState([])
    useEffect(()=>{
        fetch('gallery.json')
        .then(res => res.json())
        .then(data => setGallery(data))
    }, [])

    return (
     <>
     <Header></Header>
        <div className="container">
        <h2 className="text-center mt-2">Our Gallery</h2>
        <div className="row mt-2 py-3">
           {
               gallery.map(gallery => <Gallery
               
                    key={gallery.id}
                    galleryData = {gallery}
                
               ></Gallery>)
           }
            
        </div>
        </div>
        <Footer></Footer>
     </>
    );
};

export default LoadGallery;