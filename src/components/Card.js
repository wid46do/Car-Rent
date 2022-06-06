import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/card.css';
import { Card } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarData } from "../actions/carActions";

export default function CardClient(){
    
    const [searchResult, setSearchResult] = useState([]);
    const { getCarDataResult, getCarDataLoading, getCarDataError } = useSelector((state) => state.cars);
    const [searchParams, setSearchParams] = useSearchParams();

    const tipeCriteria = searchParams.get("tipe")

    useEffect(()=>{
        if(tipeCriteria !== "" && getCarDataResult){
            const result = getCarDataResult.filter((data)=>{
                if(tipeCriteria === "1"){
                    return data.status === true
                } else {
                    return data.status === false
                }
            });
            setSearchResult(result);
        };
    });

    if(getCarDataLoading){
        return (
            <div>Loading...</div>
        )
    }

    if(getCarDataError){
        return (
            <div>{getCarDataError}</div>
        )
    }
                    

    return(
        <div className="card-cover row mt-3">
                {searchResult?.map((car) => {
                    return(
                        <div key={car.id} className="card-cover2 col-12 col-md-6 col-lg-4 my-3">
                            <div id="cardResult" className="card shadow-sm">
                                <div className="card-img p-3 overflow-hidden">
                                    <Card.Img variant='top' src={car.image}/>
                                    {/* <img src={car.image} className="card-img-top" alt="" srcSet="" /> */}
                                </div>
                                <div className="card-body bg-light">
                                    <h6>{car.name}</h6>
                                    <h5 className="fw-bold">Rp {car.price} / hari</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <div className="icon">
                                        <p><i className="fa-solid fa-user-group"></i>4 orang</p>
                                        <p><i className="fa-solid fa-gear"></i>Manual</p>
                                        <p><i className="fa-solid fa-calendar"></i>Tahun 2020</p>
                                    </div>
                                    <div className="d-grid">
                                        <Link 
                                        to={`/detail/${car.id}`} 
                                        className="btn btn-success"
                                        >
                                            Pilih Mobil
                                        </Link>
                                    </div>
                                </div>
                            </div>
                       </div>
                    )
                })}
        </div>
    );
};