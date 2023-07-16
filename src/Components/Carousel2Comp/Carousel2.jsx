import React from 'react'
import "./Carousel2.css"

const Carousel2 = () => {
    return (
        <>
            <div style={{ margin: " 50px auto" }} className="container col-12">

                <div className="containerr w-100 h-25">
                    <div className="row">
                        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img style={{ height: "400px", objectFit: "contain" }} src="https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta6.jpg"
                                        className="d-block w-100 " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img style={{ height: "400px", objectFit: "contain" }} src="https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta5.jpg"
                                        className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img style={{ height: "400px", objectFit: "contain" }} src="https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta4.jpg"
                                        className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img style={{ height: "400px", objectFit: "contain" }} src="https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta3.jpg"
                                        className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img style={{ height: "400px", objectFit: "contain" }} src="https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta2.jpg"
                                        className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img style={{ height: "400px", objectFit: "contain" }} src="https://bestwebcreator.com/shopwise/demo/assets/images/furniture_insta1.jpg"
                                        className="d-block w-100" alt="..." />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel2
