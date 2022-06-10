import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/payment.css'
import { Button } from "react-bootstrap";

export default function CardPayment(){
    return(
        <div className="">
            <div className="bill col-lg-6 ms-md-3 ms-lg-4 mb-4 mb-md-0 mb-lg-0 mx-3 mx-md-3 mx-lg-0 p-4 rounded-3 shadow bg-light">
                <p data-testid="header1">Nama/Tipe Mobil</p>
                <div className="d-flex">
                    <p><i className="fa-solid fa-user-group"></i>4 orang</p>
                    <p className="mx-3"><i className="fa-solid fa-gear"></i>Manual</p>
                    <p><i className="fa-solid fa-calendar"></i>Tahun 2020</p>
                </div>
                <div className="mt-5">
                    <div className="d-flex justify-content-between">
                        <p>Total <i className="fa-solid fa-angle-up"></i></p>
                        <p>Rp 430.000</p>
                    </div>

                    <p data-testid="header2">Harga</p>
                    <div className="d-flex justify-content-between">
                        <ul>
                            <li>1 Mobil dengan sopir</li>
                        </ul>
                        <p>Rp 430.000</p>
                    </div>

                    <p data-testid="header3">Biaya Lainya</p>
                    <ul>
                        <li>
                            <div className="d-flex justify-content-between">
                                <p className="mb-0">Pajak</p>
                                <p className="text-success mb-0">Termasuk</p>
                            </div>
                        </li>
                        <li>
                            <div className="d-flex justify-content-between">
                                <p className="mb-0">Biaya makan sopir</p>
                                <p className="text-success mb-0">Termasuk</p>
                            </div>
                        </li>
                    </ul>

                    <p data-testid="header4">Belum Termasuk</p>
                    <ul>
                        <li>Bensin</li>
                        <li>Tol dan parkir</li>
                    </ul>

                    <div className="d-flex justify-content-between">
                        <p data-testid="header5">Total</p>
                        <p>Rp 430.000</p>
                    </div> 
                    <div className="d-grid">
                        <Button data-testid="payment-method" className="btn-success">Bayar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}