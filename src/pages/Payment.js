import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/payment.css'
import FooterHome from "../components/FooterHome";
import NavbarHome from "../components/NavbarHome";
import Bank from "../components/Bank";
import CardPayment from "../components/CardPayment"
import PaymentNav from "../components/PaymentNav";

export default function Payment(){
    return(
        <>
            <NavbarHome/>
            <main>
                <div id="#" className="result jumbotron-fluid d-flex align-items-center justify-content-center">
                    <PaymentNav/>
                </div>
                <div className="payment-detail bg-none d-flex justify-content-center">
                    <div className="payment row mb-4 mb-md-0 mb-lg-0 mx-3 mx-md-3 mx-lg-0 p-4 rounded-3 shadow bg-light">
                        <div className="">
                            <p className="mb-2 fw-bold">Detail Pesananmu</p>
                        </div>
                        <div className="row d-flex justify-content-between">
                            <div className="detail-bar col-12 col-md-6 col-lg-4 mb-3 mb-md-3 mb-lg-3">
                                <p className="mb-2 fw-normal">Tipe Driver</p>
                                <p className="mb-0 fw-light text-secondary">Dengan Sopir</p>
                            </div>
                            <div className="detail-bar col-12 col-md-6 col-lg-4 mb-3 mb-md-3 mb-lg-3">
                                <p className="mb-2 fw-normal">Tipe Driver</p>
                                <p className="mb-0 fw-light text-secondary">Dengan Sopir</p>
                            </div>
                            <div className="detail-bar col-12 col-md-6 col-lg-4 mb-3 mb-md-3 mb-lg-3">
                                <p className="mb-2 fw-normal">Tipe Driver</p>
                                <p className="mb-0 fw-light text-secondary">Dengan Sopir</p>
                            </div>
                            <div className="detail-bar col-12 col-md-6 col-lg-4 mb-3 mb-md-3 mb-lg-3">
                                <p className="mb-2 fw-normal">Jumlah Penumpang (opsional)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="payment-content">
                    <div className="bank-detail bg-none mt-4 d-lg-flex">
                        <Bank/>
                        <CardPayment/>
                    </div>
                </div>
            </main>
            <FooterHome/>
        </>
    )
}