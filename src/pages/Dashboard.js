import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';
import '../style/sidenav.css';
import SideNav from "../components/SideNav";
import DashboardNav from "../components/DashboardNav";
import Menu from "../components/Menu";
import Table from "../components/Table";

export default function Dashboard(){
    return(
        <div className="page2 m-0 p-0 d-flex">
            <SideNav/>
            <div id="dashboard" className="me-0 p-0">
                <DashboardNav/>
                <div className="d-flex">
                    <Menu/>
                    <div id="contentDashboard" className="margin">
                        <div id="tableUser" className="pt-0 px-2 pb-2">
                            <div className="head position-sticky">
                                <div className="contentDashboard1">
                                    <div className="d-flex my-4">
                                        <p className="fw-bold mb-0">Dashboard</p>
                                        <p className="mx-2 mb-0">></p>
                                        <p className="mb-0">Dashboard</p>
                                    </div>
                                    <div className="title2 d-flex justify-content-between">
                                        <h4 className="fw-bold">Dashboard</h4>
                                    </div>
                                    <div className="div">
                                        <p className="fw-bold">List Order</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contentDashboard">
                                <Table/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}