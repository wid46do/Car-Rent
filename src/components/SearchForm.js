import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/searchform.css'
import { useLocation } from "react-router-dom";

export default function SearchForm(props){

    const location = useLocation()
    const currentUrl = location.pathname
    const [inputValues, setInputValues] = useState(
        {
            driverType: "",
            date: "",
            time: "",
            passanger: ""
        }
    );
    console.log(inputValues)
    
    const onChangeHandler = (key, value) =>{
        const newInputValues = {...inputValues};
        newInputValues[key] = value;
        setInputValues(newInputValues);
    }

    return(
        <Form 
            onSubmit={(e)=>{
                e.preventDefault();
                props.submitHandler(inputValues);
            }} 
            className={currentUrl.startsWith("/detail")? "search-form-detail bg-none d-flex justify-content-center" :"search-form bg-none"}
        >
            <div className="search-form2 row mb-4 mb-md-0 mb-lg-0 mx-3 mx-md-3 mx-lg-0 p-4 rounded-3 shadow bg-light">
                <div className="col">
                    <Form.Label>Tipe driver</Form.Label>
                    <Form.Select 
                        className="form2" 
                        disabled={currentUrl.startsWith("/detail")} 
                        value={inputValues.driverType} 
                        onChange={(e)=>{onChangeHandler("driverType", e.target.value)}}
                    >
                        <option>Pilih Tipe Driver</option>
                        <option value="1">Dengan Sopir</option>
                        <option value="2">Tanpa Sopir(Lepas Kunci)</option>
                    </Form.Select>
                </div>

                <div className="col">
                    <Form.Label>Tanggal</Form.Label>
                    <Form.Control
                        onChange={(e)=>{onChangeHandler("date", e.target.value)}}
                        disabled={currentUrl.startsWith("/detail")}
                        type="date"
                        className="form2 form-control"
                        placeholder="Pilih Tanggal"
                    />
                </div>

                <div className="col">
                    <Form.Label>Waktu Jemput/Ambil</Form.Label>
                    <Form.Select 
                        className="form2" 
                        disabled={currentUrl.startsWith("/detail")}
                        onChange={(e)=>{onChangeHandler("time", e.target.value)}}
                    >
                        <option>Pilih Waktu</option>
                        <option value="1">08.00 WIB</option>
                        <option value="2">09.00 WIB</option>
                        <option value="3">10.00 WIB</option>
                        <option value="4">11.00 WIB</option>
                        <option value="5">12.00 WIB</option>
                    </Form.Select>
                </div>

                <div className="form1 col">
                    <Form.Label>Jumlah Penumpang (optional)</Form.Label>
                    <div className="form2 input-group">
                        <Form.Control
                            disabled={currentUrl.startsWith("/detail")}
                            type="input"
                            className="form-control border-end-0"
                            placeholder="Jumlah Penumpang"
                            onChange={(e)=>{onChangeHandler("passanger", e.target.value)}}
                        />
                        <span className="input-group-text border-start-0"><i className="fa-solid fa-user-group"></i></span>
                    </div>
                </div>

                <div className={currentUrl.startsWith("/detail")? "d-none" :"col d-flex mt-3 mt-md-0 mt-lg-0 align-items-end justify-content-center"}>
                    <Button 
                        type="submit" 
                        variant="success"
                    >
                        Cari Mobil
                    </Button>
                </div>
            </div>
        </Form>
    );
};