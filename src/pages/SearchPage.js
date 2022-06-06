import React from 'react';
import '../style/searchpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarImage from "../image/landing/img_car.png";
import { useNavigate } from "react-router-dom";
import NavbarHome from '../components/NavbarHome';
import SearchForm from '../components/SearchForm';
import FooterHome from '../components/FooterHome';

export default function SearchPage(){

    const navigate = useNavigate();

    const searchHandler = (searchCriteria) =>{
        navigate(`/result?tipe=${searchCriteria.driverType}`);
    };

    return(
        <>
            <NavbarHome/>
            <main>
                <div id="#" className="jumbotron jumbotron-fluid ">
                    <div className="container1 ">
                       <h1 className="display-4">Sewa & Rental Mobil Terbaik di <br/> kawasan (Lokasimu)</h1>
                        <p className="lead mx-3 mx-md-3 mx-lg-0">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br/> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br/> untuk sewa mobil selama 24 jam.</p>
                    </div>
                    <div className="container2 mt-md-0 my-5 my-lg-0 d-flex align-items-end">
                        <img src={CarImage} alt=" " srcSet=" "/>
                    </div>
                </div>
                <SearchForm
                   submitHandler={searchHandler}
                />
            </main>
            <FooterHome/>
        </>
    );
};