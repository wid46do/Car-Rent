import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';

export default function CarsMenu(){
    return(
        <nav id="sidebar" className="position-fixed">
            <h1 className="fw-bold text-secondary mt-4">CARS</h1>
            <ul>
                <li><a href="#" className="text-decoration-none">List Car</a></li>
            </ul> 
        </nav>
    )
}