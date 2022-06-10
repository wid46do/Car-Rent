import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
// import { Nav, Navbar } from "react-bootstrap";
import { Nav, Navbar, Container, Form, NavDropdown, FormControl, Button } from "react-bootstrap";
import LandingLogo from "../image/landing/Rectangle_74.png";
import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";
import { history } from "../helpers/history";
import EventBus from "../common/EventBus";

export default function NavbarHome(){
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage());
        });
    }, [dispatch]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        } else {
            setShowModeratorBoard(false);
            setShowAdminBoard(false);
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);

    return(
        <header>
            <div className="mx-4 mx-md-4 ml-lg-136">
                <Navbar className="navbar navbar-expand-lg navbar-light p-0 py-3">
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <Container fluid>
                    <Navbar.Brand href="#"><img src={LandingLogo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                        <Nav className="ms-auto mr-136"  navbarScroll>
                            <Nav.Link className=" text-dark" href="/">Home</Nav.Link>
                            <Nav.Link className=" text-dark" href="#ourservices">Our Services</Nav.Link>
                            <Nav.Link className=" text-dark" href="#whyus">Why Us</Nav.Link>
                            <Nav.Link className=" text-dark" href="#testimonial">Testimonial</Nav.Link>
                            <Nav.Link className=" text-dark" href="#faq">FAQ</Nav.Link>
                            {showModeratorBoard && (
                                <li className="nav-item">
                                    <Nav.Link to={"/mod"} className="">
                                       Moderator Board
                                    </Nav.Link>
                                </li>
                            )}

                            {showAdminBoard && (
                                <li className="nav-item">
                                    <Navigate to={"/dashboard"} className="nav-link">
                                        Admin Board
                                    </Navigate>
                                </li>
                            )}

                            {currentUser ? (
                                <>
                                    <a className="nav-link text-dark" href="#">{currentUser.username}</a>
                                    <a href="/" className="nav-link text-dark" onClick={logOut}>LogOut</a>
                                </>
                            ) : (
                                <>
                                    <Link data-testid="signIn" to={'/login'} className="nav-link text-dark">
                                        SignIn
                                    </Link>
                                    <Link data-testid="register" to={'/register'} className="nav-link btn btn-success text-light">
                                        Register
                                    </Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
};