import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const ProductsShow = () => {
    const { products } = useSelector(state => state.products)
    // useEffect(() => {
    //     // console.log(products);
    // }, [])
    return (
        <>
            <h1 className='col- d-flex justify-content-center align-items-center m-5'>Our Products</h1>
            <div className="container">
                <div className="row g-3 justify-content-evenly ">
                    {products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductsShow
