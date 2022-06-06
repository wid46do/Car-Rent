import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';
import '../style/sidenav.css';
import SideNav from "../components/SideNav";
import DashboardNav from "../components/DashboardNav";
import CarsMenu from "../components/CarsMenu";
import CardDasboard from "../components/CardDashboard";

export default function ListCars(){
    return(
        <div className="page2 m-0 p-0 d-flex">
            <SideNav/>
            <div id="dashboard" className="me-0 p-0">
                <DashboardNav/>
                <div id="dashboard" className="me-0 p-0">
                    <div className="d-flex">
                        <CarsMenu/>
                        <div id="contentDashboard" className="margin">
                            <div id="tableUser" className="px-3">
                                <div className="head position-sticky pb-2">
                                    <div className="contentDashboard1">
                                        <div className="d-flex my-4">
                                            <p className="fw-bold mb-0">Cars</p>
                                            <p className="mx-2 mb-0">></p>
                                            <p className="mb-0">List car</p>
                                        </div>
                                        <div className="title2 d-flex justify-content-between">
                                            <h4 className="fw-bold">List Car</h4>
                                            <a href="/add" type="button" className="btn btn-primary text-light border-0"><i className="fa-solid fa-plus"></i>Add New Car</a>
                                            {/* <button type="button" className="btn btn-primary btn-lg text-light border-0"><i className="fa-solid fa-plus"></i>Aad New Car</button> */}
                                        </div>
                                        <div className="div">
                                            <button type="button" className="btn btn-outline-primary">All</button>
                                            <button type="button" className="btn btn-outline-primary">Small</button>
                                            <button type="button" className="btn btn-outline-primary">Medium</button>
                                            <button type="button" className="btn btn-outline-primary">Large</button>
                                        </div>
                                    </div>
                                </div>

                               <div className="product">
                                    <CardDasboard/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}