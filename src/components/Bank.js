import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/payment.css'

export default function Bank(){
    return(
        <div className="">
            <div className="bank mb-4 mb-md-4 mb-lg-0 mx-3 mx-md-3 mx-lg-0 p-4 rounded-3 shadow bg-light">
                <div className="">
                    <p className="mb-2 fw-bold">Pilih Bank Transfer</p>
                    <p className="mb-2">Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                </div>
                <div className="">
                    <div className="detail-bank d-flex mb-3 mb-md-3 mb-lg-3 border-bottom-3">
                        <button className="px-3">BCA</button>
                        <p className="ms-3 mb-0 fw-normal">BCA Transfer</p>
                    </div>
                    <div className="detail-bank d-flex mb-3 mb-md-3 mb-lg-3 border-bottom-3">
                        <button className="px-3">BNI</button>
                        <p className="ms-3 mb-0 fw-normal">BNI Transfer</p>
                    </div>
                    <div className="detail-bank d-flex mb-3 mb-md-3 mb-lg-3 border-bottom-3">
                        <button className="px-3">Mandiri</button>
                        <p className="ms-3 mb-0 fw-normal">Mandiri Transfer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}