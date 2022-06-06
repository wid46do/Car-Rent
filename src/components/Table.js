import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';
import { useDispatch, useSelector } from "react-redux";
import { getCarData } from "../actions/carActions";

export default function Table(){
    const { getCarDataResult, getCarDataLoading, getCarDataError } = useSelector((state) => state.cars);

    if(getCarDataLoading){
        return(
            <h1>loading</h1>
        )
    }

    if(getCarDataError){
        return(
            <h1>{getCarDataError}</h1>
        )
    }

    if(!getCarDataResult){
        return(
            <h1></h1>
        )
    }

    return(
        <table id="table_id" className="table overflow-scroll">
            <thead>
                <tr className="tableHead">
                    <th>No</th>
                    <th>User Email</th>
                    <th>Car</th>
                    <th>Start Rent</th>
                    <th>Finish Rent</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            {getCarDataResult?.map((list) =>{
                return(
                    <tbody key={list.id}>
                        <tr>
                            <td>No.</td>
                            <td>User Email</td>
                            <td>{list.name}</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>{list.price}</td>
                            <td>Status</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    );
};