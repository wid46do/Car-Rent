import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import ImgService from "../image/landing/img_service.png";
import CheckImg from "../image/landing/Group53.png"

export default function Services(){
    return(
        <section id="ourservices" className="content1">
            <div id="container-content " className="order-0 order-md-1 order-lg-0">
                <img src={ImgService} alt="" srcSet=""/>
            </div>
            <div id="container-content2" className="mx-3 mx-md-3 mx-lg-0">
                <h1 className="mb-4 mt-3 mt-md-3 mt-lg-0 text-center text-md-center text-lg-start">Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                <p className="mb-3 text-center text-md-center text-lg-start">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul>
                    <li>
                        <div className="me-3">
                            <img src={CheckImg} alt="" srcSet=""/>
                        </div>
                        <p> Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                    </li>
                    <li>
                        <div className="me-3">
                            <img src={CheckImg} alt="" srcSet=""/>
                        </div>
                        <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                    </li>
                    <li>
                        <div className="me-3">
                            <img src={CheckImg} alt="" srcSet=""/>
                        </div>
                        <p>Sewa Mobil Jangka Panjang Bulanan</p>
                    </li>
                    <li>
                        <div className="me-3">
                            <img src={CheckImg} alt="" srcSet=""/>
                        </div>
                        <p>Gratis Antar - Jemput Mobil di Bandara</p>
                    </li>
                    <li>
                        <div className="me-3">
                            <img src={CheckImg} alt="" srcSet=""/>
                        </div>
                        <p>Layanan Airport Transfer / Drop In Out</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};