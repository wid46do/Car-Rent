import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/home.css';
import { Accordion } from "react-bootstrap";

export default function Faq() {
    return ( 
        <section  id="faq" className = "d-flex flex-column flex-lg-row justify-content-lg-between mt-5 mt-md-3 mt-lg-0">
            <div className="faq1">
                <h1 className="text-center text-md-center text-lg-start mx-3 mx-md-3 mx-lg-0"> Frequently Asked Question </h1> 
                <p className="text-center text-md-center text-lg-start mx-3 mx-md-3 mx-lg-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            
            <div className="accordion col-lg-6 px-3 px-md-3 px-lg-0" id="accordionExample">
                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0" className="mb-3">
                        <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0" className="mb-3">
                        <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0" className="mb-3">
                        <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0" className="mb-3">
                        <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Bagaimana jika terjadi kecelakaan</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div> 
        </section>
    );
};