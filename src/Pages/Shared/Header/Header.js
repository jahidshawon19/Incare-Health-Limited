import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Header.css'
const Header = () => {
   const {user, logOut} = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="/">Incare Health</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">

                        <NavLink className="nav-link" to="/">Home</NavLink>

                    </li>
                    <li className="nav-item">

                    <NavLink className="nav-link" to="/about">About Us</NavLink>

                    </li>
                    
                    <li className="nav-item">

                    <NavLink className="nav-link" as={Link} to="/home#services">Services</NavLink>

                    </li>
                    

                    <li className="nav-item">

                       <NavLink className="nav-link" to="/doctors">Consultants</NavLink>

                    </li>
                    <li className="nav-item">
                     
                    <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                    </li>
                                    
                            
                                
                                
                <li className="nav-item">
                   {
                       user?.email?
                       <NavLink className="nav-link" to="/" onClick={logOut}>Logout</NavLink>
                       
                       :
                       <NavLink className="nav-link" to="/login" >Login</NavLink>
                   }
                </li>
                <li>
                    {
                        user?.email?
                        <span className="text-warning">{user.displayName}</span>
                        :
                        <span></span>
                    }
                </li>
                

                  

        </ul>
        </div>
         </nav>
        </div>
    );
};

export default Header;