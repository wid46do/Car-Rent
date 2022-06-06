import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/payment.css'
import domToPdf from 'dom-to-pdf'
import { useRef } from 'react'
import NavbarHome from "../components/NavbarHome";
import PaymentNav from "../components/PaymentNav";
import FooterHome from "../components/FooterHome";
import MyDocument from "../components/DocumentPDF";

export default function Etiket(){
    const pdfRef = useRef(null)
    const downloadPdf = () => {
        const options = {
            filename: 'Invoice.pdf'
        };
        
        domToPdf(pdfRef.current, options, function(pdf) {
            console.log('done');
        });
    }
    return(
        <>
            <NavbarHome/>
            <main>
                <div id="#" className="payment-jumbo jumbotron-fluid d-flex align-items-end justify-content-center">
                    <PaymentNav/>
                </div>
                <div className="d-flex flex-column align-items-center py-4 mt-5">
                    <p className="check text-success"><i class="fa-solid fa-circle-check"></i></p>
                    <p className="fw-bold">Pembayaran Berhasil!</p>
                    <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                </div>
                <div className="d-lg-flex justify-content-center">
                    <div className="invoice ms-md-3 ms-lg-4 mb-4 mb-md-0 mb-lg-0 mx-3 mx-md-3 mx-lg-0 p-4 rounded-3 shadow bg-light">
                        <div className="d-flex justify-content-between">
                            <p className="fw-bold">Invoice</p>
                            <button onClick={downloadPdf} className="btn btn-outline-primary">
                                <p className="mb-0"><i class="fa-solid fa-download"></i>Unduh</p>
                            </button>
                        </div>
                        <p>*no invoice</p>
                        <div className="p-3 p-md-5 p-lg-3">
                            <div className="unduh-pdf d-flex justify-content-center align-items-center border border-2 p-5">
                                <i className="fa-solid fa-image"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <MyDocument pdfRef={pdfRef}/>
            <FooterHome/>
        </>
    )
}