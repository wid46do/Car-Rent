import React, { useEffect, useState } from "react";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/searchpage.css';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavbarHome from "../components/NavbarHome";
import FooterHome from "../components/FooterHome";
import SearchForm from "../components/SearchForm";

export default function Detail(){
    const { getCarDataResult, getCarDataLoading, getCarDataError } = useSelector((state) => state.cars);

    const params = useParams();

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

    const detail = getCarDataResult.find((car) => car.id === parseInt(params.carId))

    console.log(detail);

    return(
        <>
            <NavbarHome/>
            <main>
                <div id="#" className="result jumbotron-fluid "></div>
                <SearchForm/>
                <div className="detail d-lg-flex mt-4">
                    <div className="detail-content me-3">
                        <div className="list-detail rounded shadow-sm border py-3 px-3 bg-light">
                            <h5 className="fw-bold">Tentang Paket</h5>
                            <p>Include</p>
                            <ul>
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                            </ul>
                            <p>Exclude</p>
                            <ul>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                            <h5 className="fw-bold">Refund, Reschedule, Overtime</h5>
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
                        <div className="d-flex justify-content-end pt-3">
                            <Button className="btn-success">Lanjut Pembayaran</Button>
                        </div>     
                    </div>

                    <div className="card-cover3">
                        <div id="cardDetail" className="card shadow-sm">
                            <img src={detail?.image} className="card-img-top" alt="" srcSet="" />
                            <div className="card-body">
                                <h5>Nama/Tipe Mobil</h5>
                                <h5>{detail.name}</h5>
                                <div className="d-flex">
                                    <p><i className="fa-solid fa-user-group"></i>4 orang</p>
                                    <p className="mx-3"><i class="fa-solid fa-gear"></i>Manual</p>
                                    <p><i className="fa-solid fa-calendar"></i>Tahun 2020</p>
                                </div>
                                <hr className="my-4" />
                                <div className="total d-flex justify-content-between">
                                    <p>Total</p>
                                    <p className="fw-bold">Rp {detail.price}</p>
                                </div>
                                <div className="d-grid">
                                    {/* <Button className="btn-success">Lanjutkan Pembayaran</Button> */}
                                    <Link 
                                      to={`/tiket`} 
                                      className="btn btn-success"
                                    >
                                        Pilih Mobil
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <FooterHome/>
        </>
    );
};