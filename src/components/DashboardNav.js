import React, { useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';
import NavLogo from "../image/dashboard/Rectangle_62.png";
import ProfilePict from "../image/dashboard/Group_15.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap'; 

export default function DashboardNav(){
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);
    
    return(
        <nav id="navbar" className="navbar navbar-light bg-light position-sticky top-0 shadow-sm">
            <div className="container-fluid justify-content-start">
                <img src={NavLogo} alt="" srcSet=""/>
                <button type="button" id="sidebarCollapse" className="burger btn border-0">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <form className="d-flex mb-0 ms-auto">
                    <input className="form-control rounded-0" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn rounded-0" type="submit">Search</button>
                </form>

                <div className="dropdown d-flex flex-row ms-4">
                    <img src={ProfilePict} alt="" srcSet=""/>
                    <a className="nav-link dropdown-toggle text-decoration-none text-black" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {currentUser.username}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a className="dropdown-item" href="/">Logout</a></li>
                    </ul>
                </div>

                <Dropdown className="ms-4">
                    <img src={ProfilePict} alt="" srcSet=""/>
                    <Dropdown.Toggle id="dropdown-basic-button" className="bg-light ms-3 btn-outline-light" 
                    // id="dropdown-basic"
                    >
                        {currentUser.username} 
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/" onClick={logOut}>
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>  
        </nav>
    );
};