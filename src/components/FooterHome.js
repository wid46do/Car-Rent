import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import FooterLogo from "../image/landing/Rectangle_74.png"

export default function FooterHome(){
    return(
        <footer className="my-md-5 mx-3 mx-md-3 mx-lg-0 mb-3 mb-md-3 mb-lg-0">
            <div className="row mr-0">
                <div className="col-12 col-md-6 col-lg-3">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column">
                    <a className="text-dark text-decoration-none" href="#ourservices">Our services</a>
                    <a className="text-dark text-decoration-none" href="#whyus">Why Us</a>
                    <a className="text-dark text-decoration-none" href="#testimonial">Testimonial</a>
                    <a className="text-dark text-decoration-none" href="#faq">FAQ</a>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <p>Connect with us</p>
                    <div className="d-flex">
                        <a href="#">
                            <div className="insta d-flex justify-content-center align-items-center">
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>
                        </a>
                        <a href="#">
                            <div className="insta d-flex justify-content-center align-items-center ms-3">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </a>
                        <a href="#">
                            <div className="insta d-flex justify-content-center align-items-center ms-3">
                                <i className="fa-brands fa-twitter"></i>
                            </div>
                        </a>
                        <a href="#">
                            <div className="insta d-flex justify-content-center align-items-center ms-3">
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                        </a>
                        <a href="#">
                            <div className="insta d-flex justify-content-center align-items-center ms-3">
                                <i className="fa-brands fa-twitch"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <p>Copyright Binar 2022</p>
                    <a href="#"><img src={FooterLogo} alt="" srcSet=""/></a>
                </div>
            </div>
        </footer>
    );
};