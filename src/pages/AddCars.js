import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';
import '../style/sidenav.css';
import {Form} from 'react-bootstrap';
import SideNav from "../components/SideNav";
import DashboardNav from "../components/DashboardNav";
import CarsMenu from "../components/CarsMenu";
import Dropzone from "../components/Dropzone";
import fileUploadService from '../services/file-upload.service';
import { useNavigate } from "react-router-dom";

export default function AddCars(){

    const [ currentFile, setCurrentFile ] = useState(null)
    const [ previewImage, setPreviewImage ] = useState(null)
    const [ progress, setProgress ] = useState(0)
    const [ message, setMessage ] = useState("")
    const [ imageInfos, setImageInfos ] = useState([])

    const [ inputCar, setInputCar] = useState(
        {
            name: "",
            category: "",
            price: 0,
            status: false
        }
    )
    const navigate = useNavigate()

    const onChangeHandler = (key, value) =>{
        console.log(key, value);
        inputCar[key] = value;
        setInputCar({...inputCar});
    }

    useEffect(()=>{
       const fetchData= async()=>{
        const response = await fileUploadService.getFiles()
        setImageInfos(response.data)
       }
       fetchData()
    }, [])

    const selectFile = (file) => {
        const reader = new FileReader();
        console.log(file);
        reader.addEventListener('load', () => {
            setPreviewImage(reader.result)
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
        setCurrentFile(file)
        setProgress(0)
        setMessage("")
    }

    const upload = async() =>{
        setProgress(0)
        try{
            console.log(currentFile);

            let formData = new FormData();
            Object.keys(inputCar).forEach((key)=>{
                formData.append(key, inputCar[key])
            })
            

            formData.append("image", currentFile);
            console.log(formData);

            const response = await fileUploadService.upload(formData, (event) => {
                setProgress(Math.round((100 * event.loaded) / event.total),)
            })
            setMessage(response.data.message)
            const files = await fileUploadService.getFiles()
            setImageInfos(files.data)  
            navigate('/list')
        } catch(err){
            setProgress(0)
            setMessage("Could not upload the image!")
            setCurrentFile(null)
        }
    }

    return(
        <div className="page2 m-0 p-0 d-flex">
            <SideNav/>
            <div id="dashboard" className="me-0 p-0">
                <DashboardNav/>
                <div className="d-flex">
                    <CarsMenu/>
                    <div id="content" className="margin">
                        <div className="contentDashboard d-flex">
                            <div id="tableUser" className="px-3">
                                <div className="head position-sticky pb-2">
                                    <div className="contentDashboard1">
                                        <div className="d-flex my-4">
                                            <p className="fw-bold mb-0">Cars</p>
                                            <p className="mx-2 mb-0">></p>
                                            <p className="mb-0">List car</p>
                                            <p className="mx-2 mb-0">></p>
                                            <p className="mb-0">Add New Car</p>
                                        </div>
                                        <div className="title2 d-flex justify-content-between">
                                            <h4 className="fw-bold">Add New Car</h4>
                                        </div>
                                    </div>
                                </div>

                                <Form
                                    onSubmit={(e)=>{
                                        e.preventDefault();
                                        // submitHandler(inputCar);
                                    }} 
                                >
                                    <div className="addData col-12 p-2">
                                        <div className="row align-items-center">
                                            <div className="formAdd col-auto">
                                                <Form.Label for="inputName" className="col-form-label">Nama</Form.Label>
                                            </div>
                                            <div className="col-auto">
                                                <Form.Control 
                                                    type="text" 
                                                    id="inputName" 
                                                    className="form-control"  
                                                    placeholder="Placeholder"
                                                    onChange={(e)=>{onChangeHandler("name", e.target.value)}}
                                                />
                                            </div>
                                        </div>

                                        <div className="row align-items-center py-3">
                                            <div className="formAdd col-auto">
                                                <Form.Label for="inputName" className="col-form-label">Kategori</Form.Label>
                                            </div>
                                            <div className="col-auto">
                                                <Form.Control 
                                                    type="text" 
                                                    id="inputName" 
                                                    className="form-control"
                                                    placeholder="Placeholder"
                                                    onChange={(e)=>{onChangeHandler("category", e.target.value)}}
                                                />
                                            </div>
                                        </div>

                                        <div className="row align-items-center">
                                            <div className="formAdd col-auto">
                                                <Form.Label for="inputName" className="col-form-label">Harga</Form.Label>
                                            </div>
                                            <div className="col-auto">
                                                <Form.Control 
                                                    type="number" 
                                                    id="inputName" 
                                                    className="form-control"
                                                    placeholder="Placeholder"
                                                    onChange={(e)=>{onChangeHandler("price", parseInt(e.target.value))}}
                                                />
                                            </div>
                                        </div>

                                        <div className="row align-items-center">
                                            <div className="formAdd col-auto">
                                                <Form.Label for="inputName" className="col-form-label">Foto</Form.Label>
                                            </div>
                                            <div className="col-auto">
                                                <Dropzone selectFile={selectFile} currentFile={currentFile} progress={progress} previewImage={previewImage} message={message} imageInfos={imageInfos}/>
                                            </div>
                                        </div>

                                        {/* <div className="row align-items-center py-3">
                                            <div className="formAdd col-auto">
                                                <label for="inputName" className="col-form-label">Start Rent</label>
                                            </div>
                                            <div className="col-auto align-content-center">
                                                <p className="m-0">-</p>
                                            </div>
                                        </div>

                                        <div className="row align-items-center py-3">
                                            <div className="formAdd col-auto">
                                                <label for="inputName" className="col-form-label">Finish Rent</label>
                                            </div>
                                            <div className="col-auto align-content-center">
                                                <p className="m-0">-</p>
                                            </div>
                                        </div>

                                        <div className="row align-items-center py-3">
                                            <div className="formAdd col-auto">
                                                <label for="inputName" className="col-form-label">Created at</label>
                                            </div>
                                            <div className="col-auto align-content-center">
                                                <p className="m-0">-</p>
                                            </div>
                                        </div>

                                        <div className="row align-items-center py-3">
                                            <div className="formAdd col-auto">
                                                <label for="inputName" className="col-form-label">Updated at</label>
                                            </div>
                                            <div className="col-auto align-content-center">
                                                <p className="m-0">-</p>
                                            </div>
                                        </div> */}
                                    
                                        <Form.Group className="mb-3">
                                            <Form.Check
                                                type="checkbox"
                                                id="disabledFieldsetCheck"
                                                label="Include Driver"
                                                onChange={(e)=>{onChangeHandler("status", e.target.checked)}}
                                                checked={inputCar.status}
                                            />
                                        </Form.Group>
                                    </div>

                                    <button type="button" className="btn btn-outline-primary btn-sm mt-4 text-primary me-3" onClick={()=>{navigate('/list')}}>Cancel</button>
                                    <button type="button" className="btn btn-primary btn-sm mt-4 text-light" onClick={upload}>Save</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}