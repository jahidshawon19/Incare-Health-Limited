import React from 'react';
import './AppointCovid.css'

const AppointCovid = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-6 text-center mt-2">
                    <div className="card bg-info text-light">
                        <div className="card-body">
                            <h4 data-toggle="modal" data-target="#appointment">Make Appontment</h4>
                        </div>

                      
                        <div className="modal fade" id="appointment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            
                               
                             
                                <h5 className="text-success font-weight-bold mt-5">BOOK AN APPOINTMENT</h5>
                                <p className="text-dark">We Review And Accept Patient’s Requests On A 24/7 Basis. Please, Contact Us Now:</p>
                          
                            <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Patient Name" />
                                    
                                </div>
                                <div className="form-group">
                                   
                                    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    
                                </div>
                                <div className="form-group">
                                <select class="form-control" id="exampleFormControlSelect1" >

                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                
                                </select>
                                    
                                </div>

                                <div className="form-group">
                                   
                                   <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                   
                               </div>

                               <div className="form-group">
                                   
                                   <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile No" />
                                   
                               </div>
                                <div className="form-group">
                                   
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address"></textarea>
                                   
                               </div>


                               <div className="form-group">
                                <select class="form-control" id="exampleFormControlSelect1" >

                                        <option>Select Department</option>
                                        <option>Urology</option>
                                        <option>Cardiology</option>
                                        <option>Neuro Medicine</option>
                                        <option>Oncologist</option>
                                        <option>Neprologist</option>
                                        <option>Eye Specialist</option>
                                
                                </select>
                                    
                                </div>

                                <div className="form-group">
                                <select class="form-control" id="exampleFormControlSelect1" >

                                        <option>Select Doctor</option>
                                        <option>Dr.Jahid Hasan Shawon</option>
                                        <option>Dr.Yeasir Arfat</option>
                                        <option>Dr.Rahiaul Islam Medicine</option>
                                        <option>Dr.Jahid Hasan Shawon</option>
                                        <option>Dr.Yeasir Arfat</option>
                                        <option>Dr.Rahiaul Islam Medicine</option>
                                       
                                
                                </select>
                                    
                                </div>

                             
                               
                                <button type="submit" className="btn btn-primary">Make Appointment</button>
                                </form>
                                 </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 text-center mt-2">
                <div className="card bg-info text-light">
                        <div className="card-body">
                            <h4  data-toggle="modal" data-target="#covid">Covid Test Registration</h4>
                            <div className="modal fade" id="covid" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            
                               
                             
                                <h5 className="text-success font-weight-bold mt-5">COVID-19 TEST REGISTRATION FORM</h5>
                                <p className="text-danger">Please Fill The Form Very Carefully</p>
                          
                            <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
                                    
                                </div>
                                <div className="form-group">
                                    
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Age" />
                                    
                                </div>

                                <div className="form-group">
                                   
                                   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address"></textarea>
                                      
                                  </div>
                            
                               
                                <div className="form-group">
                                <select class="form-control" id="exampleFormControlSelect1" >

                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                
                                </select>
                                    
                                </div>

                                <div className="form-group">
                                   
                                   <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                                   
                               </div>

                               <div className="form-group">
                                   
                                   <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile No" />
                                   
                               </div>

                               <div className="form-group">
                                   
                                   <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Bikas No" />
                                   <small>Mention the number from which you made the payment</small>
                                   
                               </div>

                               <div className="form-group">
                                   
                                   <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Bkash Trx ID " />
                                  
                                   
                               </div>


                            
                                <button type="submit" className="btn btn-warning">Submit</button>
                                </form>
                                 </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        
                            </div>
                            
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AppointCovid;