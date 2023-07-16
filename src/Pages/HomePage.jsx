import React, { useEffect, useState } from 'react'
import Carousel from '../Components/CarouselComp/Carousel'
import Sec3 from '../Components/Sec3Com/Sec3'
import Sec4 from '../Components/Sec4Comp/Sec4'
import Carousel2 from '../Components/Carousel2Comp/Carousel2'
import ProductsPage from './ProductsPage'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'
import Sec5 from '../Components/Sec5Comp/Sec5'
import Sec6 from '../Components/Sec6Comp/Sec6'
import axios from 'axios'
import Sec7 from '../Components/Sec7Comp/Sec7'

const HomePage = () => {
    // const { products } = useSelector(state => state.products)
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProducts(res))
    }, [])
    // console.log(result);
    return (
        <>
            <Carousel />
            <Sec3 />
            {/* <h1 className='col-12 d-flex justify-content-center align-items-center '>Exclusive Products</h1> */}
            {/* <div className="container"> */}
            {/* <div className="row g-3 justify-content-evenly  ">
                <div className="col-9 d-flex justify-content-around
             align-items-center flex-wrap ">
                    <Card product={products[0]} />
                    <Card product={products[1]} />
                    <Card product={products[2]} />
                    <Card product={products[3]} />
                    <Card product={products[4]} />
                    <Card product={products[5]} />
                </div>

            </div> */}
            {/* </div> */}
            <Sec4 />
            <Sec5 />
            <Sec6 />
            <Sec7 />
        </>
    )
}

export default HomePage
