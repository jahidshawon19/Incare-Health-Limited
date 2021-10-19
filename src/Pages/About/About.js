import React from 'react';
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
const About = () => {
    return (
      <>
        <Header></Header>
        <div className="container">
        
        <div className="row mt-5">
            <h3 className="text-success font-weight-bold">About Us</h3>
            <div className="col-lg-12">
                <p className="lead">Epic Health Care is the best health care in Chattogram, Bangladesh, confidently providing comprehensive diagnostic health care services. These services are provided by expert medical professionals, skilled technologists using state-of-the-art technology. The mission of Epic Health Care is to provide high quality international standard diagnostic healthcare which will meet the needs and exceed the expectations of the people of Bangladesh</p>
            </div>
        </div>
        <div className="row py-5">
            <div className="col-lg-6">
                <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="col-lg-6">
            <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What we have
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      Dedicated to providing multidisciplinary medical diagnostic and consultation services backed by state-of-the-art facilities, Epic Health Care offers team-based quality patient care that is widely acknowledged to be amongst the best in Bangladesh.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Quality never compromise!
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
      To ensure accuracy, quality control is very much important for any medical diagnostic centre which wants to produce reliable reports. Currently we are working for ISO: 15189 accreditation which is used by medical laboratories in developing their quality management systems and assessing their own competence and for confirming or recognizing the competence of medical laboratories by laboratory customers, regulating authorities and accreditation bodies.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Our team
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      Epic Health Care Limited team consists of approximately 300 employees who are providing our paients with a comprehensive list of routine and specialized tests. Great care is given in selecting the suitable individuals to word at EHC, both on the administrative and technical levels. Epic Health Care Limited units heads are all renowned consultants.
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
            
        </div>
        <Footer></Footer>
      </>
    );
};

export default About;