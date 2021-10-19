import React from 'react';

const Gallery = (props) => {

    const {imgUrl} = props.galleryData 
    return (
        <div className="col-lg-3">
            
                <img src={imgUrl} alt="" className="img-fluid rounded" />
            
            
        </div>
    );
};

export default Gallery;