import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/payment.css'
import { Link } from "react-router-dom";

export default function PaymentNav(){
    return(
        <div className="payment-nav d-flex justify-content-between">
            <div>
                <p className="mb-0"><i className="fa-solid fa-arrow-left"></i> Pembayaran</p>
            </div>
            <div className="d-flex"> 
                <Link to={"/method"}>
                    <p><i className="fa-solid fa-1"></i> Pilih Metode</p>
                </Link>
                <p className="mb-0"><i className="fa-solid fa-minus"></i><i className="fa-solid fa-minus"></i></p>
                <Link to={"/pay"}>
                    <p className="mb-0"><i className="fa-solid fa-2"></i> Bayar</p>
                </Link>
                <p className="mb-0"><i className="fa-solid fa-minus"></i><i className="fa-solid fa-minus"></i></p>
                <Link to={"/tiket"}>
                    <p className="mb-0"><i className="fa-solid fa-3"></i> Tiket</p>
                </Link>
            </div>
        </div>
    )
}