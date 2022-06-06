import React, { useContext, useState, useEffect } from "react";
import '../style/searchpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";
import FooterHome from "../components/FooterHome";
import Editform from "../components/EditForm";
import CardClient from "../components/Card";

export default function ResultPage(){

    const [searchParams, setSearchParams] = useSearchParams();

    const editHandler = (searchCriteria) =>{
        setSearchParams({tipe: searchCriteria.driverType});
    };

    return(
        <>
            <NavbarHome/>
            <main>
                <div id="#" className="result jumbotron-fluid "></div>
                <Editform 
                    submitHandler={editHandler}
                />
                <CardClient/>
            </main>
            <FooterHome/>
        </>
    );
};