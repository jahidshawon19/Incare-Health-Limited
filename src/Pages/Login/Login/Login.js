import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Login = () => {
    const {googleSignIn} = useAuth()
    return (
        <>

        <Header></Header>
        <div className="container">
            <h3 className="text-warning text-center mt-5">Please Login </h3>
            <div className="row py-5 ">
                <div className="col-lg-5 mt-5">
                <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <br /><br />
                    <p>OR</p>
                    <button className="btn btn-danger" onClick={googleSignIn}>Google Sign In</button>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-3 mt-2">
                    <img src="https://p.kindpng.com/picc/s/273-2738804_php-login-and-authentication-login-hd-png-download.png" alt="" />
                </div>
            </div>
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default Login;