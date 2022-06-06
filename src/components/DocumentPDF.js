// import domToPdf from 'dom-to-pdf'
// import { useRef } from 'react'

export default function MyDocument({pdfRef}){
    return(
        <div>
            <div className='d-flex justify-content-center d-none' ref={pdfRef}>
                <div className="col-lg-6 ms-md-3 ms-lg-4 mb-4 mb-md-0 mb-lg-0 mx-3 mx-md-3 mx-lg-0 p-4">
                    <h1 className='fw-bold'>Nama/Tipe Mobil</h1>
                    <div className="d-flex">
                        <h6><i className="fa-solid fa-user-group"></i>4 orang</h6>
                        <h6 className="mx-3"><i class="fa-solid fa-gear"></i>Manual</h6>
                        <h6><i className="fa-solid fa-calendar"></i>Tahun 2020</h6>
                    </div>
                    <div className="mt-5">
                        <h1 className='fw-bold'>Harga</h1>
                        <div className="d-flex justify-content-between">
                            <ul>
                                <li> 
                                    <h2>1 Mobil dengan sopir</h2> 
                                </li>
                            </ul>
                            <h2>Rp 430.000</h2>
                        </div>

                        <h1 className='fw-bold'>Biaya Lainya</h1>
                        <ul>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <h2 className="mb-0">Pajak</h2>
                                    <h2 className="text-success mb-0">Termasuk</h2>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <h2 className="mb-0">Biaya makan sopir</h2>
                                    <h2 className="text-success mb-0">Termasuk</h2>
                                </div>
                            </li>
                        </ul>

                        <h1 className='fw-bold'>Belum Termasuk</h1>
                        <ul>
                            <li>
                                <h2>Bensin</h2>
                            </li>
                            <li>
                                <h2>Tol dan parkir</h2>
                            </li>
                        </ul>

                        <div className="d-flex justify-content-between">
                            <h1 className='fw-bold'>Total</h1>
                            <h1 className='fw-bold'>Rp 430.000</h1>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
