import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';
import ImgSideNav from "../image/dashboard/Rectangle_63.png"

export default function SideNav(){
    return(
        <div id="sidenav" className="container col justify-content-center text-center p-0 position-sticky top-0">
            <div className="logo">
                <img src={ImgSideNav} alt="" srcSet=""/>
            </div>
            <ul className="navlist p-0">
                <li className="d-flex flex-column align-items-center justify-content-center">
                    <a href="/dashboard"><i className="fa-solid fa-house"></i><p className="mb-0">Dashboard</p></a>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-center">
                    <a href="/list"><i className="fa-solid fa-truck"></i><p className="mb-0">Cars</p></a>
                </li>
                <div className="active"></div>
            </ul>
        </div>
    );
};