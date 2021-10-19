import React from 'react';
import './Banner.css'


import banner1 from '../../../img/banner_1 (1).jpg'
import banner2 from '../../../img/banner_2 (1).jpg'
import banner3 from '../../../img/banner_3 (1).jpg'


const Banner = () => {
    return (
        
            
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={banner1} alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                        <h5 className="display-4 font-weight-bold text-warning">LET US PROTTECT YOUR HEALTH</h5>
                        <p className="text-warning">Our Doctors are ready to give the best health support for patient,because they are providing the better health care with latest medical technologies.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={banner2} alt="Second slide" />

                    <div class="carousel-caption d-none d-md-block">
                        <h5 className="display-4 font-weight-bold  text-warning">LET US PROTTECT YOUR HEALTH</h5>
                        <p className=" text-warning">Our Doctors are ready to give the best health support for patient,because they are providing the better health care with latest medical technologies.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={banner3} alt="Third slide" />

                    <div class="carousel-caption d-none d-md-block">
                        <h5 className="display-4 font-weight-bold text-warning">LET US PROTTECT YOUR HEALTH</h5>
                        <p className="text-warning">Our Doctors are ready to give the best health support for patient,because they are providing the better health care with latest medical technologies.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        
       
    );
};

export default Banner;