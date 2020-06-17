import React, { Component } from 'react';
import '../App.css'

import { Link } from 'react-router-dom';


class Footer extends Component{

    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 col-md-3 align-self-center">
                            <h3>Links</h3>
                            <ul className="list-unstyled ">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/heros">Heros</Link></li>
                            </ul>                                              
                        </div>
                        <div className="col-8 col-md-6 align-self-center">
                            <h3>Our Address</h3>
                            <address>
                                768/5A,Noyyal Nagar, <br />
                                Opp. Govt.Boys Hostel, <br />
                                Cbe-641016 <br/>

                                <i className="fa fa-phone fa-lg"></i>: +91 9952341711 <br />
                                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:bineshj2002@gmail.com">bineshj2002@gmail.com</a>
                            </address>
                        </div>
                        <div className="col-12 col-md-3 align-self-center">
                            <a className="btn btn-social-icon btn-google" href="http://www.google.com"> <i className="fa fa-google-plus"></i> </a>
                            <a className="btn btn-social-icon btn-twitter" href="http://www.twitter.com"> <i className="fa fa-twitter"></i> </a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com"> <i className="fa fa-linkedin"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;