import React from "react";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../style/home.css';
import CarImage from "../image/landing/img_car.png";
import NavbarHome from "../components/NavbarHome";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import FooterHome from "../components/FooterHome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { PieChart } from "../components/PieChart";

export default function Home(){
    const { user: currentUser } = useSelector((state) => state.auth);

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchPrices = async () => {
          const res = await fetch("https://rent-cars-api.herokuapp.com/admin/car");
          const data = await res.json();
          console.log("ini chart");
          const filterData = data.slice(0, 4)
          console.log(filterData, "filter");
          const filterName = filterData.map((car) => car.name)
        //   let withDriver, withoutDriver = 0;
        //   data.forEach((car)=>{
        //       if(car.status){
        //           withDriver++;
        //       } else {
        //           withoutDriver++;
        //       }
        //   })

        let filterResult = [];
          filterName.forEach((name, nameIdx)=>{
              filterResult.push(0)
              filterData.forEach((car) => {
                  if(car.name === name){
                      filterResult[nameIdx]++;
                  }
              })
          })

          setChartData({
            // labels: ["withDriver", "withoutDriver"],
            labels: filterName,
            datasets: [
              {
                label: "car status",
                // data: [withDriver, withoutDriver],
                data: [2, 3, 2, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
              }
            ]
          });
        };
        fetchPrices();
      }, []);

    const alertLogin = () => {
        Swal.fire({
            title: 'Account required!',
            text: 'Please sign in to continue',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#5CB85F',
            cancelButtonText: '<a href="/login">Sign in</a>'
        })
    }

    return(
        <>
            <NavbarHome/>
            <main>
                <div id="#" className={`jumbotron jumbotron-fluid ${styles.jumbotron}`}>
                    <div className="container1 ">
                        <h1 className="display-4">Sewa & Rental Mobil Terbaik di <br/> kawasan (Lokasimu)</h1>
                        <p className="lead mx-3 mx-md-3 mx-lg-0">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br/> terbsaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br/> untuk sewa mobil selama 24 jam.</p>
                        {currentUser ? (
                            <Link to={"/search"} className="btn tombol">Mulai Sewa Mobil</Link>
                        ) : (
                            <button to={""} onClick={alertLogin} className="btn tombol">Mulai Sewa Mobil</button>
                        )}
                    </div>
                    <div className="container2 mt-md-0 my-5 my-lg-0 d-flex align-items-end">
                        <img src={CarImage} alt=" " srcSet=" "/>
                    </div>
                </div>
                <Services/>
                <WhyUs/>
                <PieChart 
                    chartData={chartData}
                />
                <Testimonial/>
                <section id="#" className="mx-3 mx-md-3 mx-lg-0">
                    <div className="content4">
                        <h1 className="mb-3 text-center">Sewa Mobil di (Lokasimu) Sekarang</h1>
                        <p className="mb-5 mx-3 mx-md-3 mx-lg-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        {currentUser ? (
                            <Link to={"/search"} className="btn tombol">Mulai Sewa Mobil</Link>
                        ) : (
                            <button to={""} onClick={alertLogin} className="btn tombol">Mulai Sewa Mobil</button>
                        )}
                    </div>
                </section>
                <Faq/>
                <FooterHome/>
            </main>
        </>
    );
};