import React, { useEffect } from 'react'
import "./Carousel.css"
import { useSelector } from 'react-redux'
const Carousel = () => {
    const { products } = useSelector(state => state.products)
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active CarImg">
                        <img style={{ height: "600px", objectFit: "cover" }}
                            src="https://bestwebcreator.com/shopwise/demo/assets/images/banner8.jpg"
                            className="d-block w-100" alt="..." />
                        <div className='textSec'>
                            <h1>Sofa Collection</h1>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</h5>
                            <button className='btn btn-outline-primary'>Shop Now</button>
                        </div>
                    </div>
                    <div className="carousel-item CarImg">
                        <img style={{ height: "600px", objectFit: "cover" }}
                            src="https://bestwebcreator.com/shopwise/demo/assets/images/banner7.jpg"
                            className="d-block w-100" alt="..." />
                        <div className='textSec'>
                            <h5>Get up to 50% off Today Only!</h5>
                            <h1>Wooden Chair Collection</h1>
                            <button className='btn btn-outline-danger'>Shop Now</button>
                        </div>

                    </div>
                    <div className="carousel-item CarImg">
                        <img style={{ height: "600px", objectFit: "cover" }}
                            src="https://bestwebcreator.com/shopwise/demo/assets/images/banner9.jpg"
                            className="d-block w-100" alt="..." />
                        <div className='textSec'>
                            <h5>Taking your Viewing Experience to Next Level</h5>
                            <h1>Living Room Collection</h1>
                            <button className='btn btn-outline-danger'>Shop Now</button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Carousel
