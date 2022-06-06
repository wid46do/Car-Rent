import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import ProfessionalImg from "../image/landing/icon_professional.png";

export default function WhyUs(){
    return(
        <section id="whyus" className="contentWhyUs">
            <div className="">
                <div className="title">
                    <h2 className="mb-3">Why Us?</h2>
                    <p className="mb-4">Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div id="cardWhyUs" className="px-3 px-lg-0">

                    <div>
                        <div className="card mt-0">
                            <div className="card-body rounded p-4">
                                <div className="like d-flex justify-content-center align-items-center">
                                    <i className="fa-regular fa-thumbs-up"></i>
                                </div>
                                <h5 className="card-title mt-3 mb-3">Mobil Lengkap</h5>
                                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card mt-0">
                            <div className="card-body rounded p-4">
                                <div className="price d-flex justify-content-center align-items-center">
                                    <i className="fa-solid fa-tag"></i>
                                </div>
                                <h5 className="card-title mt-3 mb-3">Harga Murah</h5>
                                <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card mt-0">
                            <div className="card-body rounded p-4">
                                <div className="clock d-flex justify-content-center align-items-center">
                                    <i className="fa-regular fa-clock"></i>
                                </div>
                                <h5 className="card-title mt-3 mb-3">Layanan 24 Jam</h5>
                                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="card mt-0 mb-3 mb-md-3 mb-lg-0">
                            <div className="card-body rounded p-4">
                                <img src={ProfessionalImg} alt="" srcSet=""/>
                                <h5 className="card-title mt-3 mb-3">Sopir Profesional</h5>
                                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};