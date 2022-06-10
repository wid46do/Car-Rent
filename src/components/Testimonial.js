import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/swiper-bundle.min.css'
import "../style/swiper.css";
import CarouselImg from "../image/landing/img_photo.png";
import CarouselImg2 from "../image/landing/img_photo2.png";
import Rate from "../image/landing/Rate.png";

export default function Testimonial(){
    return(
        <section id="testimonial" className="mb-5 mx-3 mx-md-0 mx-lg-0">
            <div className="testi">
                <h2 className="font-weight-bold text-center mb-3 mx-3 mx-md-3 mx-lg-0">Testimonial</h2>
                <p className="text-center mb-5 mx-3 mx-md-3 mx-lg-0">Berbagai review positif dari para pelanggan kami</p>
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="testi1 d-flex align-items-center rounded flex-column flex-md-column flex-lg-row">
                        <img src={CarouselImg} alt="" srcSet=""/>
                        <div className="testicontent">
                            <div className="d-flex justify-content-center justify-content-md-center justify-content-lg-start mt-2 mt-md-2 mt-lg-0">
                                <img src={Rate} alt="" srcSet=""/>
                            </div>
                            <p className="my-2 text-center text-md-center text-lg-left">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                            <p className="font-weight-bold text-center text-md-center text-lg-left">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testi1 d-flex align-items-center rounded flex-column flex-md-column flex-lg-row">
                        <img src={CarouselImg2} alt="" srcSet=""/>
                        <div className="testicontent">
                            <div className="d-flex justify-content-center justify-content-md-center justify-content-lg-start mt-2 mt-md-2 mt-lg-0">
                                <img src={Rate} alt="" srcSet=""/>
                            </div>
                            <p className="my-2 text-center text-md-center text-lg-left">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                            <p className="font-weight-bold text-center text-md-center text-lg-left">John Dee 32, Bromo</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};