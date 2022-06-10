import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/payment.css'
import deadline from "../image/landing/Frame-19.png"
import NavbarHome from "../components/NavbarHome";
import PaymentNav from "../components/PaymentNav";
import FooterHome from "../components/FooterHome";
import Confirm from "../components/Confirm";

export default function BankDetail(){
    return(
        <>
            <NavbarHome/>
            <main>
                <div id="#" className="payment-jumbo jumbotron-fluid d-flex align-items-end justify-content-center">
                    <PaymentNav/>
                </div>
                <div className="payment-content">
                    <div className="bank-detail bg-none mt-4 d-lg-flex">
                        <div>
                            <div className="bank mb-4 mb-md-4 mb-lg-0 mx-3 mx-md-3 mx-lg-0 p-4 rounded-3 shadow bg-light">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p data-testid="dl-header" className="fw-bold">Selesaikan Pembayaran Sebelum</p>
                                        <p className="mb-0">Rabu, 19 Jun 2022 jam 13.00 WIB</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <img src={deadline} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="bank mb-4 mb-md-4 mb-lg-0 mx-3 mx-md-3 mx-lg-0 my-4 my-md-4 my-lg-4 p-4 rounded-3 shadow bg-light">
                                <p className="fw-bold">Lakukan Transfer Ke</p>
                                <div className="detail-bank d-flex mb-3 mb-md-3 mb-lg-3 border-bottom-3">
                                    <button className="px-3 rounded bg-light">BCA</button>
                                    <div>
                                        <p className="ms-3 mb-0 fw-normal">BCA Transfer</p>
                                        <p className="ms-3 mb-0 fw-normal">a.n Binar Car Rental</p>
                                    </div>
                                </div>
                                <p className="mb-0">Nomor Rekening</p>
                                <div className="rounded border border-2 d-flex align-items-center justify-content-between py-2 mb-3">
                                    <p className="ms-3 mb-0 fw-light">xxxx-xxxx-xxxx</p>
                                    <p className="me-3 mb-0 fw-light"><i className="fa-solid fa-copy"></i></p>
                                </div>
                                <p className="mb-0">Total Bayar</p>
                                <div className="rounded border border-2 d-flex align-items-center justify-content-between py-2">
                                    <p className="ms-3 mb-0 fw-light">Rp 230.000</p>
                                    <p className="me-3 mb-0 fw-light"><i className="fa-solid fa-copy"></i></p>
                                </div>
                            </div>
                            <div className="bank mb-4 mb-md-4 mb-lg-0 mx-3 mx-md-3 mx-lg-0 my-4 my-md-4 my-lg-4 p-4 rounded-3 shadow bg-light">
                                <p className="fw-bold">Intruksi Pembayaran</p>
                                <div className="d-flex justify-content-evenly">
                                    <p>ATM BCA</p>
                                    <p>M-BCA</p>
                                    <p>BCA Klik</p>
                                    <p>Internet Banking</p>
                                </div>
                                <ul>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                            </div>
                        </div>
                        <Confirm/>
                    </div>
                </div>
            </main>
            <FooterHome/>
        </>
    )
}