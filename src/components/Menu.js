import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';
import '../style/sidenav.css';

export default function Menu(){
    return(
        <nav id="sidebar" className=" position-fixed">
            <h1 className="fw-bold text-secondary mt-4">DASHBOARD</h1>
            <ul>
                <li><a href="#" className="text-decoration-none">Dashboard</a></li>
            </ul>
        </nav>
    );
};