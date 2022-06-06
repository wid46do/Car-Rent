import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';
import Jam from "../image/dashboard/fi_clock.png"
import CardPict from "../image/dashboard/Vector.png"
import { useSelector } from "react-redux";
import ModalImage from "react-modal-image";

export default function CardDasboard(){
    const { getCarDataResult, getCarDataLoading, getCarDataError } = useSelector((state) => state.cars);

    if(getCarDataLoading){
        return(
            <h1>loading</h1>
        )
    }

    if(getCarDataError){
        return(
            <h1>{getCarDataError}</h1>
        )
    }

    if(!getCarDataResult){
        return(
            <h1></h1>
        )
    }
    
    return(
        <div className="row mt-3">
            {getCarDataResult?.map((carData) => {
                return(
                    <div key={carData.id} id="cardDashboard" className="col-4 mb-3">
                        <div className="card py-2">
                            <ModalImage
                                small={carData.image}
                                large={carData.image}
                            />
                            <div className="card-body ">
                                <p className="fw-bold mb-2 ">
                                    {carData.name}
                                </p>
                                <h5 className="card-title fw-bold mb-3 ">
                                    Rp {carData.price}
                                </h5>
                                <p className="card-text ">
                                    <img src={CardPict} alt="" srcset=""/>
                                    Waktu penyewaan
                                </p>
                                <p className="card-text ">
                                    <img src={Jam} alt="" srcset=""/>
                                    Tanggal
                                </p>
                                <div className="button d-flex col-12 justify-content-between">
                                    <a href="# " className="hapus btn border-danger text-danger"><i className="fa-solid fa-trash"></i>Delete</a>
                                    <a href="# " className="edit btn btn-success text-light"><i className="fa-solid fa-pen-to-square"></i>Edit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}