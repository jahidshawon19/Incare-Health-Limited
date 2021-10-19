import React from 'react';
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
const NotFound = () => {
    return (
        <>
        <Header></Header>
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                <img src="https://previews.123rf.com/images/ontsunan/ontsunan1908/ontsunan190800038/128509740-404-error-page-not-found-vector-illustration-background-flat-cartoon-character-graphic-design-landin.jpg" alt=""  className="img-fluid" />
                </div>
                <div className="col-lg-2"></div>
            </div>
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default NotFound;