import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/payment.css'
import { Button } from "react-bootstrap";
import Time from "../image/landing/Frame-38.png"

export default function Confirm(){
    return(
        <div>
            <div className="bill col-lg-6 ms-md-3 ms-lg-4 mb-4 mb-md-0 mb-lg-0 mx-3 mx-md-3 mx-lg-0 p-4 rounded-3 shadow bg-light">
                <div className="d-flex justify-content-between">
                    <div>
                        <p data-testid="header" className="fw-bold">Konfirmasi Pembayaran</p>
                    </div>
                    <div>
                        <img src={Time} alt="" />
                    </div>
                </div>
                <p>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                <p data-testid="upload" className="fw-bold">Upload Bukti Pembayaran</p>
                <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                <div className="p-3 p-md-5 p-lg-3">
                    <div className="upload-bukti d-flex justify-content-center align-items-center border border-2 p-5">
                        <i className="fa-solid fa-image"></i>
                    </div>
                </div>
                <div className="d-grid">
                    <Button data-testid="card-button" className="btn-success">Upload</Button>
                </div>
            </div>
        </div>
    )
}